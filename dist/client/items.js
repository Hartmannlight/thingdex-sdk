import { sanitizeQuery, unwrap } from "./core";
export const createItemsClient = ({ generated }) => ({
    list: (query) => unwrap(generated.GET("/v1/items", {
        params: { query: sanitizeQuery(query) },
    })),
    get: (itemId) => unwrap(generated.GET("/v1/items/{item_id}", { params: { path: { item_id: itemId } } })),
    createWithSideEffects: (body) => unwrap(generated.POST("/v1/items", { body })),
    create: async (body) => (await unwrap(generated.POST("/v1/items", { body }))).data,
    delete: (itemId) => unwrap(generated.DELETE("/v1/items/{item_id}", { params: { path: { item_id: itemId } } })),
    bulkCreate: (body) => unwrap(generated.POST("/v1/items/bulk", { body })),
    bulkUpdate: (body) => unwrap(generated.PATCH("/v1/items/bulk", { body })),
    bulkMove: (body) => unwrap(generated.PATCH("/v1/items/bulk/move", { body })),
    update: (itemId, body) => unwrap(generated.PATCH("/v1/items/{item_id}", { params: { path: { item_id: itemId } }, body })),
    move: (itemId, body) => unwrap(generated.PATCH("/v1/items/{item_id}/move", { params: { path: { item_id: itemId } }, body })),
    mergeProps: (itemId, body) => unwrap(generated.PATCH("/v1/items/{item_id}/props", { params: { path: { item_id: itemId } }, body })),
    replaceProps: (itemId, body) => unwrap(generated.PUT("/v1/items/{item_id}/props", { params: { path: { item_id: itemId } }, body })),
    history: (itemId, query) => unwrap(generated.GET("/v1/items/{item_id}/history", {
        params: { path: { item_id: itemId }, query: sanitizeQuery(query) },
    })),
    listSnapshots: (itemId, query) => unwrap(generated.GET("/v1/items/{item_id}/snapshots", {
        params: { path: { item_id: itemId }, query: sanitizeQuery(query) },
    })),
    createSnapshot: (itemId, body) => unwrap(generated.POST("/v1/items/{item_id}/snapshots", { params: { path: { item_id: itemId } }, body })),
    deleteSnapshot: (itemId, snapshotId) => unwrap(generated.DELETE("/v1/items/{item_id}/snapshots/{snapshot_id}", {
        params: { path: { item_id: itemId, snapshot_id: snapshotId } },
    })),
    search: (body) => unwrap(generated.POST("/v1/items/search", { body })),
    listMissingLocation: () => unwrap(generated.GET("/v1/items/missing-location")),
});
//# sourceMappingURL=items.js.map