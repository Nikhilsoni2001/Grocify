import { Ingredient } from '../shared/ingredient.mdoel';

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    public ingredients: Ingredient[]
  ) {}
}
