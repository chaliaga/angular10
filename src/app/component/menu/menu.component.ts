import { Component, OnInit } from '@angular/core';
import { Dish } from '../../interface/dish';
import { Message } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit {

    dishes: Dish[];
    cart: Dish[] = [];
    alreadyExist: boolean;
    message: Message[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.dishes = [
            {
                id: 1,
                name: 'Ceviche',
                ingredient: [ { name: 'sal', quantity: '3 cdta.' }, { name: 'limon', quantity: '5 un.' }, {
                    name: 'pescado',
                    quantity: '200gr.'
                } ],
                rating: 5,
                category: 'Marina',
                price: 15,
                inventoryStatus: 'INSTOCK',
                image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/08/ceviche-comida.jpg'
            },
            {
                id: 2,
                name: 'Arroz con Pollo',
                ingredient: [ { name: 'pollo', quantity: '1un.' }, { name: 'cebolla', quantity: '5 un.' }, {
                    name: 'zanahoria',
                    quantity: '7un'
                } ],
                rating: 4,
                category: 'Criollo',
                price: 18,
                inventoryStatus: 'OUTOFSTOCK',
                image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/08/arroz-con-pollo.jpg'
            },
            {
                id: 3,
                name: 'Tacu Tacu',
                ingredient: [ { name: 'papa', quantity: '1kg.' }, { name: 'cebolla', quantity: '7 un.' }, {
                    name: 'mani',
                    quantity: '1un'
                } ],
                rating: 3,
                category: 'Criollo',
                price: 25,
                inventoryStatus: 'INSTOCK',
                image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/08/tacu-tacu.jpg'
            },
            {
                id: 4,
                name: 'Arroz Chaufa',
                ingredient: [ { name: 'arroz', quantity: '1kg.' }, { name: 'pollo', quantity: '1 un.' } ],
                rating: 5,
                category: 'China',
                price: 17,
                inventoryStatus: 'INSTOCK',
                image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/08/arroz-chaufa-peruano.jpg'
            }
        ];
    }

    isDishAlreadySelected(currentId: number): boolean {
        return !!this.cart.find(({ id }) => id === currentId);
    }

    addDish(dishSelected: Dish): void {
        this.message = [];
        this.alreadyExist = false;
        if (!this.isDishAlreadySelected(dishSelected.id)) {
            this.cart.push(dishSelected);
        } else {
            this.alreadyExist = true;
            this.message = [
                { severity: 'warn', summary: 'Warning', detail: 'The dish is already selected. Please complete the quantity.' } ];
        }
    }

    totalDishes(): string {
        return this.cart.length.toString();
    }
}
