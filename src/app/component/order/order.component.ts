import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../../interface/dish';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: [ './order.component.scss' ]
})
export class OrderComponent implements OnInit {
    // tslint:disable-next-line:variable-name
    private _customerCart: Dish[] = [];
    get customerCart(): Dish[] {
        return this._customerCart;
    }

    @Input() set customerCart(value: Dish[]) {
        this._customerCart = value;
    }
    constructor() {
    }

    ngOnInit(): void {
    }

    deleteCurrentDish(id: number): void {
        this._customerCart.splice(this._customerCart.findIndex(currentDish => currentDish.id === id), 1);
    }
}
