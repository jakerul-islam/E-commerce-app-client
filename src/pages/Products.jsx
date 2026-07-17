import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ContextProvider';

const Products = () => {
    const { productId } = useParams();
    // ১. কনটেক্সট থেকে addToCart ফাংশনটি আনা হলো
    const { products, currency, addToCart } = useContext(ShopContext); 
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState(''); 

    const fetchProductData = () => {
        const targetProduct = products.find((item) => item._id === productId);
        if (targetProduct) {
            setProductData(targetProduct);
            setImage(targetProduct.image[0]);
        }
    };

    useEffect(() => {
        if (products && products.length > 0) {
            fetchProductData();
        }
    }, [productId, products]);

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            
            <div className='flex gap-12 flex-col sm:flex-row'>
                
                {/* ----- Left Side: Product Images ----- */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item, index) => (
                                <img 
                                    onClick={() => setImage(item)} 
                                    src={item} 
                                    key={index} 
                                    className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border border-gray-200 hover:border-gray-500 rounded' 
                                    alt={`Product thumb ${index}`} 
                                />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto rounded' src={image} alt={productData.name} />
                    </div>
                </div>

                {/* ----- Right Side: Product Info ----- */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2 text-gray-800'>{productData.name}</h1>
                    
                    <div className='flex items-center gap-1 mt-2'>
                        <span className='text-orange-500 text-lg'>★</span>
                        <span className='text-orange-500 text-lg'>★</span>
                        <span className='text-orange-500 text-lg'>★</span>
                        <span className='text-orange-500 text-lg'>★</span>
                        <span className='text-gray-300 text-lg'>★</span>
                        <p className='pl-2 text-sm text-gray-500'>(122)</p>
                    </div>

                    <p className='mt-5 text-3xl font-medium text-gray-900'>
                        {currency ? currency : '$'}{productData.price}
                    </p>

                    <p className='mt-5 text-gray-500 md:w-4/5 leading-relaxed text-sm sm:text-base'>
                        {productData.description}
                    </p>

                    {/* Size Selector */}
                    <div className='flex flex-col gap-4 my-8'>
                        <p className='text-gray-700 font-medium'>Select Size</p>
                        <div className='flex gap-3'>
                            {
                                productData.sizes.map((item, index) => (
                                    <button 
                                        onClick={() => setSize(item)} 
                                        key={index} 
                                        className={`border py-2 px-4 bg-gray-50 rounded-sm text-sm transition-all duration-200 ${item === size ? 'border-orange-500 bg-orange-50 font-medium' : 'border-gray-300'}`}
                                    >
                                        {item}
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                    {/* ২. বাটন ক্লিকে addToCart কল করা হলো আইডি ও সাইজ সহ */}
                    <button 
                        onClick={() => addToCart(productData._id, size)}
                        className='bg-black text-white px-8 py-3 text-xs font-semibold active:bg-gray-700 transition-colors tracking-wider rounded-sm uppercase'
                    >
                        ADD TO CART
                    </button>

                    <hr className='mt-8 sm:w-4/5 border-gray-200' />

                    <div className='text-xs sm:text-sm text-gray-500 mt-5 flex flex-col gap-1 tracking-wide'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>

                </div>

            </div>

        </div>
    ) : <div className='opacity-0'>Loading...</div>;
};

export default Products;