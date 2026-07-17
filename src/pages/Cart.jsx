import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ContextProvider';
import { assets } from '../assets/assets';

const Cart = () => {

    const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

   
    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems]);

    return (
        <div className='border-t pt-14'>
            
            {/* Title */}
            <div className='text-2xl mb-3'>
                <h1 className='text-gray-700 font-medium'>YOUR <span className='text-gray-900 font-bold'>CART</span></h1>
            </div>

            {/* Cart Items List */}
            <div>
                {
                    cartData.map((item, index) => {
                      
                        const productInfo = products.find((product) => product._id === item._id);

                        if (!productInfo) return null; 

                        return (
                            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                                
                                {/* Product Image & Info */}
                                <div className='flex items-start gap-6'>
                                    <img className='w-16 sm:w-20 rounded' src={productInfo.image[0]} alt={productInfo.name} />
                                    <div>
                                        <p className='text-xs sm:text-lg font-medium text-gray-800'>{productInfo.name}</p>
                                        <div className='flex items-center gap-5 mt-2 text-sm text-gray-600'>
                                            <p>{currency}{productInfo.price}</p>
                                            <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 text-xs sm:text-sm rounded-sm'>{item.size}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quantity Input */}
                                <input 
                                    onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                                    className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-center outline-none' 
                                    type="number" 
                                    min={1} 
                                    defaultValue={item.quantity} 
                                />

                                {/* Delete Icon */}
                                <img 
                                    onClick={() => updateQuantity(item._id, item.size, 0)} // সংখ্যা ০ করে দিলে কার্ট থেকে মুছে যাবে
                                    className='w-4 mr-4 sm:w-5 cursor-pointer hover:opacity-75 transition-opacity' 
                                    src={assets.bin_icon || 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'} 
                                    alt="Remove" 
                                />

                            </div>
                        );
                    })
                }
            </div>

            {/* Cart Empty Condition */}
            {cartData.length === 0 && (
                <div className='text-center py-20'>
                    <p className='text-gray-400 text-lg'>Your cart is empty!</p>
                </div>
            )}

        </div>
    );
};

export default Cart;