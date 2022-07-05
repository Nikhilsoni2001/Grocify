import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mdoel';
import { ShoppingList } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'RECIPEEEEE',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [new Ingredient('Pizza Base', 1), new Ingredient('French Fries', 10)]
    ),
    new Recipe(
      'Another Test Recipe',
      'ANOTHER RECIPEEEEE',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [new Ingredient('Buns', 1), new Ingredient('Cheese', 10)]
    ),
  ];

  constructor(private slService: ShoppingList) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
