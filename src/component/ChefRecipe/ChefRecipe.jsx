import React from 'react';
import './ChefRecipe.css'
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const { id } = useParams();
    const AllRecipes = useLoaderData();
    const recipe = AllRecipes.find((r) => r.id === parseInt(id));
    console.log(recipe.id);
   
 
    return (
      <main className='viewRecipe-container-page'>
          <div className='chef-details'>
            <div className='chef-info'> 
            <img src={recipe.chefPicture} alt="" />
                <p>Chef Name:{recipe.chefName}</p>
                <p>yearsOfExperience:{recipe.yearsOfExperience}</p>
                <p>numberOfRecipes:{recipe.numberOfRecipes}</p>
                <p>likes:{recipe.likes}</p>
                <p>shortBio:{recipe.shortBio}</p>
            </div>
          <section className='recipe-container'>
          {
              recipe.recipes.map((chefsRecipe)=>(
                <div className='recipe-card' key={chefsRecipe.recipe_id}>
                    <h1>{chefsRecipe.recipeName}</h1>
                    <h4>{chefsRecipe.ingredients[0]}</h4>
                    <h4>{chefsRecipe.cookingMethod}</h4>
                    <h4>{chefsRecipe.rating}</h4>
                  
                </div>

              ))
            }
          </section>
        </div>
      </main>
    );
};

export default ChefRecipe;
