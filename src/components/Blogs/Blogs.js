import React from 'react';
import useBlog from '../../assets/hooks/useBlog';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const { blogs } = useBlog()
    console.log(blogs);
    return (
        <div id='blogs'>
            <p className=' text-center text-2xl font-serif font-bold'>Read my resent Blogs</p>
            <div className='mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 xl:w-[70%] w-[70%] md:w-[90%]  my-6 z-[-1]'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} />)
                }
            </div>

        </div>
    );
};

export default Blogs;