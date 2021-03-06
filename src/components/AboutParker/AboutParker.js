import React from 'react';
import parker from '../../assets/images/parker.jpeg'
const AboutParker = () => {
    return (
        <div className=' '>
            <p className=' text-center text-4xl font-semibold mt-12 text-gray-400'>Who Am I<span className=' animate-ping text-6xl'>_</span></p>
            <div className='w-[90%] mx-auto my-32 grid lg:grid-cols-2' >

                <div className='  relative'>
                    <img className='  w-[300px] h-[300px]  lg:w-[400px] lg:h-[400px]  rounded-full absolute left-6 -top-6 z-10' src={parker} alt="" />
                    <div className=' w-[300px] h-[300px]  lg:w-[400px] lg:h-[400px] border-2 border-[#DF1F2D] rounded-[190px] animate-spin -z-10'></div>
                    <div className=' absolute top-3 left-2  w-[300px] h-[300px]  lg:w-[400px] lg:h-[400px]  border-2 border-white rounded-[190px] animate-spin '></div>

                </div>
                <div>
                    <p className=' text-4xl text-[#DF1F2D]'>Hi_</p>
                    <p className=' text-6xl font-semibold text-gray-700'>I'm Peter Parker.</p>
                    <p className=' text-xl font-serif text-gray-500'>I'm a Photographer & My click creates history.</p>
                    <p className=' w-24 border-b-8 border-[#DF1F2D] animate-pulse'></p>

                    <p className='mt-6 text-lg font-mono mb-12 text-gray-400'> I'm a professional photographer. My Lots of photos created history. Last time that controversial video clip of spiderman was viral through The Daily Bugle that was provided by me. Spiderman is my closest friend. For that reason, I can easily capture him on my camera. </p>

                    <a className='px-6 py-2 bg-gray-500 rounded-full hover:bg-[#DF1F2D] text-white' href="#services">See my works</a>
                </div>
            </div>

        </div >
    );
};

export default AboutParker;