import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700 text-center my-10'>
            
            {/* 1. Easy Exchange Policy */}
            <div className='flex flex-col items-center justify-center gap-3'>
                <img 
                    src={assets.exchange_icon} 
                    className='w-12 m-auto mb-2' 
                    alt="Exchange Icon" 
                />
                <p className='font-semibold text-gray-800 text-sm sm:text-base'>
                    Easy Exchange Policy
                </p>
                <p className='text-gray-400 font-light text-xs sm:text-sm'>
                    We offer hassle free exchange policy
                </p>
            </div>

            {/* 2. 7 Days Return Policy */}
            <div className='flex flex-col items-center justify-center gap-3'>
                <img 
                    src={assets.quality_icon} 
                    className='w-12 m-auto mb-2' 
                    alt="Return Policy Icon" 
                />
                <p className='font-semibold text-gray-800 text-sm sm:text-base'>
                    7 Days Return Policy
                </p>
                <p className='text-gray-400 font-light text-xs sm:text-sm'>
                    We provide 7 days free return policy
                </p>
            </div>

            {/* 3. Best Customer Support */}
            <div className='flex flex-col items-center justify-center gap-3'>
                <img 
                    src={assets. support_img} 
                    className='w-12 m-auto mb-2' 
                    alt="Support Icon" 
                />
                <p className='font-semibold text-gray-800 text-sm sm:text-base'>
                    Best Customer Support
                </p>
                <p className='text-gray-400 font-light text-xs sm:text-sm'>
                    We provide 24/7 customer support
                </p>
            </div>

        </div>
    );
};

export default OurPolicy;