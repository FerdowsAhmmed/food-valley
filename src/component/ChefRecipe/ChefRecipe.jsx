import React, { useState } from 'react';
import './ChefRecipe.css';
import { useLoaderData, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

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
          <img src={recipe?.chefPicture} alt='' />
          <h3>Chef Name: {recipe?.chefName}</h3>
          <p>Experience: {recipe?.yearsOfExperience} years</p>
          <p>Number Of Recipes: {recipe?.numberOfRecipes}</p>
          <p>Likes: {recipe?.likes}</p>
          <p>Short Bio: {recipe?.shortBio}</p>
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
              {/* <h4> Rating: {chefsRecipe.rating}</h4> */}
             <div className='d-flex'>
             <h4> Ratings: </h4>
              <Rating style={{ maxWidth: 100 }} value={chefsRecipe.rating}  readOnly /> <h4> ({chefsRecipe.rating})</h4>
             </div>
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
