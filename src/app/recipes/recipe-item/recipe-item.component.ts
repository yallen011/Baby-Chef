import { Component, OnInit, Input, Output } from '@angular/core';
import { RecipeService } from 'src/app/recipes/service/recipe.service';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
