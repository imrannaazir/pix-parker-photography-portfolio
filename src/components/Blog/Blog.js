import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Blog = ({ blog: { id, img, blogTitle, blogKeyword } }) => {
    const navigate = useNavigate()
    const navigateDetails = id => {
        navigate(`/blogDetails/${id}`)

    }
    return (
        <div className=' rounded-2xl shadow-2xl text-white  bg-[#2D2D38]'>
            <img className=' rounded-t-2xl' src={img} alt="" />
            <div className=' pt-6'>
                <p className=' font-semibold text-[#DF1F2D] w-[90%] mx-auto'>{blogKeyword}</p>
                <p className=' text-lg font-semibold w-[90%] mx-auto'>{blogTitle}</p>
                <p className=' text-sm flex justify-between w-[90%] mx-auto py-6'><span>Author: Imran Nazir</span>

                    <button onClick={() => navigateDetails(id)}>Read more</button> </p>
            </div>

        </div>
    );
};

export default Blog;