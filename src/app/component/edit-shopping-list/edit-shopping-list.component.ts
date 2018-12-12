import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../model/ingredient';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {
  ingredient: Ingredient = new Ingredient();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('measurementInput') measurementInputRef: ElementRef;

  name = '';
  amount = '';
  measurement = '';

  @Output() addIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const ingredientMeasurement = this.measurementInputRef.nativeElement.value;
    this.addIngredient.emit(new Ingredient(ingredientName, ingredientAmount, ingredientMeasurement));

    // reset input fields
    this.name = '';
    this.amount = '';
    this.measurement = '';
  }

}
