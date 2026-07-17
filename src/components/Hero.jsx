import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            
            {/* Hero Left Side - Text Content */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    
                    {/* Top small header with line */}
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-xs md:text-sm tracking-widest'>OUR BESTSELLERS</p>
                    </div>

                    {/* Main Title */}
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
                        Latest Arrivals
                    </h1>

                    {/* Shop Now Action */}
                    <div className='flex items-center gap-2 cursor-pointer group'>
                        <p className='font-semibold text-xs md:text-sm group-hover:text-black transition-all'>
                            SHOP NOW
                        </p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141] group-hover:w-14 transition-all'></p>
                    </div>

                </div>
            </div>

            {/* Hero Right Side - Image Section */}
            
            <div className='w-full sm:w-1/2 bg-[#ffdad6] flex items-end justify-center overflow-hidden'>
                <img 
                    src={assets.hero_img}
                    alt="Latest Arrivals" 
                    className='w-full h-auto object-cover' 
                />
            </div>

        </div>
    );
};

export default Hero;