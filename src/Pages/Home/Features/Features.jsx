import React from 'react';
import html from '../../../assets/html.png'
import css from '../../../assets/css.png'
import express from '../../../assets/express.png'
import react from '../../../assets/react.png'
import mongodb from '../../../assets/mongodb.png'
import { FaCheckCircle } from "react-icons/fa";

const Features = () => {
    return (
        <div className='flex flex-col lg:flex-row mx-10 lg:mx-20 mt-20'>
            <div>
               <h1 className='text-3xl font-bold'>Preparation for defferent techonology</h1>
               <div className='grid grid-cols-3 gap-5 mt-10'>
                 <img src={html} alt="" className='w-20'/>
                 <img src={css} alt="" className='w-20'/>
                 <img src={react} alt="" className='w-20'/>
                 <img src={express} alt="" className='w-20'/>
                 <img src={mongodb} alt="" className='w-20'/>
               </div>
               <div className='grid grid-cols-3 gap-6 mt-8'>
               <h4 className='bg-gray-200 text-center font-bold'>HTML</h4>
                 <h4 className='bg-green-300 text-center font-bold'>CSS</h4>
                 <h4 className='bg-blue-300 text-center font-bold'>React</h4>
                 <h4 className='bg-orange-300 text-center font-bold'>Express</h4>
                 <h4 className='bg-red-300 text-center font-bold'>Mongodb</h4>
               </div>
            </div>
            <div className='md:ml-40'>
                <h1 className='text-3xl font-bold'>What we offer</h1>
                <div className='grid grid-cols-1 mt-6 space-y-6'>
                <p className='inline-flex items-center font-normal'><span className='mr-2'><FaCheckCircle style={{color:'green'}}/></span>Beginner friendly all question</p>
                <p className='inline-flex items-center font-normal'><span className='mr-2'><FaCheckCircle style={{color:'green'}}/></span>Total 1000+ question</p>
                <p className='inline-flex items-center font-normal'><span className='mr-2'><FaCheckCircle style={{color:'green'}}/></span>Google preparation</p>
                <p className='inline-flex items-center font-normal'><span className='mr-2'><FaCheckCircle style={{color:'green'}}/></span>24/7 support</p>
                <p className='inline-flex items-center font-normal'><span className='mr-2'><FaCheckCircle style={{color:'green'}}/></span>Make your own dashboard</p>
                <p className='inline-flex items-center font-normal'><span className='mr-2'><FaCheckCircle style={{color:'green'}}/></span>Make your ans PDF</p>
                <p className='inline-flex items-center font-normal'><span className='mr-2'><FaCheckCircle style={{color:'green'}}/></span>Always update</p>
                </div>
            </div>
        </div>
    );
};

export default Features;