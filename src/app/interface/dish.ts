import { Ingredient } from './ingredient';
export type InventoryType = 'OUTOFSTOCK' | 'INSTOCK' | 'LOWSTOCK';
export interface Dish {
    id?: string;
    name: string;
    ingredient: Ingredient[];
    rating: number;
    category: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: InventoryType;
    image?: string;
}
