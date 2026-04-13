import type { ItemTypeCreate, ItemTypeOut, ItemTypeUpdate } from "./types";
import type { ThingdexSdkDependencies } from "./core";
import { sanitizeQuery, unwrap } from "./core";

export const createItemTypesClient = ({ generated }: ThingdexSdkDependencies) => ({
  list: (query?: { limit?: number | null; offset?: number | null; include_deleted?: boolean | null }) =>
    unwrap<ItemTypeOut[]>(generated.GET("/v1/item-types", { params: { query: sanitizeQuery(query) as never } })),
  get: (itemTypeId: string) =>
    unwrap<ItemTypeOut>(generated.GET("/v1/item-types/{item_type_id}", { params: { path: { item_type_id: itemTypeId } } })),
  create: (body: ItemTypeCreate) => unwrap<ItemTypeOut>(generated.POST("/v1/item-types", { body })),
  update: (itemTypeId: string, body: ItemTypeUpdate) =>
    unwrap<ItemTypeOut>(generated.PATCH("/v1/item-types/{item_type_id}", { params: { path: { item_type_id: itemTypeId } }, body })),
  delete: (itemTypeId: string) =>
    unwrap<void>(generated.DELETE("/v1/item-types/{item_type_id}", { params: { path: { item_type_id: itemTypeId } } })),
});
