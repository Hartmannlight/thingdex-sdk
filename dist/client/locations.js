import { sanitizeQuery, unwrap } from "./core";
export const createLocationsClient = ({ generated }) => ({
    createWithSideEffects: (body) => unwrap(generated.POST("/v1/locations", { body })),
    create: async (body) => (await unwrap(generated.POST("/v1/locations", { body }))).data,
    get: (locationId) => unwrap(generated.GET("/v1/locations/{location_id}", { params: { path: { location_id: locationId } } })),
    update: (locationId, body) => unwrap(generated.PATCH("/v1/locations/{location_id}", { params: { path: { location_id: locationId } }, body })),
    delete: (locationId) => unwrap(generated.DELETE("/v1/locations/{location_id}", { params: { path: { location_id: locationId } } })),
    listChildren: (locationId, query) => unwrap(generated.GET("/v1/locations/{location_id}/children", {
        params: { path: { location_id: locationId }, query: sanitizeQuery(query) },
    })),
    getPath: (locationId) => unwrap(generated.GET("/v1/locations/{location_id}/path", { params: { path: { location_id: locationId } } })),
    listItems: (locationId, query) => unwrap(generated.GET("/v1/locations/{location_id}/items", {
        params: { path: { location_id: locationId }, query: sanitizeQuery(query) },
    })),
    getRoot: () => unwrap(generated.GET("/v1/locations/root")),
    bootstrapRoot: () => unwrap(generated.POST("/v1/locations/root/bootstrap")),
    getTree: (query) => unwrap(generated.GET("/v1/locations/tree", { params: { query: sanitizeQuery(query) } })),
});
//# sourceMappingURL=locations.js.map