import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish, Recipe } from '../../interface/recipe';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, retryWhen } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    // tslint:disable-next-line:variable-name
    private _cart: Dish[] = [];

    constructor(private httpClient: HttpClient, public messageService: MessageService) {
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
            this.messageService.add({severity: 'success', summary: dishSelected.title, detail: 'Successfully Added'});
            this._cart.push(dishSelected);
        } else {
            this.messageService.add({severity: 'warn', summary: dishSelected.title + ' is already Added', detail: 'Please update the quantity at order screen'});
        }
    }

    public isDishAlreadySelected(currentId: number): boolean {
        return !!this._cart.find(({ id }) => id === currentId);
    }
}
