import React from 'react';
import Hero from '../components/Hero';
import LatesCollection from '../components/LatesCollection';
import BestSeller from '../components/BestSeller';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <LatesCollection></LatesCollection>
           <BestSeller></BestSeller>
        </div>
    );
};

export default Home;