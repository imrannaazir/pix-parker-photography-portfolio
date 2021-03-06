import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [open, setOpen] = useState(true)
    const [user] = useAuthState(auth);
    const [navbar, setNavbar] = useState(false)


    const changeBackground = () => {
        if (window.scrollY >= 76) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={` ${navbar ? 'sticky' : 'absolute'} text-lg w-[100%] top-0 ${navbar ? 'bg-black' : 'bg-transparent'}   py-3 text-white z-50 ${navbar ? 'shadow-lg' : 'shadow-none'} }`}>
            <nav className=' flex justify-between items-center w-[90%] mx-auto'>
                <div className=' lg:text-4xl font-mono font-semibold'> <FontAwesomeIcon icon={faCameraRetro} />
                    PixParker
                </div>
                <div className={`flex flex-col lg:flex-row gap-4 absolute ${!open ? 'top-16' : 'top-[-220px]'} lg:static ${navbar ? 'bg-black' : 'bg-transparent'} w-full lg:w-[50%] left-0 pl-5`}>

                    <Link to='/home'>Home</Link>
                    <a href='home#services'>Service</a>
                    <a href='/#blogs'>Blogs</a>
                    <Link to='/about'>About</Link>
                </div>
                {user ? <button onClick={() => signOut(auth)}>Logout</button> : <div className='lg:flex gap-4 hidden '>
                    <Link to='/login'><button className=' px-6 py-2'>Login</button></Link>
                    <Link to='/signup'><button className=' px-6 py-2 border-2 border-white rounded-full'>Sign Up</button></Link>
                </div>}
            </nav>

            <div onClick={() => setOpen(!open)} className=' '>
                {open ? <FontAwesomeIcon className=' text-white absolute top-4 right-6 md:hidden text-2xl' icon={faToggleOff} /> : <FontAwesomeIcon className=' text-white absolute top-4 right-6 md:hidden text-2xl' icon={faToggleOn} />}
            </div>
        </div>
    );
};

export default Navbar;