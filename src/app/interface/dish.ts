import { Ingredient } from './ingredient';
export type InventoryType = 'OUTOFSTOCK' | 'INSTOCK' | 'LOWSTOCK';

export interface Dish {
    id?: number;
    name: string;
    ingredient: Ingredient[];
    rating: number;
    category: string;
    price?: number;
    stock: boolean;
    spicy: string;
    quantity?: number;
    inventoryStatus?: InventoryType;
    image?: string;
}
