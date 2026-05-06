import type { ItemOut, LocationCreate, LocationCreateResponse, LocationOut, LocationPathItem, LocationTreeNode, LocationUpdate } from "./types";
import type { ThingdexSdkDependencies } from "./core";
import { sanitizeQuery, unwrap } from "./core";

export const createLocationsClient = ({ generated }: ThingdexSdkDependencies) => ({
  createWithSideEffects: (body: LocationCreate) => unwrap<LocationCreateResponse>(generated.POST("/v1/locations", { body })),
  create: async (body: LocationCreate) => (await unwrap<LocationCreateResponse>(generated.POST("/v1/locations", { body }))).data,
  get: (locationId: string) =>
    unwrap<LocationOut>(generated.GET("/v1/locations/{location_id}", { params: { path: { location_id: locationId } } })),
  update: (locationId: string, body: LocationUpdate) =>
    unwrap<LocationOut>(generated.PATCH("/v1/locations/{location_id}", { params: { path: { location_id: locationId } }, body })),
  delete: (locationId: string) =>
    unwrap<void>(generated.DELETE("/v1/locations/{location_id}", { params: { path: { location_id: locationId } } })),
  listChildren: (
    locationId: string,
    query?: { limit?: number | null; offset?: number | null; include_deleted?: boolean | null }
  ) =>
    unwrap<LocationOut[]>(
      generated.GET("/v1/locations/{location_id}/children", {
        params: { path: { location_id: locationId }, query: sanitizeQuery(query) },
      } as never)
    ),
  getPath: (locationId: string) =>
    unwrap<LocationPathItem[]>(generated.GET("/v1/locations/{location_id}/path", { params: { path: { location_id: locationId } } })),
  listItems: (
    locationId: string,
    query?: { include_descendants?: boolean | null; limit?: number | null; offset?: number | null; include_deleted?: boolean | null }
  ) =>
    unwrap<ItemOut[]>(
      generated.GET("/v1/locations/{location_id}/items", {
        params: { path: { location_id: locationId }, query: sanitizeQuery(query) },
      } as never)
    ),
  getRoot: () => unwrap<LocationOut>(generated.GET("/v1/locations/root")),
  bootstrapRoot: () => unwrap<LocationOut>(generated.POST("/v1/locations/root/bootstrap")),
  getTree: (query?: { root_location_id?: string | null; include_deleted?: boolean | null }) =>
    unwrap<LocationTreeNode>(generated.GET("/v1/locations/tree", { params: { query: sanitizeQuery(query) as never } })),
});
