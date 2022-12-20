import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]=[new Recipe('a test','an image','https://www.google.com/imgres?imgurl=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F44%252F2020%252F03%252F03%252F7782449.jpg&imgrefurl=https%3A%2F%2Fwww.eatingwell.com%2Frecipe%2F279036%2Fmelting-potatoes%2F&tbnid=g6G84g23fmlNnM&vet=12ahUKEwjvh4KmuoP6AhUsKbcAHVL-ByAQMygDegUIARD7AQ..i&docid=eSfEw60iWLtJfM&w=1244&h=1244&q=recipe&ved=2ahUKEwjvh4KmuoP6AhUsKbcAHVL-ByAQMygDegUIARD7AQ')]
    ;

  constructor() { }

  ngOnInit(): void {
  }

}
