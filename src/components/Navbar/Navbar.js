import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
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
        <div className={` ${navbar ? 'sticky' : 'absolute'} text-lg w-[100%] top-0 ${navbar ? 'bg-[#DF1F2D]' : 'bg-transparent'}   py-6 text-white z-50 ${navbar ? 'shadow-lg' : 'shadow-none'}`}>
            <nav className=' flex justify-between w-[90%] mx-auto'>
                <div className=' text-4xl font-mono font-semibold'> <FontAwesomeIcon icon={faCameraRetro} />
                    PixParker
                </div>
                <div className='flex gap-4'>

                    <Link to='/home'>Home</Link>
                    <a href='home#services'>Service</a>
                    <a href='/#blogs'>Blogs</a>
                    <Link to='/about'>About</Link>
                </div>
                {user ? <button onClick={() => signOut(auth)}>Logout</button> : <div className='flex gap-4'>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/signup'><button>Sign Up</button></Link>
                </div>}
            </nav>
        </div>
    );
};

export default Navbar;