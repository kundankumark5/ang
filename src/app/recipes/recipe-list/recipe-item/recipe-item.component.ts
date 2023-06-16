import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Output() receipeSelected = new EventEmitter<string>();
  @Input() item: Recipe;
  constructor(private recipeService:RecipeService) {}

  ngOnInit(): void {}

  onReceipeSelected() {
    // this.receipeSelected.emit(selectedRecipe); // now we can use our data from recipeService

    this.recipeService.recipeSelected.emit(this.item)
  }
}
