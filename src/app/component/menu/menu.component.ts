import { Component, OnInit } from '@angular/core';
import { APPSTORAGE, SPICY } from '../../util/constanst';
import { Message } from 'primeng/api';
import { MenuService } from './menu.service';
import { Recipe, Dish } from '../../interface/recipe';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.scss' ],
    providers: [MenuService]
})
export class MenuComponent implements OnInit {
    // dishesAll: Dish[];
    dishesAll: Dish[];
    totalRecords: number;
    car: Dish[] = [];
    message: Message[] = [];
    isLoading = true;

    constructor(public menuService: MenuService) {
    }

    ngOnInit(): void {
        this.populateMenu();

        /*
        this.dishesAll = [
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
                stock: true,
                spicy: SPICY.PICAPOCO,
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
                stock: false,
                spicy: SPICY.NOPICA,
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
                stock: true,
                spicy: SPICY.NOPICA,
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
                stock: true,
                spicy: SPICY.PICAMUCHO,
                inventoryStatus: 'INSTOCK',
                image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/08/arroz-chaufa-peruano.jpg'
            }
        ];
        */
        // this.isLoading = false;
    }

    isDishAlreadySelected(currentId: number): boolean {
        return !!this.car.find(({ id }) => id === currentId);
    }

    addDish(dishSelected: Dish): void {
        if (dishSelected && !this.isDishAlreadySelected(dishSelected.id)) {
            this.car.push(dishSelected);
            localStorage.setItem(APPSTORAGE.CAR, JSON.stringify(this.car));
        } else {
            this.message = [ {
                severity: 'warn',
                summary: 'Warning',
                detail: 'The dish is already selected. Please complete the quantity.'
            } ];
        }
    }

    getStyleSpicy(spicy: SPICY): string {
        switch (spicy) {
            case SPICY.NOPICA: {
                return 'no-pica';
            }
            case SPICY.PICAPOCO: {
                return 'pica-poco';
            }
            case SPICY.PICAMUCHO: {
                return 'pica-mucho';
            }
        }
    }

    private populateMenu(): void {
        this.menuService.getRecipes().subscribe(data => this.getRecipes(data));
    }

    private getRecipes(data: Recipe): void {
        this.totalRecords = data.totalResults;
        this.dishesAll = data.results;
    }
}
