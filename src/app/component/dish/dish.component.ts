import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
    selector: 'app-dish',
    templateUrl: './dish.component.html',
    styleUrls: [ './dish.component.scss' ]
})
export class DishComponent implements OnInit {
    constructor(private primengConfig: PrimeNGConfig) {
    }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
    }
}
