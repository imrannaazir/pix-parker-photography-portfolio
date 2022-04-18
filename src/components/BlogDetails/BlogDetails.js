import React from 'react';
import useBlogs from '../../hooks/useBlogs';

const BlogDetails = () => {
    const { blogs } = useBlogs()
    console.log(blogs);
    return (
        <div>
            <p className=' text-white'>blog details</p>
        </div>
    );
};

export default BlogDetails;