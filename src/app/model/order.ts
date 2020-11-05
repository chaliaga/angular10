import { Customer } from '../interface/customer';
import { Dish } from '../interface/recipe';

export class Order {
    dish: Dish;
    quantity: number;
    total: number;
    date: string;
    customer: Customer;

    constructor(dish: Dish, quantity: number, total: number, date: string, customer: Customer) {
        this.dish = dish;
        this.quantity = quantity;
        this.total = total;
        this.date = date;
        this.customer = customer;
    }
}
