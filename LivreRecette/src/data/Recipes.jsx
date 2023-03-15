const recipes = [];

function addRecipe(recipe) {
  recipe.id = uuidv4();
  recipes.push(recipe);
}

function deleteRecipe(id) {
  const index = recipes.findIndex((recipe) => recipe.id === id);
  if (index !== -1) {
    recipes.splice(index, 1);
  }
}

function editRecipe(id, updatedRecipe) {
  const index = recipes.findIndex((recipe) => recipe.id === id);
  if (index !== -1) {
    recipes[index] = updatedRecipe;
  }
}

export { recipes, addRecipe, deleteRecipe, editRecipe };