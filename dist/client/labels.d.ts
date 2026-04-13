import type { LabelReprintRequest } from "./types";
import type { ThingdexSdkDependencies } from "./core";
export declare const createLabelsClient: ({ generated }: ThingdexSdkDependencies) => {
    print: (body: LabelReprintRequest) => Promise<unknown>;
};
//# sourceMappingURL=labels.d.ts.map