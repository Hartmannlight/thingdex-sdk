import { createThingdexGeneratedClient } from "../generated/runtime";
export class ThingdexApiError extends Error {
    status;
    detail;
    constructor(status, message, detail) {
        super(message);
        this.status = status;
        this.detail = detail;
    }
}
export const unwrap = async (operation) => {
    const { data, error, response } = await operation;
    if (response.ok) {
        return data;
    }
    let message = response.statusText || "Request failed";
    if (error && typeof error === "object" && "detail" in error) {
        message = "Request failed";
    }
    throw new ThingdexApiError(response.status, message, error);
};
export const sanitizeQuery = (query) => {
    if (!query)
        return undefined;
    return Object.fromEntries(Object.entries(query).filter(([, value]) => value !== undefined && value !== null && value !== ""));
};
export const createThingdexDependencies = (config) => ({
    generated: createThingdexGeneratedClient(config),
});
//# sourceMappingURL=core.js.map