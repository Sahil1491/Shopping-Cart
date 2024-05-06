import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';
import img1 from '../../Components/Assests/Shopping.avif';
import Iphone13 from '../../Components/Assests/Iphone13.jpeg';
import MacbookAir from '../../Components/Assests/MAcbookAir.jpeg';
import Iphone15pro from '../../Components/Assests/Iphone15pro.jpeg';
import S22Ultra from '../../Components/Assests/SamsungS22Ultra.jpeg';
import LaptopImg from '../../Components/Assests/Laptop.jpeg';
import Slide2 from '../../Components/Assests/Slide2.jpeg';
import Slide4 from '../../Components/Assests/this-is-same-shoes_329181-1769.avif';
import Footer from '../../Components/Footer/Footer';

interface ProductItem {
  name: string;
  price: number;
  image: string;
}

function Home({ setCartCount }: { setCartCount: React.Dispatch<React.SetStateAction<number>> }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);
  const images = [img1, Slide4, LaptopImg, Slide2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const addToCart = (productName: string, price: number, image: string) => {
    setCartCount((prevCount) => prevCount + 1);
    setCartItems((prevItems) => [...prevItems, { name: productName, price, image }]);
    saveItemsToLocalStorage([...cartItems, { name: productName, price, image }]);
   
 
  };

  const saveItemsToLocalStorage = (items: ProductItem[]) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="HeadContent">
        <img className="MainImg" src={images[currentImageIndex]} alt="Shopping" />
      </div>

      <div className="BelowContent">
        <div className="ProductBox">
          <img src={Iphone13} alt="Iphone 13" />
          <div className="ProductDetails">
            <h3>Iphone 13/258gb</h3>
            <h4>Price: 70,000</h4>
            <button className="AddToCartButton" onClick={() => addToCart('Iphone 13', 70000, Iphone13)}>Add to Cart</button>
          </div>
        </div>

        <div className="ProductBox">
          <img src={MacbookAir} alt="Macbook Air" />
          <div className="ProductDetails">
            <h3>Macbook Air/512Gb</h3>
            <h4>Price: $200</h4>
            <button className="AddToCartButton" onClick={() => addToCart('Macbook Air', 200, MacbookAir)}>Add to Cart</button>
          </div>
        </div>

        <div className="ProductBox">
          <img src={Iphone15pro} alt="Iphone 15 Pro" />
          <div className="ProductDetails">
            <h3>Iphone 15 Pro/256gb</h3>
            <h4>Price: 150</h4>
            <button className="AddToCartButton" onClick={() => addToCart('Iphone 15 Pro', 150, Iphone15pro)}>Add to Cart</button>
          </div>
        </div>

        <div className="ProductBox">
          <img src={S22Ultra} alt="Samsung S22 Ultra" />
          <div className="ProductDetails">
            <h3>Samsung S22 Ultra</h3>
            <h4>Price: $100</h4>
            <button className="AddToCartButton" onClick={() => addToCart('Samsung S22 Ultra', 100, S22Ultra)}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
      <div className="CartItems">
        <h2>Cart Items</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} - <img src={item.image} alt={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
