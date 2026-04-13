import { unwrap } from "./core";
export const createLabelsClient = ({ generated }) => ({
    print: (body) => unwrap(generated.POST("/v1/labels/print", { body })),
});
//# sourceMappingURL=labels.js.map