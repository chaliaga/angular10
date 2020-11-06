import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { APIService, ModelCategoryFilterInput, ModelDishFilterInput } from '../../API.service';
import { Dish } from '../../interface/dish';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit {
    dishesAll: any;
    totalRecords = 0;
    isLoading = true;
    detailRecipe: string;
    titleName: string;
    displayDetail = false;
    queryCat: ModelDishFilterInput;

    constructor(public menuService: MenuService, public api: APIService) {
    }

    async ngOnInit(): Promise<void> {
        /*
        this.queryCat = {
            category: {
                eq: 'Comida Marina'
            }
        };*/
        const result = await this.api.ListDishs();
        this.dishesAll = result.items;
        this.totalRecords = result.items.length;
    }

    public addDish(dishSelected: Dish): void {
        this.menuService.addToCart(dishSelected);
    }

    /*
    public getStyleSpicy(spicy: SPICY): string {
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
    }*/

    viewDetails(dish: Dish): void {
        this.detailRecipe = dish.description;
        this.titleName = dish.name;
        this.displayDetail = true;
    }
}
