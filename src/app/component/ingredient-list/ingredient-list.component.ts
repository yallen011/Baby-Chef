import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../model/ingredient';
import { ShoppingListService } from 'src/app/service/shopping-list/shopping-list.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input() ingredients: Ingredient[];

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
  }

}
