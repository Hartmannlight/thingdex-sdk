import type { paths } from "./schema";
export type ThingdexSdkConfig = {
    baseUrl: string;
    fetch?: typeof globalThis.fetch;
    headers?: HeadersInit;
    timeoutMs?: number;
};
export type ThingdexGeneratedClient = ReturnType<typeof createThingdexGeneratedClient>;
export declare const createThingdexGeneratedClient: (config: ThingdexSdkConfig) => import("openapi-fetch").Client<paths, `${string}/${string}`>;
//# sourceMappingURL=runtime.d.ts.map