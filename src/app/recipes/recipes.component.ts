import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedReceipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((res: Recipe) => {
      this.selectedReceipe = res;
    });
  }
}
