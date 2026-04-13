import type { ItemBulkCreate, ItemBulkMove, ItemBulkUpdate, ItemCreate, ItemDetailOut, ItemMove, ItemOut, ItemPropHistoryOut, ItemPropsReplace, ItemPropsUpdate, ItemSnapshotCreate, ItemSnapshotOut, ItemUpdate, SearchRequest } from "./types";
import type { ThingdexSdkDependencies } from "./core";
import { sanitizeQuery, unwrap } from "./core";

export const createItemsClient = ({ generated }: ThingdexSdkDependencies) => ({
  list: (query?: {
    type?: string | null;
    status?: string | null;
    in_use?: boolean | null;
    limit?: number | null;
    offset?: number | null;
    include_deleted?: boolean | null;
  }) =>
    unwrap<ItemOut[]>(
      generated.GET("/v1/items", {
        params: { query: sanitizeQuery(query) as never },
      })
    ),
  get: (itemId: string) => unwrap<ItemDetailOut>(generated.GET("/v1/items/{item_id}", { params: { path: { item_id: itemId } } })),
  create: (body: ItemCreate) => unwrap<ItemOut>(generated.POST("/v1/items", { body })),
  delete: (itemId: string) => unwrap<void>(generated.DELETE("/v1/items/{item_id}", { params: { path: { item_id: itemId } } })),
  bulkCreate: (body: ItemBulkCreate) => unwrap<ItemOut[]>(generated.POST("/v1/items/bulk", { body })),
  bulkUpdate: (body: ItemBulkUpdate) => unwrap<ItemOut[]>(generated.PATCH("/v1/items/bulk", { body })),
  bulkMove: (body: ItemBulkMove) => unwrap<ItemOut[]>(generated.PATCH("/v1/items/bulk/move", { body })),
  update: (itemId: string, body: ItemUpdate) =>
    unwrap<ItemOut>(generated.PATCH("/v1/items/{item_id}", { params: { path: { item_id: itemId } }, body })),
  move: (itemId: string, body: ItemMove) =>
    unwrap<ItemOut>(generated.PATCH("/v1/items/{item_id}/move", { params: { path: { item_id: itemId } }, body })),
  mergeProps: (itemId: string, body: ItemPropsUpdate) =>
    unwrap<ItemOut>(generated.PATCH("/v1/items/{item_id}/props", { params: { path: { item_id: itemId } }, body })),
  replaceProps: (itemId: string, body: ItemPropsReplace) =>
    unwrap<ItemOut>(generated.PUT("/v1/items/{item_id}/props", { params: { path: { item_id: itemId } }, body })),
  history: (
    itemId: string,
    query?: { prop_key?: string | null; limit?: number | null; offset?: number | null; include_deleted?: boolean | null }
  ) =>
    unwrap<ItemPropHistoryOut[]>(
      generated.GET("/v1/items/{item_id}/history", {
        params: { path: { item_id: itemId }, query: sanitizeQuery(query) },
      } as never)
    ),
  listSnapshots: (
    itemId: string,
    query?: { kind?: string | null; limit?: number | null; offset?: number | null; include_deleted?: boolean | null }
  ) =>
    unwrap<ItemSnapshotOut[]>(
      generated.GET("/v1/items/{item_id}/snapshots", {
        params: { path: { item_id: itemId }, query: sanitizeQuery(query) },
      } as never)
    ),
  createSnapshot: (itemId: string, body: ItemSnapshotCreate) =>
    unwrap<ItemSnapshotOut>(generated.POST("/v1/items/{item_id}/snapshots", { params: { path: { item_id: itemId } }, body })),
  deleteSnapshot: (itemId: string, snapshotId: string) =>
    unwrap<void>(
      generated.DELETE("/v1/items/{item_id}/snapshots/{snapshot_id}", {
        params: { path: { item_id: itemId, snapshot_id: snapshotId } },
      })
    ),
  search: (body: SearchRequest) => unwrap<ItemOut[]>(generated.POST("/v1/items/search", { body })),
  listMissingLocation: () => unwrap<ItemDetailOut[]>(generated.GET("/v1/items/missing-location")),
});
