import React, { useState, useEffect } from 'react';
import './Electronics.css';
import slideImg1 from '../../Components/Assests/electronicsSlide1.webp';
import slideImg2 from '../../Components/Assests/electroncsSlide2.webp';
import slideImg3 from '../../Components/Assests/electronicsSlide3.webp';
import slideImg4 from '../../Components/Assests/electronicsSlide4.jpg';
import iphone13 from '../../Components/Assests/Iphone13.jpeg';
import MacbookAir from '../../Components/Assests/MAcbookAir.jpeg';
import Iphone15 from '../../Components/Assests/Iphone15pro.jpeg';
import Airpods from '../../Components/Assests/Airpods.jpeg';
import Footer from '../../Components/Footer/Footer';

interface ProductItem {
  name: string;
  price: number;
  image: string;
}

export default function Electronics({ setCartCount }: { setCartCount: React.Dispatch<React.SetStateAction<number>> }) {
  const [slideImg, setSlideImg] = useState(1);
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideImg((prevSlide) => (prevSlide % 4) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const addToCart = (productName: string, price: number, image: string) => {
    const newCartItem = { name: productName, price, image };
    const updatedCartItems = [...cartItems, newCartItem];
    setCartItems(updatedCartItems);
    setCartCount((prevCount) => prevCount + 1);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <div className="fullscreen-container">
        <div className="fullscreen-image">
          {slideImg === 1 && <img src={slideImg1} alt="Slide 1" />}
          {slideImg === 2 && <img src={slideImg2} alt="Slide 2" />}
          {slideImg === 3 && <img src={slideImg3} alt="Slide 3" />}
          {slideImg === 4 && <img src={slideImg4} alt="Slide 4" />}
        </div>
      </div>

      <div className='electronicsContainer'>
        <div className="electronicsBox">
          <img src={iphone13} alt="iPhone 13" className="electronicsImage" />
          <div className="productName">iPhone 13</div>
          <div className="productPrice">$999</div>
          <button className="addToCartButton" onClick={() => addToCart('iPhone 13', 999, iphone13)}>Add to Cart</button>
        </div>

        <div className="electronicsBox">
          <img src={MacbookAir} alt="Macbook Air" className="electronicsImage" />
          <div className="productName">Macbook Air</div>
          <div className="productPrice">$1299</div>
          <button className="addToCartButton" onClick={() => addToCart('Macbook Air', 1299, MacbookAir)}>Add to Cart</button>
        </div>

        <div className="electronicsBox">
          <img src={Iphone15} alt="iPhone 15" className="electronicsImage" />
          <div className="productName">iPhone 15</div>
          <div className="productPrice">$1499</div>
          <button className="addToCartButton" onClick={() => addToCart('iPhone 15', 1499, Iphone15)}>Add to Cart</button>
        </div>

        <div className="electronicsBox">
          <img src={Airpods} alt="Airpods" className="electronicsImage" />
          <div className="productName">Airpods</div>
          <div className="productPrice">$199</div>
          <button className="addToCartButton" onClick={() => addToCart('Airpods', 199, Airpods)}>Add to Cart</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
