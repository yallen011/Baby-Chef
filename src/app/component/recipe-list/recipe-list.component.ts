import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [{
    name: 'Shrimp Salad',
    description: 'juicy shrimp with a full bed of lettuce and veggies',
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
  },
  {
    name: 'Quinoa',
    description: 'hearty meal with green peas and chopped carrots',
    imagePath: 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_1280.jpg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
