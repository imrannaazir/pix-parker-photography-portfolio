import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import twitter from '../../assets/images/twitter.png'
import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'

const Footer = () => {
    return (
        <div>
            <div className=' grid lg:grid-cols-3 text-white w-[90%] mx-auto my-12  gap-20'>
                <div className=' border-r-2 border-white'>
                    <p className=' text-4xl font-mono font-semibold border-2 inline px-6 py-6'> <FontAwesomeIcon icon={faCameraRetro} />
                        PixParker
                    </p>
                    <p className=' text-2xl mt-12 text-gray-500'> <FontAwesomeIcon icon={faMailBulk} /> peter@parker.com</p>
                    <p className=' text-2xl text-gray-500'><FontAwesomeIcon icon={faPhone} /> +4545515454154</p>
                </div>

                <div className=' border-r-2 border-white'>
                    <p className=' text-2xl mb-4 text-gray-400'>Newsletter</p>
                    <input className=' h-8 bg-gray-400 ' type="email" name="" id="" />
                    <button className=' bg-gray-400 text-gray-800 px-2 font-bold rounded-r-full h-8'>Send</button>

                </div>


                <div>
                    <p className=' text-2xl mb-4 text-gray-400'>Follow me</p>
                    <div className='flex gap-6 mt-3'>
                        <a href=""><img className=' w-8' src={github} alt="" /></a>
                        <a href=""><img className=' w-8' src={twitter} alt="" /></a>
                        <a href=""><img className=' w-8' src={linkedin} alt="" /></a>
                    </div>

                </div>

            </div>
            <p className='text-gray-600 text-center'>© 2022 PixParker.</p>
        </div>
    );
};

export default Footer;