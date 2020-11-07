import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { APIService, ModelDishFilterInput } from '../../API.service';
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
    queryCategory: ModelDishFilterInput;

    constructor(public menuService: MenuService, public api: APIService) {
    }

    public ngOnInit(): void {
        this.populateMenu();
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

    public viewDetails(dish: Dish): void {
        this.detailRecipe = dish.description;
        this.titleName = dish.name;
        this.displayDetail = true;
    }

    private populateMenu(): void {
        this.queryCategory = {
            categoryID: {
                eq: 'b347f8fa-cbf5-4803-a761-9c273e00e20a'
            }
        };
        this.api.ListDishs(this.queryCategory).then((data) => {
            this.dishesAll = data.items;
            this.totalRecords = data.items.length;
        });
    }
}
