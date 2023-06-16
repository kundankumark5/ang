import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  // @Output() receipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'Samosha',
  //     'an Emotion',
  //     'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-500x375.jpg'
  //   ),
  //   new Recipe(
  //     'Litti',
  //     'an Culture',
  //     'https://www.secondrecipe.com/wp-content/uploads/2019/11/litti-chokha-1.jpg'
  //   ),
  // ];    now put them all  to the recipeService

  recipes: Recipe[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }



  // onReceipeSelected(receipe: Recipe) {
  //   this.receipeWasSelected.emit(receipe);
  // }
}
