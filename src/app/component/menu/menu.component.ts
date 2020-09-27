import { Component, OnInit } from '@angular/core';
import { Dish } from '../../interface/dish';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit {
    dishes: Dish[];
    cart: Dish[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.dishes = [
            {
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

    processAddDish(dishSelected: Dish): void {
        this.cart.push(dishSelected);
    }

    totalDishes(): string {
        return this.cart.length === 0 ? 'EMPTY' : this.cart.length.toString();
    }
}
