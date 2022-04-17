import React from 'react';

const Service = ({ service: { img, details, price } }) => {
    return (
        <div className=' shadow-2xl w-[300px] relative rounded-lg'>
            <div>
                <img className=' rounded-lg' src={img} alt="" />
            </div>
            <div className=' pt-20 pl-6'>
                {
                    details.map(detail => <p>{detail}</p>)
                }
            </div>
            <button className='bg-[#DF1F2D] text-white px-4 py-2 rounded-full w-full mt-6'>Book Now</button>
            <div className=' h-[100px] w-[100px] rounded-full flex items-center justify-center shadow-xl text-3xl font-bold  bg-white absolute top-[120px] left-[100px]'><span className=' font-normal text-lg'>$</span>{price}</div>
        </div>
    );
};

export default Service;