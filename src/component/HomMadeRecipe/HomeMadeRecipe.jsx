import React from 'react';
import './HomeMadeRecipe.css'
import { Container } from 'react-bootstrap';
const HomeMadeRecipe = () => {
    return (
        <div className='family-recipe2'>
            <div className='my-image2'>
                 <img src="./mutton.jpg" alt="" />
            </div>
        <div className='text2'>
             <div> 
             <h1>Delicious</h1>
             <h1>Home-made</h1>
             <h1>Mutton Tanduri</h1>
             </div>
             <p>Family favourite meals that</p>
             <p>everyone will love</p>
             <button className='btn btn-primary'>See more</button>
        </div>
    </div>
    );
};

export default HomeMadeRecipe;