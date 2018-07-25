import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeBookComponent } from './component/recipe-book/recipe-book.component';
import { IngredientItemComponent } from './component/ingredient-item/ingredient-item.component';
import { IngredientListComponent } from './component//ingredient-list/ingredient-list.component';
import { RecipeListComponent } from './component//recipe-list/recipe-list.component';
import { RecipeItemComponent } from './component//recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './component/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { AddIngredientComponent } from './component/add-ingredient/add-ingredient.component';
import { AddRecipeComponent } from './component/add-recipe/add-recipe.component';
import { HeaderComponent } from './component/header/header.component';
import { EditShoppingListComponent } from './component/edit-shopping-list/edit-shopping-list.component';
import { RecipeEditComponent } from './component/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    IngredientItemComponent,
    IngredientListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    AddIngredientComponent,
    AddRecipeComponent,
    HeaderComponent,
    EditShoppingListComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
