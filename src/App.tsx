import React, { useState, useEffect } from 'react';
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
import Contact from './Pages/AboutUs/AboutUs';
import BeautyProduct from './Pages/BeautyProducts/BeautyProduct';

function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setCartCount(parsedItems.length);
    }
  }, []);

  return (
    <Router>
      <>
        <Header cartCount={cartCount}/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home setCartCount={setCartCount} />} />
          <Route path="/cart" element={<Cart setCartCount={setCartCount} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Fashion" element={<Fashion setCartCount={setCartCount}/>} />
          <Route path='/electronics' element={<Electronics setCartCount={setCartCount}/>} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/beauty-Products' element={<BeautyProduct setCartCount={setCartCount}/>} />
        </Routes>
        <ToastContainer/>
      </>
    </Router>
  );
}

export default App;
