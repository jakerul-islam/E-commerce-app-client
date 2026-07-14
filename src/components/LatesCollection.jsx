import React, { useContext } from 'react';
import { ShopContext } from '../context/ContextProvider';

const LatesCollection = () => {
    const{products}= useContext(ShopContext)
    console.log(products, 'from latest collection')
    return (
        <div>
            
        </div>
    );
};

export default LatesCollection;