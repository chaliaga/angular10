import { Component, OnInit } from '@angular/core';
import { Dish } from '../../interface/recipe';
import { MenuService } from '../../component/menu/menu.service';
import { MessageService } from 'primeng/api';


@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: [ './order.component.scss' ]
})
export class OrderComponent implements OnInit {
    cart: Dish[];
    total: number;
    quantityDefault = 1;

    constructor(public menuService: MenuService, public messageService: MessageService) {
    }

    ngOnInit(): void {
        this.messageService.clear();
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
