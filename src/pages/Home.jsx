import React from 'react';
import Hero from '../components/home/Hero';
import Highlights from '../components/home/Highlights';
import AboutPreview from '../components/home/AboutPreview';
import LatestBlog from '../components/home/LatestBlog';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Highlights />
            <AboutPreview />
            <LatestBlog />
        </div>
    );
};

export default Home;
