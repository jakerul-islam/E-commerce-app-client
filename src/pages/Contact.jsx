import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
    return (
        <div className='border-t pt-10'>
            
            {/* ---------- Contact Us Title ---------- */}
            <div className='text-2xl text-center pt-10 flex justify-center items-center gap-2'>
                <h1 className='text-gray-500 font-medium'>CONTACT <span className='text-gray-900 font-bold'>US</span></h1>
                <p className='w-8 md:w-12 h-[2px] bg-gray-700'></p>
            </div>

            {/* ---------- Contact Info Section ---------- */}
            <div className='my-10 flex flex-col md:flex-row justify-center gap-10 md:gap-16 mb-28 items-center'>
                
                {/* Left Side: Contact Image */}
                <div className='w-full md:max-w-[480px]'>
                    <img 
                        className='w-full h-auto object-cover rounded shadow-sm' 
                        src={assets.contact_img || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'} 
                        alt="Contact Us" 
                    />
                </div>

                {/* Right Side: Contact Text Details */}
                <div className='flex flex-col justify-center items-start gap-6 text-gray-500 text-sm md:text-base'>
                    
                    {/* Our Store Details */}
                    <h2 className='font-semibold text-xl text-gray-600 tracking-wide'>OUR STORE</h2>
                    
                    <div className='flex flex-col gap-1 leading-relaxed'>
                        <p>54709 Willms Station</p>
                        <p>Suite 350, Washington, USA</p>
                    </div>

                    <div className='flex flex-col gap-1 leading-relaxed'>
                        <p>Tel: (415) 555-0132</p>
                        <p>Email: greatstackdev@gmail.com</p>
                    </div>

                    {/* Careers Details */}
                    <h2 className='font-semibold text-xl text-gray-600 tracking-wide mt-4'>CAREERS AT FOREVER</h2>
                    
                    <p className='leading-relaxed'>Learn more about our teams and job openings.</p>

                    {/* Explore Jobs Button with Hover Effect */}
                    <button className='border border-black px-8 py-4 text-xs font-medium uppercase hover:bg-black hover:text-white transition-all duration-500 rounded-sm active:bg-gray-800'>
                        Explore Jobs
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Contact;