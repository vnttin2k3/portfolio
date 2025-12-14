import React from 'react';
import Hero from '../components/home/Hero';
import Highlights from '../components/home/Highlights';
import AboutPreview from '../components/home/AboutPreview';
import LatestBlog from '../components/home/LatestBlog';
import Partners from '../components/home/Partners';

import FadeInSection from '../components/common/FadeInSection';

const Home = () => {
    return (
        <div className="home-page">
            <FadeInSection>
                <Hero />
            </FadeInSection>

            <FadeInSection>
                <Highlights />
            </FadeInSection>

            <FadeInSection>
                <AboutPreview />
            </FadeInSection>

            <FadeInSection>
                <LatestBlog />
            </FadeInSection>

            <FadeInSection>
                <Partners />
            </FadeInSection>
        </div>
    );
};

export default Home;
