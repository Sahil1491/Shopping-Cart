import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fashion from './Pages/Fashion/Fashion';
import Electronics from './Pages/Electronics/Electronics';
import Constact from './Pages/AboutUs/AboutUs';
import BeautyProduct from './Pages/BeautyProducts/BeautyProduct';



function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <>
        <Header cartCount={cartCount}/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home setCartCount={setCartCount}  />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Fashion" element={<Fashion/>}/>
          <Route path='/electronics' element={<Electronics/>} />
          <Route path='/Contact' element={<Constact/>} />
          <Route path='/beauty-Producs' element={<BeautyProduct/>} />
         
       
        </Routes>
        <ToastContainer/>
      </>
    </Router>
  );
}

export default App;
