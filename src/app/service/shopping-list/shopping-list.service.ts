import { Injectable } from '@angular/core';
import { Ingredient } from '../../model/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [{
    name: 'shrimp',
    amount: 1,
    measurement: 'cup'
  },
  {
    name: 'bib lettuce',
    amount: 1,
    measurement: 'bunch'
  }];
  constructor() { }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

  getIngredients() {
    return this.ingredients;
  }
}
