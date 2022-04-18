import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home' className=''>
            <Banner />
            <Services />
            <Blogs />
        </div>
    );
};

export default Home;