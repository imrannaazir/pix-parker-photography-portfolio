import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className=' sticky w-[100%] top-0 bg-[#DF1F2D]   py-6 text-white z-10'>
            <nav className=' flex justify-between w-[90%] mx-auto'>
                <div>
                    PixParker
                </div>
                <div className='flex gap-4'>

                    <a href='/#home'>Home</a>
                    <a href='/#services'>Service</a>
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