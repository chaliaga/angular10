import { Category } from './category';

export interface Dish {
    id?: string;
    name?: string;
    categoryID?: string;
    categoryObject?: Category;
    price?: string;
    imageURL?: string;
    rating?: number;
    description?: string;
    portions?: number;
    readyMinutes?: number;
}
