import type { LabelReprintRequest } from "./types";
import type { ThingdexSdkDependencies } from "./core";
import { unwrap } from "./core";

export const createLabelsClient = ({ generated }: ThingdexSdkDependencies) => ({
  print: (body: LabelReprintRequest) =>
    unwrap<unknown>(generated.POST("/v1/labels/print", { body })),
});
