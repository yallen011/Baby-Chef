import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { RecipeBookComponent} from './recipes/recipe-book/recipe-book.component';
import { AppComponent } from './app.component';
import { IngredientItemComponent } from './component/ingredient-item/ingredient-item.component';
import { IngredientListComponent } from './component//ingredient-list/ingredient-list.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { AddIngredientComponent } from './component/add-ingredient/add-ingredient.component';
import { HeaderComponent } from './component/header/header.component';
import { EditShoppingListComponent } from './component/edit-shopping-list/edit-shopping-list.component';
import { DropdownHighlightDirective } from './directive/dropdown-highlight/dropdown-highlight.directive';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

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
    RecipeEditComponent,
    DropdownHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
