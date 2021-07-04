import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../component/menu/menu.service';
import { MessageService } from 'primeng/api';
import { Dish } from '../../interface/dish';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: [ './order.component.scss' ]
})
export class OrderComponent implements OnInit {
    cart: Dish[];
    total = 0;
    dishesOrder = new FormArray([]);

    constructor(public menuService: MenuService, public messageService: MessageService) {
    }

    ngOnInit(): void {
        this.messageService.clear();
        this.menuService.cart.forEach((currentDishOrder) => {
            this.addDishToOrderForm(currentDishOrder);
        });
    }

    deleteCurrentDish(id: string): void {
        this.cart.splice(this.cart.findIndex(currentDish => currentDish.id === id), 1);
        this.calculateTotal();
    }

    calculateTotal(): void {
        this.total = 0;
        this.dishesOrder.controls.forEach((currentGroup) => {
            this.total = this.total + parseFloat(currentGroup.get('subTotal').value);
        });
    }

    addDishToOrderForm(dishOrder): void {
        const groupDish = new FormGroup({
            id: new FormControl(''),
            name: new FormControl(''),
            price: new FormControl(''),
            quantity: new FormControl(''),
            subTotal: new FormControl('')
        });

        groupDish.controls.id.setValue(dishOrder.id);
        groupDish.controls.name.setValue(dishOrder.name);
        groupDish.controls.price.setValue(dishOrder.price);
        groupDish.controls.quantity.setValue(1);
        groupDish.controls.subTotal.setValue(dishOrder.price);
        this.dishesOrder.push(groupDish);
    }

    calculateSubTotal(item: number): void {
        const currentFormControl = this.dishesOrder.controls[item] as FormGroup;
        const currentSubTotal = currentFormControl.controls.price.value * currentFormControl.controls.quantity.value;
        currentFormControl.controls.subTotal.patchValue(currentSubTotal);
        this.calculateTotal();
    }
}
