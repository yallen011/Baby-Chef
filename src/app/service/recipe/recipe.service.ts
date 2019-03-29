import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [{
    name: 'Shrimp Salad',
    description: 'juicy shrimp with a full bed of lettuce and veggies',
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
  },
  {
    name: 'Quinoa',
    description: 'hearty meal with green peas and chopped carrots',
    imagePath: 'https://www.onceuponachef.com/images/2013/05/thai-quinoa-salad-11.jpg'
  }];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
