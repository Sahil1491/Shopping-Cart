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

export default function BeautyProduct() {
  const [slideImg, setSlideImg] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideImg((prevSlide) => (prevSlide % 4) + 1); // Cycle through slides 1 to 4
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <div className="fullscreen-container">
        <div className="fullscreen-image">
          {/* Use slideImg variable to dynamically change the image */}
          {slideImg === 1 && <img src={slideImg1} alt="" />}
          {slideImg === 2 && <img src={slideImg2} alt="" />}
          {slideImg === 3 && <img src={slideImg3} alt="" />}
          {slideImg === 4 && <img src={slideImg4} alt="" />}
        </div>
      </div>

      <div className='beautyProductContainer'>
        <div className="beautyProductBox">
          <img src={faceWash1} alt="Face Wash 1" className="productImage" />
          <div className="productName">Face Wash 1</div>
          <div className="productPrice">$10</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="beautyProductBox">
          <img src={faceWash2} alt="Face Wash 2" className="productImage" />
          <div className="productName">Face Wash 2</div>
          <div className="productPrice">$12</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="beautyProductBox">
          <img src={faceWash3} alt="Face Wash 3" className="productImage" />
          <div className="productName">Face Wash 3</div>
          <div className="productPrice">$15</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="beautyProductBox">
          <img src={faceWash4} alt="Face Wash 4" className="productImage" />
          <div className="productName">Face Wash 4</div>
          <div className="productPrice">$18</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
