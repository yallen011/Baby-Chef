import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { HeaderComponent } from './component/header/header.component';
import { EditShoppingListComponent } from './component/edit-shopping-list/edit-shopping-list.component';
import { DropdownHighlightDirective } from './directive/dropdown-highlight/dropdown-highlight.directive';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    HeaderComponent,
    EditShoppingListComponent,
    DropdownHighlightDirective,
    RecipesModule,
    IngredientsModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
