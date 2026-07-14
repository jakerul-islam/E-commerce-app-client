import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Login from './pages/login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Products from './pages/Products';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md: px-[7vw] lg:px-[9vw]'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element ={<Home></Home>} ></Route>
        <Route path='/about' element ={<About></About>} ></Route>
        <Route path='/cart' element ={<Cart></Cart>} ></Route>
        <Route path='/collection' element ={<Collection></Collection>} ></Route>
        <Route path='/contact' element ={<Contact></Contact>} ></Route>
        <Route path='/login' element ={<Login></Login>} ></Route>
        <Route path='/orders' element ={<Orders></Orders>} ></Route>
        <Route path='/place-order' element ={<PlaceOrder></PlaceOrder>} ></Route>
        <Route path='/products/:productId' element ={<Products></Products>} ></Route>
      </Routes>
      
    </div>
  );
};

export default App;