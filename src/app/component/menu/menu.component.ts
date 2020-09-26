import { Component, OnInit } from '@angular/core';
import { Dish } from '../../interface/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  constructor() { }

  ngOnInit(): void {
    this.dishes = [
        { name: 'Ceviche', ingredient: [{name: 'sal', quantity: '10 un.'}, {name: 'limon', quantity: '5 un.'}, {name: 'pescado', quantity: '200gr.'}] },
        { name: 'Arroz con Pollo', ingredient: [{name: 'pollo', quantity: '1un.'}, {name: 'cebolla', quantity: '5 un.'}, {name: 'zanahoria', quantity: '7un'}] },
        { name: 'Tacu Tacu', ingredient: [{name: 'papa', quantity: '1kg.'}, {name: 'cebolla', quantity: '7 un.'}, {name: 'mani', quantity: '1un'}] },
        { name: 'Arroz Chaufa', ingredient: [{name: 'arroz', quantity: '1kg.'}, {name: 'pollo', quantity: '1 un.'}] }
    ];
  }


}
