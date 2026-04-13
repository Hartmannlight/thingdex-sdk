import type { ItemRelationCreate, ItemRelationDetach, ItemRelationOut, ItemRelationUpdate } from "./types";
import type { ThingdexSdkDependencies } from "./core";
import { sanitizeQuery, unwrap } from "./core";

export const createRelationsClient = ({ generated }: ThingdexSdkDependencies) => ({
  create: (parentItemId: string, body: ItemRelationCreate) =>
    unwrap<ItemRelationOut>(
      generated.POST("/v1/items/{item_id}/relations", { params: { path: { item_id: parentItemId } }, body })
    ),
  listChildren: (itemId: string, query?: { active_only?: boolean | null; include_deleted?: boolean | null }) =>
    unwrap<ItemRelationOut[]>(
      generated.GET("/v1/items/{item_id}/relations/children", {
        params: { path: { item_id: itemId }, query: sanitizeQuery(query) },
      } as never)
    ),
  listParents: (itemId: string, query?: { active_only?: boolean | null; include_deleted?: boolean | null }) =>
    unwrap<ItemRelationOut[]>(
      generated.GET("/v1/items/{item_id}/relations/parents", {
        params: { path: { item_id: itemId }, query: sanitizeQuery(query) },
      } as never)
    ),
  update: (relationId: string, body: ItemRelationUpdate) =>
    unwrap<ItemRelationOut>(generated.PATCH("/v1/relations/{relation_id}", { params: { path: { relation_id: relationId } }, body })),
  detach: (relationId: string, body: ItemRelationDetach) =>
    unwrap<ItemRelationOut>(
      generated.POST("/v1/relations/{relation_id}/detach", { params: { path: { relation_id: relationId } }, body })
    ),
  delete: (relationId: string) =>
    unwrap<void>(generated.DELETE("/v1/relations/{relation_id}", { params: { path: { relation_id: relationId } } })),
});
