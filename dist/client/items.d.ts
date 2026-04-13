import type { ItemBulkCreate, ItemBulkMove, ItemBulkUpdate, ItemCreate, ItemMove, ItemPropsReplace, ItemPropsUpdate, ItemSnapshotCreate, ItemUpdate, SearchRequest } from "./types";
import type { ThingdexSdkDependencies } from "./core";
export declare const createItemsClient: ({ generated }: ThingdexSdkDependencies) => {
    list: (query?: {
        type?: string | null;
        status?: string | null;
        in_use?: boolean | null;
        limit?: number | null;
        offset?: number | null;
        include_deleted?: boolean | null;
    }) => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
    }[]>;
    get: (itemId: string) => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
        type: import("../generated/schema").components["schemas"]["ItemDetailType"];
        location: import("../generated/schema").components["schemas"]["ItemDetailLocation"];
    }>;
    create: (body: ItemCreate) => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
    }>;
    delete: (itemId: string) => Promise<void>;
    bulkCreate: (body: ItemBulkCreate) => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
    }[]>;
    bulkUpdate: (body: ItemBulkUpdate) => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
    }[]>;
    bulkMove: (body: ItemBulkMove) => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
    }[]>;
    update: (itemId: string, body: ItemUpdate) => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
    }>;
    move: (itemId: string, body: ItemMove) => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
    }>;
    mergeProps: (itemId: string, body: ItemPropsUpdate) => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
    }>;
    replaceProps: (itemId: string, body: ItemPropsReplace) => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
    }>;
    history: (itemId: string, query?: {
        prop_key?: string | null;
        limit?: number | null;
        offset?: number | null;
        include_deleted?: boolean | null;
    }) => Promise<{
        id: string;
        item_id: string;
        prop_key: string;
        captured_at: string;
        value: unknown;
        source?: string | null;
    }[]>;
    listSnapshots: (itemId: string, query?: {
        kind?: string | null;
        limit?: number | null;
        offset?: number | null;
        include_deleted?: boolean | null;
    }) => Promise<{
        id: string;
        item_id: string;
        kind: string;
        captured_at: string;
        data_text?: string | null;
        data?: {
            [key: string]: unknown;
        } | null;
        meta: {
            [key: string]: unknown;
        };
    }[]>;
    createSnapshot: (itemId: string, body: ItemSnapshotCreate) => Promise<{
        id: string;
        item_id: string;
        kind: string;
        captured_at: string;
        data_text?: string | null;
        data?: {
            [key: string]: unknown;
        } | null;
        meta: {
            [key: string]: unknown;
        };
    }>;
    deleteSnapshot: (itemId: string, snapshotId: string) => Promise<void>;
    search: (body: SearchRequest) => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
    }[]>;
    listMissingLocation: () => Promise<{
        location_id?: string | null;
        status?: string | null;
        description?: string | null;
        props?: {
            [key: string]: unknown;
        } | null;
        id: string;
        type_id: string;
        type: import("../generated/schema").components["schemas"]["ItemDetailType"];
        location: import("../generated/schema").components["schemas"]["ItemDetailLocation"];
    }[]>;
};
//# sourceMappingURL=items.d.ts.map