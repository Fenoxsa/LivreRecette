import React, { useState } from "react";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { title, description, ingredients };
    setRecipes([...recipes, newRecipe]);
    setTitle("");
    setDescription("");
    setIngredients("");
  };

  const handleDelete = (index) => {
    const newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
  };

  const handleEdit = (index, field, value) => {
    const newRecipes = [...recipes];
    newRecipes[index][field] = value;
    setRecipes(newRecipes);
  };

  const handleAddToShoppingList = (ingredients) => {
    const newShoppingList = [...shoppingList];
    ingredients.split(",").forEach((i) => {
      newShoppingList.push(i.trim());
    });
    setShoppingList(newShoppingList);
  };

  return (
    <div className="App">
      <h1>Mes recettes</h1>
      <form onSubmit={handleSubmit}>
        <h2>Ajouter une nouvelle recette</h2>
        <div class="creation">
          <label htmlFor="title">Titre:</label>
          <input
            class="interieurform"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="description">Description:</label>
          <input
            class="interieurform"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
          <label htmlFor="ingredients">Ingredients:</label>
          <input
            class="interieurform"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></input>
        </div>
        <button type="submit">Ajouter une recette</button>
      </form>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <ul class="listeIngredient">
              {recipe.ingredients.split(",").map((i, idx) => (
                <li key={idx}>{i.trim()}</li>
              ))}
            </ul>
            <div class="btnModif">
                    <button onClick={() => handleAddToShoppingList(recipe.ingredients)}>
                      Ajouter à la liste de course
                    </button>
                    <button onClick={() => handleDelete(index)}>Supprimer</button>
                    <button onClick={() => handleEdit(index, "title", prompt("Enter new title:"))}>
                      Modifier le titre
                    </button>
                  <button
                  onClick={() =>
                    handleEdit(index, "description", prompt("Enter new description:"))
                  }
                >
                  Modifier la description
                </button>
                <button
                  onClick={() =>
                    handleEdit(
                      index,
                      "ingredients",
                      prompt("Enter new ingredients:")
                    )
                  }
                >
                  Modifier les ingrédients
                </button>
              </div>
            </div>
            ))}
          
    <div className="shopping-list">
    </div>
    <h2>Liste des courses</h2>
    <ul>
      {shoppingList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
</div>
);
}

export default App;