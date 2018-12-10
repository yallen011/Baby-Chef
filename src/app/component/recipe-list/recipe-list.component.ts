import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [{
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

  ngOnInit() {
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.selectedRecipe.emit(recipeItem);
  }

}
