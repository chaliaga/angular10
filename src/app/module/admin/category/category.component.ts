import { Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from '../../../API.service';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { Category } from '../../../interface/category';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: [ './category.component.scss' ]
})
export class CategoryComponent implements OnInit {
    categories: any = [];
    category: Category = {};
    submitted: boolean;
    categoryOriginal: { [ s: string ]: Category; } = {};

    @ViewChild('dt') table: Table;
    selectedCategories: [ Category ];
    categoryDialog: boolean = false;

    constructor(public api: APIService, public messageService: MessageService) {
    }

    ngOnInit(): void {
        this.populateCategory();
        /*
                this.api.OnCreateCategoryListener.subscribe({
                    next: (todo) => {
                        const newCategory = {
                            id: todo.id,
                            name: todo.name
                        };
                        console.log('acasss', newCategory);
                        this.categories.push(newCategory);
                    }
                });
                */
    }

    onRowEditInit(category): void {
        this.categoryOriginal[ category.id ] = { ...category };
    }

    onRowEditSave(category): void {
        this.api.UpdateCategory({
            id: category.id,
            name: category.name
        }).then((data) => {
            this.messageService.clear();
            this.messageService.add({ severity: 'success', summary: 'Category', detail: 'Successfully Update' });
        });
    }

    onRowEditCancel(category, index): void {
        this.categories[ index ] = this.categoryOriginal[ category.id ];
        delete this.categories[ category.id ];
    }

    openNew(): void {
        this.category = {};
        this.submitted = false;
        this.categoryDialog = true;
    }

    deleteSelectedCategory(): void {
        this.selectedCategories.forEach((categoryToDelete) => {
            this.api.DeleteCategory({
                id: categoryToDelete.id
            }).then((data) => {
                this.messageService.clear();
                this.messageService.add({ severity: 'success', summary: 'Category', detail: 'Successfully Delete' });
                this.populateCategory();
            });
        });
    }

    hideDialog(): void {
        this.categoryDialog = false;
        this.submitted = false;
    }

    saveCategory(): void {
        this.submitted = true;
        if (this.category.name.trim()) {
            this.api.CreateCategory({
                name: this.category.name
            }).then((data) => {
                this.categoryDialog = false;
                this.category = null;
                this.messageService.clear();
                this.messageService.add({ severity: 'success', summary: 'Category', detail: 'Successfully Save it' });
                this.populateCategory();
            });
        }
    }

    private populateCategory(): void {
        this.api.ListCategorys().then((data) => {
            this.categories = data.items;
        });
    }
}
