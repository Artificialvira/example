import React, { useState } from 'react';


const API_ID = 'bbd2365e';
const API_KEY = '9292b7dff13a89f1ea8fd87fc6986116';
const API_URL = `https://api.edamam.com/search`;

function RecipeApp() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipes(data.hits);
      setError(null);
    } catch (err) {
      setError(err.message);
      setRecipes([]);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="recipe-app">
      <h1>Recipe App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter ingredients"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search Recipes</button>
      </form>
      {error && <div className="error">{error}</div>}
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <ul>
              {recipe.recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeApp;
