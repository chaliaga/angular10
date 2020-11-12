import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { APIService, ModelDishFilterInput } from '../../API.service';
import { Dish } from '../../interface/dish';
import { ActivatedRoute, Params } from '@angular/router';

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
    queryParamCategory = '';

    constructor(public menuService: MenuService, public api: APIService, private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.queryParamCategory = params.category;
            this.populateMenu();
        });
        this.populateMenu();
    }

    public addDish(dishSelected: Dish): void {
        this.menuService.addToCart(dishSelected);
    }

    public viewDetails(dish: Dish): void {
        this.detailRecipe = dish.description;
        this.titleName = dish.name;
        this.displayDetail = true;
    }

    private populateMenu(): void {
        this.queryCategory = {
            categoryName: {
                eq: this.queryParamCategory ? this.queryParamCategory : 'Comida Criolla'
            }
        };
        this.api.ListDishs(this.queryCategory).then((data) => {
            this.dishesAll = data.items;
            this.totalRecords = data.items.length;
        });
    }
}
