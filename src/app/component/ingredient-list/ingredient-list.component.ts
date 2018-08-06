import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../model/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input() ingredients: Ingredient;

  constructor() { }

  ngOnInit() {
  }

}
