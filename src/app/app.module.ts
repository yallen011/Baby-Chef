import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeBookComponent } from './component/recipe-book/recipe-book.component';
import { RecipeComponent } from './component/recipe/recipe.component';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { RecipeDirectionComponent } from './component/recipe-direction/recipe-direction.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    RecipeComponent,
    IngredientComponent,
    RecipeDirectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
