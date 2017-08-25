import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chicken Pot Pie', 'A very delicious pie', `http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/12/0/IG0604H_33099_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384540893720.jpeg`),
    new Recipe('Beef Pie', 'A very delicious pie', `http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/12/0/IG0604H_33099_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384540893720.jpeg`)
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
