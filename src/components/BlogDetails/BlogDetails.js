import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const About = () => {
    const { blogId } = useParams()
    console.log('params', blogId);

    const blogs = [
        {
            id: "1",

            img: "https://nordicapis.com/wp-content/uploads/What-is-the-Difference-Between-Authorization-and-Authentication-.png",
            blogTitle: "Difference between authorization and authentication?",
            blogBody: "Most of the time people are matching two words 'Authentication' and 'Authorization'. But there are bits of difference between this two. Authentication is the system that verifies the user. On the other hand, Authorization determines what can user access. Authentication is the first step of any security system and Authorization always comes after Authentication."
        },
        {
            id: "2",

            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicEGsfjk3JTcTuo67sSbHTUAjc7ZuyN3BDbbmlFuzhW,_ZHwPQKHFSKN2tJ,_bg2sIGkB8&usqp=CAU",
            blogTitle: "Why are you using firebase? What other options do you have to implement authentication?",
            blogBody: "Firebase is a very popular platform for giving authentication services. I am also using firebase for authenticating my projects. Manual authentication is very hard to handle. for this reason, most of the developers are using a third-party application for authentication. Firebase is very popular for authentication. But there are many other services that are being used for implementing authentication services like Auth0, MongoDB, Passport, Okta, etc."
        },
        {
            id: "3",

            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lDETM_GegbEaEV-WS99AMXoYCCdjoJalL57N2ZkWZ-So1SJ6zs4VMiULlNM_3Zxkefc&usqp=CAU",
            blogTitle: "What other services does firebase provide other than authentication?",
            blogBody: "Many of us think that firebase only provides authentication services. But there are many other services that come from firebase. Firebase is first built by firebase inc and then Google acquires it. Now it is providing a lot of Android, ios, and web application services.There are most useful services are Athentication ,_Remote Config,_Clouding ,_Hosting ,_Google Analytics ,_Dynamic Links"
        }
    ]
    const blog = blogs.find(a => a.id === blogId)
    const { img, blogTitle, blogBody } = blog




    return (
        <div>
            <div className=' relative w-full h-[350px] bg-gradient-to-r from-gray-500 to-red-500'>
                <img className=' absolute left-1/3 top-56 w-[300px] rounded-xl shadow-xl' src={img} alt="" />


            </div>
            <div className=' mt-20 w-[90%] mx-auto'>
                <p className=' text-5xl text-gray-300 mb-12 font-mono' >{blogTitle}</p>
                <p className=' text-lg text-gray-300 pb-40'>{blogBody}</p>

            </div>
        </div>
    );
};

export default About;