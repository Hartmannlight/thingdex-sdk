import type { LocationCreate, LocationUpdate } from "./types";
import type { ThingdexSdkDependencies } from "./core";
export declare const createLocationsClient: ({ generated }: ThingdexSdkDependencies) => {
    createWithSideEffects: (body: LocationCreate) => Promise<{
        data: import("../generated/schema").components["schemas"]["LocationOut"];
        side_effects?: import("../generated/schema").components["schemas"]["SideEffects"];
    }>;
    create: (body: LocationCreate) => Promise<{
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
    update: (locationId: string, body: LocationUpdate) => Promise<{
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
//# sourceMappingURL=locations.d.ts.map