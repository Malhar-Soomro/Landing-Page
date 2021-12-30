import React from 'react';
import Cards from './Cards';
import Navbar from './Navbar';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Services />
            <Cards />
        </div>
    );
}

export default Home;
