import React, { useState, useEffect } from 'react';
import './Fashion.css';
import slideImg1 from '../../Components/Assests/fashionSlide1.jpeg';
import slideImg2 from '../../Components/Assests/fashionSlide2.jpeg';
import slideImg3 from '../../Components/Assests/fashionSlide3.webp';
import slideImg4 from '../../Components/Assests/fashionSlide4.jpeg';
import tshirt1 from '../../Components/Assests/tshirt1.webp';
import tshirt2 from '../../Components/Assests/tshirt2.jpeg';
import tshirt3 from '../../Components/Assests/tshirt3.webp';
import watch1 from '../../Components/Assests/watch1.jpeg';
import watch2 from '../../Components/Assests/watch3.jpeg';
import watch3 from '../../Components/Assests/watch3.webp';
import Footer from '../../Components/Footer/Footer';

export default function Fashion() {
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

      <div className='belowContainer'>
        <div className="tshirtBox">
          <img src={tshirt1} alt="Tshirt 1" className="tshirtImage" />
          <div className="productName">Tshirt 1</div>
          <div className="productPrice">$25</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="tshirtBox">
          <img src={tshirt2} alt="Tshirt 2" className="tshirtImage" />
          <div className="productName">Tshirt 2</div>
          <div className="productPrice">$30</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="tshirtBox">
          <img src={tshirt3} alt="Tshirt 3" className="tshirtImage" />
          <div className="productName">Tshirt 3</div>
          <div className="productPrice">$20</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>
      </div>

      <div className='watchContainer'>
        <div className="watchBox">
          <img src={watch1} alt="Watch 1" className="watchImage" />
          <div className="productName">Watch 1</div>
          <div className="productPrice">$100</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="watchBox">
          <img src={watch2} alt="Watch 2" className="watchImage" />
          <div className="productName">Watch 2</div>
          <div className="productPrice">$150</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="watchBox">
          <img src={watch3} alt="Watch 3" className="watchImage" />
          <div className="productName">Watch 3</div>
          <div className="productPrice">$120</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
