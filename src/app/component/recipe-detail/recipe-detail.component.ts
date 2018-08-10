import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../model/ingredient';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

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
