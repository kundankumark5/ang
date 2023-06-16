import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingList } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  // ingredients: Ingredients[] = [
  //   new Ingredients('Apples', 5),
  //   new Ingredients('Tomato', 10),
  // ];  // now we will use it from ShoplistServiceList
  constructor(private shoppingListService: ShoppingList) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (val: Ingredients[]) => {
        this.ingredients = val;
      }
    );
  }

  onIngredientAdded(entry: Ingredients) {
    this.ingredients.push(entry);

  }
}
