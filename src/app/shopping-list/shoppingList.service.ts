import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

export class ShoppingList {
  ingredientsChanged = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomato', 10),
  ];
  getIngredients() {
    return this.ingredients.slice(); // since it's slice that's copy of our array we are unable to push any item to original array for this we'll add an event emmiter👆
  }
  addIngredient(entry: Ingredients) {
    this.ingredients.push(entry);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredients[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }  //or
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
