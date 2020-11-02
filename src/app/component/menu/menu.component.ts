import { Component, OnInit } from '@angular/core';
import { SPICY } from '../../util/constanst';
import { MenuService } from './menu.service';
import { Dish } from '../../interface/recipe';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit {
    dishesAll: Dish[];
    totalRecords: number;
    isLoading = true;
    display = false;
    detail: string;

    constructor(public menuService: MenuService) {
    }

    ngOnInit(): void {
        this.populateMenu();
    }

    public addDish(dishSelected: Dish): void {
        this.menuService.addToCart(dishSelected);
    }

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
    }

    public populateMenu(): void {
        this.menuService.getRecipes()
            .subscribe(data => {
                this.totalRecords = data.totalResults;
                this.dishesAll = data.results;
            });
    }

    viewDetails(dish: Dish): void {
        this.detail = dish.summary;
        this.display = true;
    }
}
