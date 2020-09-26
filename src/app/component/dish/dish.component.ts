import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../interface/ingredient';

@Component({
    selector: 'app-dish',
    templateUrl: './dish.component.html',
    styleUrls: [ './dish.component.scss' ]
})
export class DishComponent implements OnInit {
    // tslint:disable-next-line:variable-name
    private _name;
    get name(): string {
        return this._name;
    }

    @Input() set name(value: string) {
        this._name = value;
    }

    // tslint:disable-next-line:variable-name
    private _ingredients;
    get ingredients(): Ingredient[] {
        return this._ingredients;
    }

    @Input() set ingredients(value: Ingredient[]) {
        this._ingredients = value;
    }

    constructor() {
    }

    ngOnInit(): void {
    }
}
