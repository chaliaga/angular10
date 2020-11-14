import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Dish } from '../../interface/dish';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    // tslint:disable-next-line:variable-name
    private _cart: Dish[] = [];

    constructor(private httpClient: HttpClient, public messageService: MessageService) {
    }

    public set cart(cart: Dish[]) {
        this._cart = cart;
    }

    public get cart(): Dish[] {
        return this._cart;
    }

    public addToCart(dishSelected: Dish): void {
        this.messageService.clear();
        if (dishSelected && !this.isDishAlreadySelected(dishSelected.id)) {
            this.messageService.add({severity: 'success', summary: dishSelected.name, detail: 'Successfully Added'});
            this._cart.push(dishSelected);
        } else {
            this.messageService.add({severity: 'warn', summary: dishSelected.name + ' is already Added', detail: 'Please update the quantity at order screen'});
        }
    }

    public isDishAlreadySelected(currentId: string): boolean {
        return !!this._cart.find(({ id }) => id === currentId);
    }
}
