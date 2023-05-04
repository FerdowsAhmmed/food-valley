import React, { useEffect, useState } from 'react';
import './Allchefs.css';
import { Link } from 'react-router-dom';

const Allchefs = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allData1')
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);

  return (
    
       <main> 
        <h1 className='text-center mt-5'>All Available Chefs</h1>
            <div className='card-container'>
                    {chefData.map((chef) => (
                    <div className='card' key={chef.id}>
                <img className='images' src={chef.chefPicture} alt='' />
                <p>Name: {chef.chefName}</p>
                <p>Years of experience: {chef.yearsOfExperience}</p>
                <p>Numbers of recipes: {chef.numberOfRecipes}</p>
                <p>Likes: {chef.likes}</p>
                <Link to={`/${chef.id}`}><button>View recipe</button></Link>

                    </div>
            ))}
            </div>
       </main>
   
  );
};

export default Allchefs;