import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/recipes/service/recipe.service';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
