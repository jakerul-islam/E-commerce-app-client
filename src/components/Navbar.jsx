import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ContextProvider';

const Navbar = () => {
    // স্মল ডিভাইসের মেনু ওপেন/ক্লোজ স্টেট
    const [visible, setVisible] = useState(false);
    const { getCartCount } = useContext(ShopContext);

    return (
        <div className='flex items-center justify-between font-medium py-5 relative'>
            {/* Logo */}
            <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

            {/* Desktop Menu */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to={'/'} className={'flex flex-col items-center gap-1'}>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to={'/collection'} className={'flex flex-col items-center gap-1 '}>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to={'/about'} className={'flex flex-col items-center gap-1'}>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to={'/contact'} className={'flex flex-col items-center gap-1'}>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
            </ul>

            {/* Icons & Actions */}
            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} alt="" className='w-5 cursor-pointer'/>
                
                <div className='group relative'>
                    <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 text-gray-500 bg-slate-100 rounded shadow-md'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>

                <Link to={'/cart'} className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                {/* হামবার্গার মেনু আইকন - স্মল ডিভাইসের জন্য */}
                <img 
                    onClick={() => setVisible(true)} 
                    src={assets.menu_icon}  
                    className='w-5 cursor-pointer sm:hidden' 
                    alt="" 
                />
            </div>

            {/* ------- স্মল ডিভাইসের জন্য রেসপনসিভ ড্রপডাউন/স্লাইড মেনু ------- */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${visible ? 'w-full h-screen' : 'w-0 h-0'}`}>
                <div className='flex flex-col text-gray-600 h-full'>
                    
               
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer border-b'>
                    
                        <img src={assets.dropdown_icon || assets.menu_icon} className='w-4 rotate-180' alt="" />
                        <p className='text-sm text-gray-500'>Back</p>
                    </div>

                    {/* মোবাইল নেভিগেশন লিংকসমূহ */}
                    <div className='flex flex-col font-medium text-lg'>
                        <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b hover:bg-gray-50' to='/'>HOME</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b hover:bg-gray-50' to='/collection'>COLLECTION</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b hover:bg-gray-50' to='/about'>ABOUT</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b hover:bg-gray-50' to='/contact'>CONTACT</NavLink>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Navbar;