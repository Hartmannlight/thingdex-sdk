import type { ThingdexSdkConfig } from "../generated/runtime";
import { ThingdexApiError } from "./core";
export * from "./core";
export * from "./types";
export declare const createThingdexSdk: (config: ThingdexSdkConfig) => {
    itemTypes: {
        list: (query?: {
            limit?: number | null;
            offset?: number | null;
            include_deleted?: boolean | null;
        }) => Promise<{
            name: string;
            schema: {
                [key: string]: unknown;
            };
            ui: {
                [key: string]: unknown;
            };
            label_template_id?: string | null;
            id: string;
        }[]>;
        get: (itemTypeId: string) => Promise<{
            name: string;
            schema: {
                [key: string]: unknown;
            };
            ui: {
                [key: string]: unknown;
            };
            label_template_id?: string | null;
            id: string;
        }>;
        create: (body: import("./types").ItemTypeCreate) => Promise<{
            name: string;
            schema: {
                [key: string]: unknown;
            };
            ui: {
                [key: string]: unknown;
            };
            label_template_id?: string | null;
            id: string;
        }>;
        update: (itemTypeId: string, body: import("./types").ItemTypeUpdate) => Promise<{
            name: string;
            schema: {
                [key: string]: unknown;
            };
            ui: {
                [key: string]: unknown;
            };
            label_template_id?: string | null;
            id: string;
        }>;
        delete: (itemTypeId: string) => Promise<void>;
    };
    items: {
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
        createWithSideEffects: (body: import("./types").ItemCreate) => Promise<{
            data: import("../generated/schema").components["schemas"]["ItemOut"];
            side_effects?: import("../generated/schema").components["schemas"]["SideEffects"];
        }>;
        create: (body: import("./types").ItemCreate) => Promise<{
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
        bulkCreate: (body: import("./types").ItemBulkCreate) => Promise<{
            location_id?: string | null;
            status?: string | null;
            description?: string | null;
            props?: {
                [key: string]: unknown;
            } | null;
            id: string;
            type_id: string;
        }[]>;
        bulkUpdate: (body: import("./types").ItemBulkUpdate) => Promise<{
            location_id?: string | null;
            status?: string | null;
            description?: string | null;
            props?: {
                [key: string]: unknown;
            } | null;
            id: string;
            type_id: string;
        }[]>;
        bulkMove: (body: import("./types").ItemBulkMove) => Promise<{
            location_id?: string | null;
            status?: string | null;
            description?: string | null;
            props?: {
                [key: string]: unknown;
            } | null;
            id: string;
            type_id: string;
        }[]>;
        update: (itemId: string, body: import("./types").ItemUpdate) => Promise<{
            location_id?: string | null;
            status?: string | null;
            description?: string | null;
            props?: {
                [key: string]: unknown;
            } | null;
            id: string;
            type_id: string;
        }>;
        move: (itemId: string, body: import("./types").ItemMove) => Promise<{
            location_id?: string | null;
            status?: string | null;
            description?: string | null;
            props?: {
                [key: string]: unknown;
            } | null;
            id: string;
            type_id: string;
        }>;
        mergeProps: (itemId: string, body: import("./types").ItemPropsUpdate) => Promise<{
            location_id?: string | null;
            status?: string | null;
            description?: string | null;
            props?: {
                [key: string]: unknown;
            } | null;
            id: string;
            type_id: string;
        }>;
        replaceProps: (itemId: string, body: import("./types").ItemPropsReplace) => Promise<{
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
        createSnapshot: (itemId: string, body: import("./types").ItemSnapshotCreate) => Promise<{
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
        search: (body: import("./types").SearchRequest) => Promise<{
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
    labels: {
        print: (body: import("./types").LabelReprintRequest) => Promise<unknown>;
    };
    locations: {
        createWithSideEffects: (body: import("./types").LocationCreate) => Promise<{
            data: import("../generated/schema").components["schemas"]["LocationOut"];
            side_effects?: import("../generated/schema").components["schemas"]["SideEffects"];
        }>;
        create: (body: import("./types").LocationCreate) => Promise<{
            name: string;
            parent_id?: string | null;
            kind?: string | null;
            meta?: {
                [key: string]: unknown;
            } | null;
            id: string;
        }>;
        get: (locationId: string) => Promise<{
            name: string;
            parent_id?: string | null;
            kind?: string | null;
            meta?: {
                [key: string]: unknown;
            } | null;
            id: string;
        }>;
        update: (locationId: string, body: import("./types").LocationUpdate) => Promise<{
            name: string;
            parent_id?: string | null;
            kind?: string | null;
            meta?: {
                [key: string]: unknown;
            } | null;
            id: string;
        }>;
        delete: (locationId: string) => Promise<void>;
        listChildren: (locationId: string, query?: {
            limit?: number | null;
            offset?: number | null;
            include_deleted?: boolean | null;
        }) => Promise<{
            name: string;
            parent_id?: string | null;
            kind?: string | null;
            meta?: {
                [key: string]: unknown;
            } | null;
            id: string;
        }[]>;
        getPath: (locationId: string) => Promise<{
            id: string;
            name: string;
        }[]>;
        listItems: (locationId: string, query?: {
            include_descendants?: boolean | null;
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
        getRoot: () => Promise<{
            name: string;
            parent_id?: string | null;
            kind?: string | null;
            meta?: {
                [key: string]: unknown;
            } | null;
            id: string;
        }>;
        bootstrapRoot: () => Promise<{
            name: string;
            parent_id?: string | null;
            kind?: string | null;
            meta?: {
                [key: string]: unknown;
            } | null;
            id: string;
        }>;
        getTree: (query?: {
            root_location_id?: string | null;
            include_deleted?: boolean | null;
        }) => Promise<{
            name: string;
            parent_id?: string | null;
            kind?: string | null;
            meta?: {
                [key: string]: unknown;
            } | null;
            id: string;
            children?: import("../generated/schema").components["schemas"]["LocationTreeNode"][];
        }>;
    };
    relations: {
        create: (parentItemId: string, body: import("./types").ItemRelationCreate) => Promise<{
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
        update: (relationId: string, body: import("./types").ItemRelationUpdate) => Promise<{
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
        detach: (relationId: string, body: import("./types").ItemRelationDetach) => Promise<{
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
};
export type ThingdexSdk = ReturnType<typeof createThingdexSdk>;
export { ThingdexApiError };
//# sourceMappingURL=index.d.ts.map