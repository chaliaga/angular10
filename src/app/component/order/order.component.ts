import { Component, OnInit } from '@angular/core';
import { APPSTORAGE } from '../../util/constanst';
import { Dish } from '../../interface/recipe';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: [ './order.component.scss' ]
})
export class OrderComponent implements OnInit {
    car: Dish[];
    constructor() {
    }

    ngOnInit(): void {
        this.car = JSON.parse(localStorage.getItem(APPSTORAGE.CAR));
    }

    deleteCurrentDish(id: number): void {
       this.car.splice(this.car.findIndex(currentDish => currentDish.id === id), 1);
       localStorage.setItem(APPSTORAGE.CAR,  JSON.stringify(this.car));
    }
}
