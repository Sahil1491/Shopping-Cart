import React, { useState, useEffect } from 'react';
import './Electronics.css';
import slideImg1 from '../../Components/Assests/electronicsSlide1.webp';
import slideImg2 from '../../Components/Assests/electroncsSlide2.webp';
import slideImg3 from '../../Components/Assests/electronicsSlide3.webp';
import slideImg4 from '../../Components/Assests/electronicsSlide4.jpg';
import iphone13 from '../../Components/Assests/Iphone 13.jpeg';
import MacbookAir from '../../Components/Assests/MAcbookAir.jpeg';
import Iphone15 from '../../Components/Assests/Iphone15pro.jpeg';
import Airpods from '../../Components/Assests/Airpods.jpeg';
import Footer from '../../Components/Footer/Footer';

export default function Electronics() {
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

      <div className='electronicsContainer'>
        <div className="electronicsBox">
          <img src={iphone13} alt="iPhone 13" className="electronicsImage" />
          <div className="productName">iPhone 13</div>
          <div className="productPrice">$999</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="electronicsBox">
          <img src={MacbookAir} alt="Macbook Air" className="electronicsImage" />
          <div className="productName">Macbook Air</div>
          <div className="productPrice">$1299</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="electronicsBox">
          <img src={Iphone15} alt="iPhone 15" className="electronicsImage" />
          <div className="productName">iPhone 15</div>
          <div className="productPrice">$1499</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="electronicsBox">
          <img src={Airpods} alt="Airpods" className="electronicsImage" />
          <div className="productName">Airpods</div>
          <div className="productPrice">$199</div>
          <button className="addToCartButton">Add to Cart</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
