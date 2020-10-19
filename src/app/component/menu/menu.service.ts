import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish, Recipe } from '../../interface/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  cart: Dish[] = [];

  constructor(private httpClient: HttpClient) { }

  public getRecipes(): Observable<Recipe>{
    return this.httpClient
        .get<Recipe>('assets/json/dishes.json').pipe();
  }

  public calculateTotal(): number {
    return this.cart.reduce((a, b) => a + (b.pricePerServing || 0), 0);
  }

  public addToCart(dishSelected: Dish): void {
    if (dishSelected && !this.isDishAlreadySelected(dishSelected.id)) {
      this.cart.push(dishSelected);
    }
  }

  public isDishAlreadySelected(currentId: number): boolean {
    return !!this.cart.find(({ id }) => id === currentId);
  }
}
