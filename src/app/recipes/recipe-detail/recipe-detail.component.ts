import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() receipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    console.log(this.receipe);
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.receipe.ingredients);
  }
}
