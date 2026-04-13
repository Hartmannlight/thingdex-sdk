import type { ThingdexGeneratedClient, ThingdexSdkConfig } from "../generated/runtime";
import { createThingdexGeneratedClient } from "../generated/runtime";

export class ThingdexApiError extends Error {
  status: number;
  detail?: unknown;

  constructor(status: number, message: string, detail?: unknown) {
    super(message);
    this.status = status;
    this.detail = detail;
  }
}

export const unwrap = async <T>(
  operation: Promise<{ data?: T; error?: unknown; response: Response }>
): Promise<T> => {
  const { data, error, response } = await operation;
  if (response.ok) {
    return data as T;
  }

  let message = response.statusText || "Request failed";
  if (error && typeof error === "object" && "detail" in error) {
    message = "Request failed";
  }

  throw new ThingdexApiError(response.status, message, error);
};

export const sanitizeQuery = <T extends Record<string, unknown> | undefined>(query: T) => {
  if (!query) return undefined;
  return Object.fromEntries(
    Object.entries(query).filter(([, value]) => value !== undefined && value !== null && value !== "")
  ) as T;
};

export type ThingdexSdkDependencies = {
  generated: ThingdexGeneratedClient;
};

export const createThingdexDependencies = (config: ThingdexSdkConfig): ThingdexSdkDependencies => ({
  generated: createThingdexGeneratedClient(config),
});
