import { Component, OnInit, ViewChild } from '@angular/core';
import { Dish } from '../../../interface/dish';
import { Table } from 'primeng/table';
import { APIService } from '../../../API.service';
import { MessageService } from 'primeng/api';
import { Category } from '../../../interface/category';

@Component({
    selector: 'app-dish',
    templateUrl: './dish.component.html',
    styleUrls: [ './dish.component.scss' ]
})
export class DishComponent implements OnInit {
    dishes: any = [];
    dish: Dish;
    submitted: boolean;
    categories: Category[];
    selectedCategory: Category;

    @ViewChild('dt1') table: Table;
    selectedDishes: [ Dish ];
    dishDialog = false;

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
                   categoryId: this.selectedCategory.id,
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
                    categoryId: this.selectedCategory.id,
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
            this.dishes = data.items;
            this.populateCategories();
        });
    }

    private populateCategories(): void {
        this.api.ListCategorys().then((data) => {
           this.categories = data.items;
        });
    }

    public editDish(dish): void {
        this.dish = {...dish};
        this.dishDialog = true;
    }
}
