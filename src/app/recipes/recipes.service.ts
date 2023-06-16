import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingList } from '../shopping-list/shoppingList.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingList) {}
  private recipes: Recipe[] = [
    new Recipe(
      'Samosha',
      'an Emotion',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-500x375.jpg',
      [new Ingredients('potato', 10), new Ingredients('Flour', 2)]
    ),
    new Recipe(
      'Litti',
      'an Culture',
      'https://www.secondrecipe.com/wp-content/uploads/2019/11/litti-chokha-1.jpg',
      [new Ingredients('sattu', 10), new Ingredients('Flour', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    // here we need shopping list service too to add this ingredients to shopping list , so as we know to use another service in a service we have to add @injectable() dector onthe top ☝️
    this.shoppingListService.addIngredients(ingredients);
  }
}
