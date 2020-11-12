import { Component, OnInit, ViewChild } from '@angular/core';
import { Dish } from '../../../interface/dish';
import { Table } from 'primeng/table';
import { APIService } from '../../../API.service';
import { MessageService, SelectItem } from 'primeng/api';

@Component({
    selector: 'app-dish',
    templateUrl: './dish.component.html',
    styleUrls: [ './dish.component.scss' ]
})
export class DishComponent implements OnInit {
    dishes: any = [];
    dish: Dish;
    submitted: boolean;
    categories: SelectItem[];

    @ViewChild('dt1') table: Table;
    selectedDishes: [Dish];
    dishDialog = false;
    categorySelected: SelectItem;

    constructor(public api: APIService, public messageService: MessageService) {
    }

    ngOnInit(): void {
        this.populateDish();
    }

    openNew(): void {
        this.dish = {};
        this.submitted = false;
        this.dishDialog = true;
    }

    hideDialog(): void {
        this.dishDialog = false;
        this.submitted = false;
    }

    deleteSelectedDish(): void {
        this.selectedDishes.forEach((dishToDelete) => {
            this.api.DeleteDish({
                id: dishToDelete.id
            }).then((data) => {
                this.messageService.clear();
                this.messageService.add({ severity: 'success', summary: 'Dish', detail: 'Successfully Delete' });
                this.populateDish();
            });
        });
    }

    saveDish(): void {
        this.submitted = true;
        if (this.dish.name.trim()) {
            if (this.dish.id) {
                this.api.UpdateDish({
                    id: this.dish.id,
                    name: this.dish.name,
                    categoryName: this.categorySelected.label,
                    categoryId: this.categorySelected.value,
                    price: this.dish.price,
                    imageURL: this.dish.imageURL,
                    rating: this.dish.rating,
                    description: this.dish.description,
                    portions: this.dish.portions,
                    readyMinutes: this.dish.readyMinutes
                }).then(() => {
                    this.dishDialog = false;
                    this.dish = null;
                    this.messageService.clear();
                    this.messageService.add({ severity: 'success', summary: 'Dish', detail: 'Successfully Update it' });
                    this.populateDish();
                });
            } else {
                this.api.CreateDish({
                    name: this.dish.name,
                    categoryName: this.categorySelected.label,
                    categoryId: this.categorySelected.value,
                    price: this.dish.price,
                    imageURL: this.dish.imageURL,
                    rating: this.dish.rating,
                    description: this.dish.description,
                    portions: this.dish.portions,
                    readyMinutes: this.dish.readyMinutes
                }).then(() => {
                    this.dishDialog = false;
                    this.dish = null;
                    this.messageService.clear();
                    this.messageService.add({ severity: 'success', summary: 'Dish', detail: 'Successfully Save it' });
                    this.populateDish();
                });
            }
        }
    }

    private populateDish(): void {
        this.api.ListDishs().then((data) => {
            this.populateCategories();
            this.dishes = data.items;
        });
    }

    private populateCategories(): void {
        this.categories = [];
        this.api.ListCategorys().then((data) => {
            data.items.forEach((category) => {
                const currentCategory = {
                    label: category.name,
                    value: category.id
                };
                this.categories.push(currentCategory);
            });
        });
    }

    public editDish(dish): void {
        this.dish = { ...dish };
        this.categorySelected = {
            label: this.dish.categoryObject.name,
            value: this.dish.categoryObject.id
        };
        this.dishDialog = true;
    }
}
