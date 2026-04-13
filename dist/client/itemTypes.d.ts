import type { ItemTypeCreate, ItemTypeUpdate } from "./types";
import type { ThingdexSdkDependencies } from "./core";
export declare const createItemTypesClient: ({ generated }: ThingdexSdkDependencies) => {
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
    create: (body: ItemTypeCreate) => Promise<{
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
    update: (itemTypeId: string, body: ItemTypeUpdate) => Promise<{
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
//# sourceMappingURL=itemTypes.d.ts.map