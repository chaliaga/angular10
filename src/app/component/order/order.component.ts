import { Component, OnInit } from '@angular/core';
import { APPSTORAGE } from '../../util/constanst';
import { Dish } from '../../interface/recipe';
import { MenuService } from '../menu/menu.service';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: [ './order.component.scss' ]
})
export class OrderComponent implements OnInit {
    cart: Dish[];
    total: number;
    quantity = 1;

    constructor(public menuService: MenuService) {
    }

    ngOnInit(): void {
        this.cart = this.menuService.cart;
    }

    deleteCurrentDish(id: number): void {
        this.cart.splice(this.cart.findIndex(currentDish => currentDish.id === id), 1);
        this.calculateTotal();
    }

    calculateTotal(): void {
        this.total = this.menuService.calculateTotal();
    }
}
