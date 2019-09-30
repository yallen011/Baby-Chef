import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientItemComponent } from './ingredient-item/ingredient-item.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';



@NgModule({
  declarations: [
    IngredientItemComponent,
    IngredientListComponent,
    AddIngredientComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IngredientItemComponent,
    IngredientListComponent,
    AddIngredientComponent
  ]
})
export class IngredientsModule { }
