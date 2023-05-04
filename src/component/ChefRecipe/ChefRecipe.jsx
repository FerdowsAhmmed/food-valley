import React, { useState } from 'react';
import './ChefRecipe.css';
import { useLoaderData, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const ChefRecipe = () => {
  const { id } = useParams();
  const AllRecipes = useLoaderData();
  const recipe = AllRecipes.find((r) => r.id === parseInt(id));

  const [favorites, setFavorites] = useState({});

  const handleFavorite = (recipeId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [recipeId]: true,
    }));
    toast.success('Added to favorites!');
  };

  return (
    <main className='viewRecipe-container-page'>
      <div className='chef-details'>
        <div className='chef-info'>
          <img src={recipe.chefPicture} alt='' />
          <p>Chef Name:{recipe.chefName}</p>
          <p>yearsOfExperience:{recipe.yearsOfExperience}</p>
          <p>numberOfRecipes:{recipe.numberOfRecipes}</p>
          <p>likes:{recipe.likes}</p>
          <p>shortBio:{recipe.shortBio}</p>
        </div>
        <section className='recipe-container'>
          {recipe.recipes.map((chefsRecipe) => (
            <div className='recipe-card' key={chefsRecipe.recipe_id}>
              <h1>Recipe: {chefsRecipe.recipeName}</h1>
              <h4>Ingredients:</h4>
              <ul>
                {chefsRecipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <h4>Cooking Method:</h4>
              <p>{chefsRecipe.cookingMethod}</p>
              <h4> Rating: {chefsRecipe.rating}</h4>
              {!favorites[chefsRecipe.recipe_id] && (
                <button
                  className='btn btn-secondary'
                  onClick={() => handleFavorite(chefsRecipe.recipe_id)}
                >
                  My Favourite
                </button>
              )}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default ChefRecipe;
