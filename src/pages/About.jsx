import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div className='border-t pt-10'>
            
            {/* ---------- About Us Header ---------- */}
            <div className='text-2xl text-center pt-8 border-t flex justify-center items-center gap-2'>
                <h1 className='text-gray-500 font-medium'>ABOUT <span className='text-gray-900 font-bold'>US</span></h1>
                <p className='w-8 md:w-12 h-[2px] bg-gray-700'></p>
            </div>

            {/* ---------- About Us Body Content ---------- */}
            <div className='my-10 flex flex-col md:flex-row gap-16 items-center'>
                
                {/* Left Side: About Image */}
                <div className='w-full md:max-w-[450px]'>
                    <img 
                        className='w-full h-auto object-cover rounded shadow-sm border border-gray-100' 
                        src={assets.about_img || 'https://images.unsplash.com/photo-1483985988355-763728e1935b'} 
                        alt="About Us" 
                    />
                </div>

                {/* Right Side: Description */}
                <div className='flex-1 flex flex-col justify-center gap-6 text-gray-600 text-sm md:text-base leading-relaxed'>
                    <p>
                        Forever Was Born Out Of A Passion For Innovation And A Desire To Revolutionize The Way People Shop Online. Our Journey Began With A Simple Idea: To Provide A Platform Where Customers Can Easily Discover, Explore, And Purchase A Wide Range Of Products From The Comfort Of Their Homes.
                    </p>
                    <p>
                        Since Our Inception, We've Worked Tirelessly To Curate A Diverse Selection Of High-Quality Products That Cater To Every Taste And Preference. From Fashion And Beauty To Electronics And Home Essentials, We Offer An Extensive Collection Sourced From Trusted Brands And Suppliers.
                    </p>
                    
                    <b className='text-gray-800 font-semibold mt-2'>Our Mission</b>
                    
                    <p>
                        Our Mission At Forever Is To Empower Customers With Choice, Convenience, And Confidence. We're Dedicated To Providing A Seamless Shopping Experience That Exceeds Expectations, From Browsing And Ordering To Delivery And Beyond.
                    </p>
                </div>

            </div>

            {/* ---------- Why Choose Us Section ---------- */}
            <div className='text-xl py-4 flex items-center gap-2 mt-20'>
                <h2 className='text-gray-500 font-medium'>WHY <span className='text-gray-900 font-bold'>CHOOSE US</span></h2>
                <p className='w-8 md:w-12 h-[2px] bg-gray-700'></p>
            </div>

            {/* Grid/Boxes Layout */}
            <div className='flex flex-col md:flex-row text-sm mb-20 border rounded overflow-hidden'>
                
                {/* Box 1: Quality Assurance */}
                <div className='border-b md:border-b-0 md:border-r px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1 hover:bg-slate-50 transition-all duration-300'>
                    <b className='text-gray-800 font-bold tracking-wider'>QUALITY ASSURANCE:</b>
                    <p className='text-gray-600 leading-relaxed'>
                        We Meticulously Select And Vet Each Product To Ensure It Meets Our Stringent Quality Standards.
                    </p>
                </div>

                {/* Box 2: Convenience */}
                <div className='border-b md:border-b-0 md:border-r px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1 hover:bg-slate-50 transition-all duration-300'>
                    <b className='text-gray-800 font-bold tracking-wider'>CONVENIENCE:</b>
                    <p className='text-gray-600 leading-relaxed'>
                        With Our User-Friendly Interface And Hassle-Free Ordering Process, Shopping Has Never Been Easier.
                    </p>
                </div>

                {/* Box 3: Exceptional Customer Service */}
                <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1 hover:bg-slate-50 transition-all duration-300'>
                    <b className='text-gray-800 font-bold tracking-wider'>EXCEPTIONAL CUSTOMER SERVICE:</b>
                    <p className='text-gray-600 leading-relaxed'>
                        Our Team Of Dedicated Professionals Is Here To Assist You All The Way, Ensuring Your Satisfaction Is Our Top Priority.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default About;