import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth)

    const { serviceId } = useParams()
    const services = [
        {
            id: "1",
            packageNo: "Package 01",
            img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-1627065947.jpeg",
            packageName: "Photography",

        },
        {
            id: "2",
            packageNo: "Package 02",
            img: "https://wallpapercave.com/wp/wp8328192.jpg",
            packageName: "Recommended",

        },
        {
            id: "3",
            packageNo: "Package 03",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkgSMMvoaIZXGS4O1svZ56Lp5kowh7I_wZ_fJ03FqBd3JUKwesS990SGZSqwEofdxGT4&usqp=CAU",
            packageName: "Videography",

        }
    ]
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        navigate('/')

    }
    const service = services.find(a => a.id === serviceId)
    const { img, packageName } = service
    return (
        <div className=' grid grid-cols-2 my-36  text-gray-400 w-[90%] mx-auto'>
            <div><img src={img} alt="" /></div>
            <div>
                <p className=' text-2xl text-center text-[#DF1F2D]'>Billing details for {packageName}</p>
                <form onSubmit={handleSubmit} className='ml-12'>
                    <p>Name</p>
                    <input required className=' w-[350px] h-8 mb-4 rounded-full pl-6' type="text" />
                    <p>Email</p>
                    <input className=' w-[350px] h-8 mb-4 rounded-full pl-6' type="email" name="" placeholder={user.email} id="" readOnly />
                    <p>Company Name</p>
                    <input required className=' w-[350px] h-8 mb-4 rounded-full pl-6' type="text" name="" id="" />
                    <p>Address</p>
                    <input required className=' w-[350px] h-8 mb-4 rounded-full pl-6' type="text" />
                    <button className='block bg-[#DF1F2D] px-6 py-2 rounded-full font-semibold text-gray-200'>Send me request</button>
                </form>

            </div>


        </div>
    );
};

export default Checkout;