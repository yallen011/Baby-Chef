import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../model/ingredient';
import { ShoppingListService } from 'src/app/service/shopping-list/shopping-list.service';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  @Input() isRecipe: boolean;
  @Input() recipe: Recipe;
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    if (this.isRecipe) {
      this.ingredients = this.recipe.ingredients;
    } else {
      this.ingredients = this.shoppingListService.getIngredients();
    }
  }

}
