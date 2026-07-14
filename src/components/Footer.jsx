import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm text-gray-600'>
                
                {/* ----- Left Section: Logo & Description ----- */}
                <div>
                    {/* যদি assets-এ লোগো থাকে তবে <img src={assets.logo} /> ব্যবহার করতে পারেন */}
                    <h2 className='text-2xl font-medium text-black mb-5 tracking-widest flex items-center gap-1'>
                        FOREVER<span className='w-2 h-2 rounded-full bg-pink-400 inline-block'></span>
                    </h2>
                    <p className='w-full md:w-2/3 leading-relaxed text-gray-500'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                {/* ----- Middle Section: Company Links ----- */}
                <div>
                    <p className='text-xl font-medium text-gray-800 mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li><Link to='/' className='hover:text-black transition-colors'>Home</Link></li>
                        <li><Link to='/about' className='hover:text-black transition-colors'>About us</Link></li>
                        <li><Link to='/delivery' className='hover:text-black transition-colors'>Delivery</Link></li>
                        <li><Link to='/privacy-policy' className='hover:text-black transition-colors'>Privacy policy</Link></li>
                    </ul>
                </div>

                {/* ----- Right Section: Contact Info ----- */}
                <div>
                    <p className='text-xl font-medium text-gray-800 mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li><a href="jakerulislam024@gmail.com" className='hover:text-black transition-colors'>jakerulislam024@gmail.com</a></li>
                    </ul>
                </div>

            </div>

            {/* ----- Copyright Section ----- */}
            <div>
                <hr className='border-gray-300' />
                <p className='py-5 text-sm text-center text-gray-500'>
                    Copyright 2024 © jakerul.dev - All Right Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;