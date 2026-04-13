import type { ThingdexGeneratedClient, ThingdexSdkConfig } from "../generated/runtime";
export declare class ThingdexApiError extends Error {
    status: number;
    detail?: unknown;
    constructor(status: number, message: string, detail?: unknown);
}
export declare const unwrap: <T>(operation: Promise<{
    data?: T;
    error?: unknown;
    response: Response;
}>) => Promise<T>;
export declare const sanitizeQuery: <T extends Record<string, unknown> | undefined>(query: T) => T | undefined;
export type ThingdexSdkDependencies = {
    generated: ThingdexGeneratedClient;
};
export declare const createThingdexDependencies: (config: ThingdexSdkConfig) => ThingdexSdkDependencies;
//# sourceMappingURL=core.d.ts.map