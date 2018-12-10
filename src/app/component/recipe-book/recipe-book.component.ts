import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.recipe = recipeItem;
  }


}
