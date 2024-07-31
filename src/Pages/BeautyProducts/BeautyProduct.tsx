import React, { useState, useEffect } from 'react';
import './BeautyProduct.css';
import slideImg1 from '../../Components/Assests/CosmeticSlide1.webp';
import slideImg2 from '../../Components/Assests/CosmeticsSlide2.jpeg';
import slideImg3 from '../../Components/Assests/CosmeticsSlide3.webp';
import slideImg4 from '../../Components/Assests/CosmeticsSlide4.jpeg';
import faceWash1 from '../../Components/Assests/Facewash1.jpeg';
import faceWash2 from '../../Components/Assests/Facewash2.jpeg';
import faceWash3 from '../../Components/Assests/Facewash3.jpeg';
import faceWash4 from '../../Components/Assests/Facewash4.jpeg';
import Footer from '../../Components/Footer/Footer';

interface ProductItem {
  name: string;
  price: number;
  image: string;
}

export default function BeautyProduct({ setCartCount }: { setCartCount: React.Dispatch<React.SetStateAction<number>> }) {
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

      <div className='beautyProductContainer'>
        <div className="beautyProductBox">
          <img src={faceWash1} alt="Face Wash 1" className="productImage" />
          <div className="productName">Face Wash 1</div>
          <div className="productPrice">$10</div>
          <button className="addToCartButton" onClick={() => addToCart('Face Wash 1', 10, faceWash1)}>Add to Cart</button>
        </div>

        <div className="beautyProductBox">
          <img src={faceWash2} alt="Face Wash 2" className="productImage" />
          <div className="productName">Face Wash 2</div>
          <div className="productPrice">$12</div>
          <button className="addToCartButton" onClick={() => addToCart('Face Wash 2', 12, faceWash2)}>Add to Cart</button>
        </div>

        <div className="beautyProductBox">
          <img src={faceWash3} alt="Face Wash 3" className="productImage" />
          <div className="productName">Face Wash 3</div>
          <div className="productPrice">$15</div>
          <button className="addToCartButton" onClick={() => addToCart('Face Wash 3', 15, faceWash3)}>Add to Cart</button>
        </div>

        <div className="beautyProductBox">
          <img src={faceWash4} alt="Face Wash 4" className="productImage" />
          <div className="productName">Face Wash 4</div>
          <div className="productPrice">$18</div>
          <button className="addToCartButton" onClick={() => addToCart('Face Wash 4', 18, faceWash4)}>Add to Cart</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
