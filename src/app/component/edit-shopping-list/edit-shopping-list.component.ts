import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../model/ingredient';
import { ShoppingListService } from 'src/app/service/shopping-list/shopping-list.service';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {
  ingredient: Ingredient = new Ingredient();
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  @ViewChild('measurementInput', { static: true }) measurementInputRef: ElementRef;

  name = '';
  amount = '';
  measurement = '';

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const ingredientMeasurement = this.measurementInputRef.nativeElement.value;
    // const ingredient: Ingredient = new Ingredient(ingredientName, );
    this.shoppingListService.addIngredient({name: ingredientName, amount: ingredientAmount, measurement: ingredientMeasurement });
    this.resetFields();
  }

  resetFields() {
    // reset input fields
    this.name = '';
    this.amount = '';
    this.measurement = '';
  }

}
