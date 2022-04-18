import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import Blog from '../Blog/Blog';


const Blogs = () => {
    const { blogs } = useBlogs()
    console.log(blogs);

    return (
        <div id='blogs'>
            <p className=' text-center text-4xl font-semibold mt-12 text-gray-400'>Read my resent Blogs <span className=' animate-ping'><FontAwesomeIcon icon={faBlog} /></span></p>
            <div className='mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 xl:w-[70%] w-[70%] md:w-[90%]  my-6 z-[-1]'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} />)
                }
            </div>

        </div>
    );
};

export default Blogs;