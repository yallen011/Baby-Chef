import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Ingredient } from '../../model/ingredient';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [{
    name: 'Shrimp Salad',
    description: 'juicy shrimp with a full bed of lettuce and veggies',
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    ingredient: [{
      name: 'shrimp',
      amount: 1,
      measurement: 'bag'
    }]
  },
  {
    name: 'Quinoa',
    description: 'hearty meal with green peas and chopped carrots',
    imagePath: 'https://www.onceuponachef.com/images/2013/05/thai-quinoa-salad-11.jpg',
    ingredient: [{
      name: 'quioa',
      amount: 1,
      measurement: 'cup'
    }]
  }];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
