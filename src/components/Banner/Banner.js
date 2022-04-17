import React from 'react';
import banner from '../../assets/videos/banner.mp4'

const Banner = () => {
    return (
        <div>
            <div >
                <video className='w-[100%] static top-0' src={banner} autoPlay loop muted></video>
            </div>
        </div>
    );
};

export default Banner;