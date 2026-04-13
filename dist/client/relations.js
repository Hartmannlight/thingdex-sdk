import { sanitizeQuery, unwrap } from "./core";
export const createRelationsClient = ({ generated }) => ({
    create: (parentItemId, body) => unwrap(generated.POST("/v1/items/{item_id}/relations", { params: { path: { item_id: parentItemId } }, body })),
    listChildren: (itemId, query) => unwrap(generated.GET("/v1/items/{item_id}/relations/children", {
        params: { path: { item_id: itemId }, query: sanitizeQuery(query) },
    })),
    listParents: (itemId, query) => unwrap(generated.GET("/v1/items/{item_id}/relations/parents", {
        params: { path: { item_id: itemId }, query: sanitizeQuery(query) },
    })),
    update: (relationId, body) => unwrap(generated.PATCH("/v1/relations/{relation_id}", { params: { path: { relation_id: relationId } }, body })),
    detach: (relationId, body) => unwrap(generated.POST("/v1/relations/{relation_id}/detach", { params: { path: { relation_id: relationId } }, body })),
    delete: (relationId) => unwrap(generated.DELETE("/v1/relations/{relation_id}", { params: { path: { relation_id: relationId } } })),
});
//# sourceMappingURL=relations.js.map