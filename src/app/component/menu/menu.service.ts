import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish, Recipe } from '../../interface/recipe';
import { Observable, of, throwError } from 'rxjs';
import { delay, flatMap, map, mergeMap, retry, retryWhen } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    // tslint:disable-next-line:variable-name
    private _cart: Dish[] = [];

    constructor(private httpClient: HttpClient) {
    }

    public set cart(cart: Dish[]) {
        this._cart = cart;
    }

    public get cart(): Dish[] {
        return this._cart;
    }

    public getRecipes(): Observable<Recipe> {
        return this.httpClient
            // .get<Recipe>('assets/json/dishes.json').pipe();
            // .get<Recipe>('assets/json/dishesFake.json').pipe(retry(3));
            .get<Recipe>('assets/json/dishes.json')
            .pipe(
                retryWhen(err => {
                    let retries = 3;
                    return err
                        .pipe(
                            delay(1000),
                            mergeMap(currentError => {
                              console.log('val:::', retries);
                              if (retries-- > 0) {
                                    return of(currentError);
                              } else {
                                return throwError(currentError);
                              }
                            })
                        );
                }));
    }

    public calculateTotal(): number {
        return this._cart.reduce((a, b) => a + (b.pricePerServing || 0), 0);
    }

    public addToCart(dishSelected: Dish): void {
        if (dishSelected && !this.isDishAlreadySelected(dishSelected.id)) {
            this._cart.push(dishSelected);
        }
    }

    public isDishAlreadySelected(currentId: number): boolean {
        return !!this._cart.find(({ id }) => id === currentId);
    }
}
