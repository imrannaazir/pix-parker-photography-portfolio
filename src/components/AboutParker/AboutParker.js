import React from 'react';
import parker from '../../assets/images/parker.jpeg'
const AboutParker = () => {
    return (
        <div>
            <p className=' text-center text-4xl font-semibold mt-12'>Who Am I<span className=' animate-ping text-6xl'>_</span></p>
            <div className='w-[90%] mx-auto my-32 grid grid-cols-2' >

                <div className='  relative'>
                    <img className=' rounded-full absolute left-6 -top-6 z-10' src={parker} alt="" />
                    <div className='w-[400px] h-[400px] border-2 border-[#DF1F2D] rounded-[190px] animate-spin -z-10'></div>
                    <div className=' absolute top-3 left-2 w-[400px] h-[400px] border-2 border-gray-700 rounded-[190px] animate-spin -z-10'></div>

                </div>
                <div>
                    <p className=' text-4xl text-[#DF1F2D]'>Hi_</p>
                    <p className=' text-6xl font-semibold text-gray-700'>I'm Peter Parker.</p>
                    <p className=' text-xl font-serif text-gray-500'>I'm a Photographer & My click creates history.</p>
                    <p className=' w-24 border-b-8 border-[#DF1F2D] animate-pulse'></p>

                    <p className='mt-6 text-lg font-mono mb-12  '> I'm a professional photographer. My Lots of photos created history. Last time that controversial video clip of spiderman was viral through The Daily Bugle that was provided by me. Spiderman is my closest friend. For that reason, I can easily capture him on my camera. </p>

                    <a className='px-6 py-2 border-2 bg-gray-500 border-[#DF1F2D] rounded-full hover:bg-[#DF1F2D] text-white' href="#services">See my works</a>
                </div>
            </div>

        </div >
    );
};

export default AboutParker;