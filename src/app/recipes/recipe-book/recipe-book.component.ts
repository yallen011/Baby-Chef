import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { RecipeService } from 'src/app/recipes/service/recipe.service';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        // sets the selectedRecipe to the recipe emitted from the recipeSelected event
        this.selectedRecipe = recipe;
      }
    );
  }
}
