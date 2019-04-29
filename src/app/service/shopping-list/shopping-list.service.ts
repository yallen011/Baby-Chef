import { Injectable } from '@angular/core';
import { Ingredient } from '../../model/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('shrimp', 1, 'cup'),
    new Ingredient('bib lettuce', 1, 'bunch')
  ];
  constructor() { }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

  getIngredients() {
    return this.ingredients;
  }
}
