import React from 'react';
import banner from '../../assets/videos/banner.mp4'

const Banner = () => {
    return (
        <div>
            <div className=' relative'>
                <video className='w-[100%] static top-0' src={banner} autoPlay loop muted></video>
                <div className=' absolute top-12 lg:top-40 left-32 text-white '>
                    <div className='motion-safe:animate-bounce'>
                        <p className=' lg:text-4xl text-[#DF1F2D]'>Hello</p>
                        <p className='lg:text-8xl font-semibold'>I'm Peter Parker.</p>
                        <p className=' lg:text-2xl font-serif text-gray-200'>I'm proving Photograph & Videograph of my friend, Spiderman!</p>

                    </div>
                    <a className=' px-6 py-2 border-2 border-[#DF1F2D] rounded-full hover:bg-[#DF1F2D]' href="#services">Contact Me</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;