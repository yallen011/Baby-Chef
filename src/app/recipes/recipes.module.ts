import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { IngredientsModule } from '../ingredients/ingredients.module';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipesRoutingModule } from './recipes-routing.module';



@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    AddRecipeComponent
  ],
  imports: [
    CommonModule,
    IngredientsModule,
    RecipesRoutingModule
  ],
  exports: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    AddRecipeComponent
  ]
})
export class RecipesModule { }
