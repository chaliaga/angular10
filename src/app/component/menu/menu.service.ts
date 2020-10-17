import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../interface/recipe';
import { Observable } from 'rxjs';

@Injectable()
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  public getRecipes(): Observable<Recipe>{

    /*
    return this.httpClient
        .get<Recipe>('https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=d8ee365a37c64edf87e6f9c41f6fe055&cuisine=Latin American&addRecipeInformation=true&addRecipeNutrition=true').pipe();*/

    return this.httpClient
        .get<Recipe>('assets/json/dishes.json').pipe();
  }
}
