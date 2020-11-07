import { Component, OnInit, ViewChild } from '@angular/core';
import { Dish } from '../../../interface/dish';
import { Table } from 'primeng/table';
import { APIService } from '../../../API.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-dish',
    templateUrl: './dish.component.html',
    styleUrls: [ './dish.component.scss' ]
})
export class DishComponent implements OnInit {
    dishes: any = [];
    dish: Dish;
    submitted: boolean;
    dishOriginal: { [ s: string ]: Dish; } = {};

    @ViewChild('dt1') table: Table;
    selectedDishes: [ Dish ];
    dishDialog: boolean = false;

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

    onRowEditInit(dish: any): void {
        this.dishOriginal[ dish.id ] = { ...dish };
    }

    onRowEditSave(dish: any): void {
        this.api.UpdateDish({
            id: dish.id,
            name: dish.name,
            categoryID: dish.categoryID,
            price: dish.price,
            imageURL: dish.imageURL,
            rating: dish.rating,
            description: dish.description,
            portions: dish.portions,
            readyMinutes: dish.readyMinutes
        }).then((data) => {
            this.messageService.clear();
            this.messageService.add({ severity: 'success', summary: 'Dish', detail: 'Successfully Update' });
        });
    }

    onRowEditCancel(dish: any, index): void {
        this.dishes[ index ] = this.dishOriginal[ dish.id ];
        delete this.dishes[ dish.id ];
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
            this.api.CreateDish({
                name: this.dish.name,
                categoryID: this.dish.categoryID,
                price: this.dish.price,
                imageURL: this.dish.imageURL,
                rating: this.dish.rating,
                description: this.dish.description,
                portions: this.dish.portions,
                readyMinutes: this.dish.readyMinutes
            }).then((data) => {
                this.dishDialog = false;
                this.dish = null;
                this.messageService.clear();
                this.messageService.add({ severity: 'success', summary: 'Dish', detail: 'Successfully Save it' });
                this.populateDish();
            });
        }
    }

    private populateDish(): void {
        this.api.ListDishs().then((data) => {
            this.dishes = data.items;
        });
    }
}
