import React from 'react';
import './FamilyRecipe.css';
const FamilyRecipe = () => {
    return (
        <div className='family-recipe'>
            <div className='text'>
                 <div> 
                 <h1>Family</h1>
                 <h1>Favourite</h1>
                 <h1>Recipes</h1>
                 </div>
                 <p>Family favourite meals that</p>
                 <p>everyone will love</p>
                 <button className='btn btn-primary'>Pre-order now</button>
            </div>

            <div className='my-image img-fluid'>
                <img src="./birani.jpg" alt="" />
            </div>
        </div>
    );
};

export default FamilyRecipe;