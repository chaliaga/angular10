import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Dish } from '../../interface/dish';
import { PrimeNGConfig } from 'primeng/api';


@Component({
    selector: 'app-dish',
    templateUrl: './dish.component.html',
    styleUrls: [ './dish.component.scss' ]
})
export class DishComponent implements OnInit {
    // tslint:disable-next-line:variable-name
    private _dish;
    get dish(): Dish[] {
        return this._dish;
    }

    @Input() set dish(value: Dish[]) {
        this._dish = value;
    }

    @Output() dishSelected = new EventEmitter<Dish>();

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
    }

    addToCart(dish: Dish): void {
        this.dishSelected.emit(dish);
    }
}
