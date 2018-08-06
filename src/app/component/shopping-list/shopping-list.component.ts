import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../model/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [{
    name: 'shrimp',
    amount: 1,
    measurement: 'cup'
  },
  {
    name: 'bib lettuce',
    amount: 1,
    measurement: 'bunch'
  }];

  constructor() { }

  ngOnInit() {
  }

}
