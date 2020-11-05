import { Component, OnInit } from '@angular/core';
import { SPICY } from '../../util/constanst';
import { MenuService } from './menu.service';
import { AnalyzedInstruction, Dish } from '../../interface/recipe';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit {
    dishesAll: Dish[];
    totalRecords: number;
    isLoading = true;
    displayDetail = false;
    detailRecipe: string;
    titleRecipe: string;
    dishInstructions: AnalyzedInstruction[];

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
        this.detailRecipe = dish.summary;
        this.titleRecipe = dish.title;
        this.dishInstructions = dish.analyzedInstructions;
        this.displayDetail = true;
    }

    getImageEquipment(imageURL: string): string {
        return 'https://spoonacular.com/cdn/equipment_100x100/' + imageURL;
    }

    getImageIngredient(imageURL: string): string {
        return 'https://spoonacular.com/cdn/ingredients_100x100/' + imageURL;
    }
}
