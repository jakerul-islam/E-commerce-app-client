import React, { useContext } from 'react';
import { ShopContext } from '../context/ContextProvider';
import { Link } from 'react-router-dom';

const ProductItem = ({id, image,name,price}) => {
    const {currency}=useContext(ShopContext)
    return (
       <Link to={`/products/${id}`} className='text-gray-700 cursor-pointer'>
       <div className='overflow-hidden'>
        <img src={image[0]} alt=""  className='hover:scale-110 transition ease-in-out'/>
       </div>
       <p>{name}</p>
       <p>{currency} {price}</p>
       </Link>
    );
};

export default ProductItem;