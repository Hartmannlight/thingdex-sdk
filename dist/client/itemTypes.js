import { sanitizeQuery, unwrap } from "./core";
export const createItemTypesClient = ({ generated }) => ({
    list: (query) => unwrap(generated.GET("/v1/item-types", { params: { query: sanitizeQuery(query) } })),
    get: (itemTypeId) => unwrap(generated.GET("/v1/item-types/{item_type_id}", { params: { path: { item_type_id: itemTypeId } } })),
    create: (body) => unwrap(generated.POST("/v1/item-types", { body })),
    update: (itemTypeId, body) => unwrap(generated.PATCH("/v1/item-types/{item_type_id}", { params: { path: { item_type_id: itemTypeId } }, body })),
    delete: (itemTypeId) => unwrap(generated.DELETE("/v1/item-types/{item_type_id}", { params: { path: { item_type_id: itemTypeId } } })),
});
//# sourceMappingURL=itemTypes.js.map