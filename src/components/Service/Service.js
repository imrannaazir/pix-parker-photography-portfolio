import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service: { id, img, details, price, packageNo, packageName, packageSubtitle } }) => {
    const navigate = useNavigate()
    const navigateToCheckout = id => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className=' shadow-2xl w-[300px] relative rounded-lg bg-[#2D2D38]'>
            <div>
                <img className=' rounded-lg blur-[2px]' src={img} alt="" />
            </div>
            <div className=' pt-20 pl-6  text-gray-200'>
                {
                    details.map(detail => <p key={detail} className=' py-2'><FontAwesomeIcon
                        className=' text-green-500 mr-3'
                        icon={faCheckCircle} />{detail}</p>)
                }
            </div>
            <button onClick={() => navigateToCheckout(id)} className='bg-[#DF1F2D] hover:bg-gray-600 text-white px-4 py-2 rounded-full w-full mt-6'>Book Now</button>
            <div className=' h-[100px] w-[100px] rounded-full flex items-center justify-center shadow-xl text-3xl font-bold  bg-white  absolute top-[120px] left-[100px]'><span className=' font-normal text-lg'>$</span>{price}
            </div>
            <div className='flex flex-col items-center justify-end absolute top-0 left-1 text-white'>
                <p className=' text-[#DF1F2D] font-bold'>{packageNo}</p>
                <p className=' text-2xl font-bold'>{packageName}</p>
                <p className=' text-xl text-gray-200 font-serif'>{packageSubtitle}</p>
            </div>
        </div>
    );
};

export default Service;