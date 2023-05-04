import React from 'react';
import Allchefs from '../Chefs/AllShefs/Allchefs';
import CarouselSection from '../CarouselSection/CarouselSection';
import FamilyRecipe from '../FamilyRecipe/FamilyRecipe';
import HomeMadeRecipe from '../HomMadeRecipe/HomeMadeRecipe';

const Home = () => {
    return (
        <div>
            <CarouselSection></CarouselSection>
            <Allchefs></Allchefs>
            <FamilyRecipe></FamilyRecipe>
            <HomeMadeRecipe></HomeMadeRecipe>
        </div>
    );
};

export default Home;