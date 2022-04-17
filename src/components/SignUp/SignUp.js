import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'
import github from '../../assets/images/github.png'

const SignUp = () => {

    return (
        <div className=' w-[380px] mx-auto shadow-md my-20 py-4 rounded-xl'>
            <p className='ml-[15px] text-2xl border-b-2 inline-block border-[#DF1F2D] my-3' >Sign up</p>
            {/* form started */}
            <form className='ml-[15px] flex flex-col gap-1' >

                {/* email field */}
                <p>Email</p>
                <input className='w-[350px] py-2 pl-2 rounded-full border-[#DF1F2D] border' type="text" />

                {/* password field */}
                <p>Password</p>
                <input className='w-[350px] py-2 pl-2 rounded-full border-[#DF1F2D] border' type="password" name="" id="" />

                {/* confirm password field */}
                <p>Confirm Password</p>
                <input className='w-[350px] py-2 pl-2 rounded-full border-[#DF1F2D] border' type="password" name="" id="" />


                {/* sign up button */}
                <button className='w-[350px] py-2 pl-2 rounded-full bg-[#DF1F2D] hover:bg-gray-400 border text-white mt-2' type="submit">Login</button>
                <p className=' text-sm ml-1 mt-1 font-[500]   text-gray-400'>Already have an account?<Link className=' text-[#DF1F2D] underline' to='/login'>Login</Link></p>
            </form>
            <div className="flex justify-evenly space-x-2 w-64 mt-4 mx-auto">
                <span
                    className="bg-gray-300 h-px flex-grow t-2 relative top-2">
                </span>
                <span
                    className="flex-none uppercase text-xs text-gray-400 font-semibold">or
                </span>
                <span
                    className="bg-gray-300 h-px flex-grow t-2 relative top-2">

                </span>
            </div>
            <div className=' text-center'>
                <p className=' font-semibold my-2 text-gray-600'>Sign up with social media</p>
                <button className='ml-2'><img className=' w-10 bg-gray-400 p-2 hover:bg-[#DF1F2D] rounded-full' src={google} alt="" /></button>
                <button className='ml-2'><img className=' w-10 bg-gray-400 p-2 hover:bg-[#DF1F2D] rounded-full' src={facebook} alt="" /></button>
                <button className='ml-2'><img className=' w-10 bg-gray-400 p-2 hover:bg-[#DF1F2D] rounded-full' src={github} alt="" /></button>

            </div>

        </div>
    );
};

export default SignUp;