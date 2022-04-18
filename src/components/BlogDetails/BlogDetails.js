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

            img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/The_Importance_of_User_Authentication_Methods_in_Cyber_Security.jpg",
            blogTitle: "Difference between authorization and authentication?",
            blogBody: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quis repellendus eum sint non officia sit beatae expedita aut cupiditate fuga nam dolorum, nobis facilis officiis itaque tenetur aperiam eveniet tempore blanditiis ratione voluptatibus laudantium hic. Maxime similique sequi earum eos, explicabo aperiam vitae ut provident quod quae obcaecati non."
        },
        {
            id: "2",

            img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/The_Importance_of_User_Authentication_Methods_in_Cyber_Security.jpg",
            blogTitle: "Why are you using firebase? What other options do you have to implement authentication?",
            blogBody: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quis repellendus eum sint non officia sit beatae expedita aut cupiditate fuga nam dolorum, nobis facilis officiis itaque tenetur aperiam eveniet tempore blanditiis ratione voluptatibus laudantium hic. Maxime similique sequi earum eos, explicabo aperiam vitae ut provident quod quae obcaecati non."
        },
        {
            id: "3",

            img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/The_Importance_of_User_Authentication_Methods_in_Cyber_Security.jpg",
            blogTitle: "What other services does firebase provide other than authentication?",
            blogBody: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quis repellendus eum sint non officia sit beatae expedita aut cupiditate fuga nam dolorum, nobis facilis officiis itaque tenetur aperiam eveniet tempore blanditiis ratione voluptatibus laudantium hic. Maxime similique sequi earum eos, explicabo aperiam vitae ut provident quod quae obcaecati non."
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