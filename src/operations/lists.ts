export function belongsToList(recipeIngredients: unknown[], ingredients: unknown[]) {
    return recipeIngredients.every((item) => ingredients.includes(item));
}