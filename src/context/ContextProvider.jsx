import React, { createContext, useState } from 'react';
import { products } from '../assets/assets';


export const ShopContext = createContext()


const ContextProvider = (props) => {
    const [search,setSearch]=useState('')
const [showSearch, setShowSearch]=useState(true)
    const currency ='$';
    const delivery = 10;
    const value = {
        products,currency,delivery,search,setShowSearch,showSearch,setSearch
    }
    return (
         <ShopContext.Provider value={value}>

        {props.children}
    </ShopContext.Provider>
    )

   
   
};

export default ContextProvider;