import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import SignUp from './components/SignUp/SignUp';
import banner from '../src/assets/videos/banner.mp4'
import Checkout from './components/CheckOut/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import BlogDetails from './components/BlogDetails/BlogDetails';

function App() {
  return (
    <div className='bg-black absolute top-0 w-full'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/checkout/:serviceId' element={<RequireAuth><Checkout /></RequireAuth>} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/blogdetails/:blogId' element={<BlogDetails />} />
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
