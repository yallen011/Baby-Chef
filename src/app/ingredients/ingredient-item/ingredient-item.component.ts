import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../model/ingredient';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css']
})
export class IngredientItemComponent implements OnInit {

  @Input() ingredients: Ingredient;
  constructor() { }

  ngOnInit() {
  }

}
