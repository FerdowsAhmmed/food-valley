import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
   <section className='footer-container'>
     <div className='footer-section'>
      <div> 
        <h3>About Us</h3>
        <p>We are a team of passionate chefs and foodies dedicated to bringing you the best recipes and culinary inspiration from around the world.</p>
      </div>
      <div>
        <h3>Explore</h3>
        <ul>
              <li><a href='#'>Recipes</a></li>
              <li><a href='#'>Ingredients</a></li>
              <li><a href='#'>Cooking Techniques</a></li>
              <li><a href='#'>Food News</a></li>
            </ul>
      </div>
      <div>
        <h3>Connect</h3>
        <ul>
              <li><a href='#'>Facebook</a></li>
              <li><a href='#'>Twitter</a></li>
              <li><a href='#'>Instagram</a></li>
              <li><a href='#'>Pinterest</a></li>
            </ul></div>
    
    </div>
    <div className='text-center'>
            <p>&copy; 2023 BD Chefs. All Rights Reserved.</p>
          </div>
   </section>
  );
};

export default Footer;
  