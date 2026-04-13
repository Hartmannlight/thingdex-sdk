import { createThingdexDependencies, ThingdexApiError } from "./core";
import { createItemTypesClient } from "./itemTypes";
import { createItemsClient } from "./items";
import { createLabelsClient } from "./labels";
import { createLocationsClient } from "./locations";
import { createRelationsClient } from "./relations";
export * from "./core";
export * from "./types";
export const createThingdexSdk = (config) => {
    const dependencies = createThingdexDependencies(config);
    return {
        itemTypes: createItemTypesClient(dependencies),
        items: createItemsClient(dependencies),
        labels: createLabelsClient(dependencies),
        locations: createLocationsClient(dependencies),
        relations: createRelationsClient(dependencies),
    };
};
export { ThingdexApiError };
//# sourceMappingURL=index.js.map