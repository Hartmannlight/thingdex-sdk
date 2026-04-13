import type { ItemRelationCreate, ItemRelationDetach, ItemRelationUpdate } from "./types";
import type { ThingdexSdkDependencies } from "./core";
export declare const createRelationsClient: ({ generated }: ThingdexSdkDependencies) => {
    create: (parentItemId: string, body: ItemRelationCreate) => Promise<{
        id: string;
        parent_item_id: string;
        child_item_id: string;
        relation_type: string;
        active: boolean;
        quantity?: number | null;
        slot?: string | null;
        notes?: string | null;
        created_at: string;
    }>;
    listChildren: (itemId: string, query?: {
        active_only?: boolean | null;
        include_deleted?: boolean | null;
    }) => Promise<{
        id: string;
        parent_item_id: string;
        child_item_id: string;
        relation_type: string;
        active: boolean;
        quantity?: number | null;
        slot?: string | null;
        notes?: string | null;
        created_at: string;
    }[]>;
    listParents: (itemId: string, query?: {
        active_only?: boolean | null;
        include_deleted?: boolean | null;
    }) => Promise<{
        id: string;
        parent_item_id: string;
        child_item_id: string;
        relation_type: string;
        active: boolean;
        quantity?: number | null;
        slot?: string | null;
        notes?: string | null;
        created_at: string;
    }[]>;
    update: (relationId: string, body: ItemRelationUpdate) => Promise<{
        id: string;
        parent_item_id: string;
        child_item_id: string;
        relation_type: string;
        active: boolean;
        quantity?: number | null;
        slot?: string | null;
        notes?: string | null;
        created_at: string;
    }>;
    detach: (relationId: string, body: ItemRelationDetach) => Promise<{
        id: string;
        parent_item_id: string;
        child_item_id: string;
        relation_type: string;
        active: boolean;
        quantity?: number | null;
        slot?: string | null;
        notes?: string | null;
        created_at: string;
    }>;
    delete: (relationId: string) => Promise<void>;
};
//# sourceMappingURL=relations.d.ts.map