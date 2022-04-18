import React from 'react';
import { Link } from 'react-router-dom';


const Blog = ({ blog: { img, blogTitle, blogKeyword } }) => {
    console.log(img);
    return (
        <div className=' rounded-2xl shadow-2xl'>
            <img className=' rounded-t-2xl' src={img} alt="" />
            <p className=' font-semibold text-[#DF1F2D] w-[90%] mx-auto'>{blogKeyword}</p>
            <p className=' text-lg font-semibold w-[90%] mx-auto'>{blogTitle}</p>
            <p className=' text-sm flex justify-between w-[90%] mx-auto'><span>Author: Imran Nazir</span> <Link to='/'>Read more</Link> </p>

        </div>
    );
};

export default Blog;