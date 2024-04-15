import './Electronics.css'
import slideImg1 from '../../Components/Assests/electronicsSlide1.webp';
import slideImg2 from '../../Components/Assests/electroncsSlide2.webp';
import slideImg3 from '../../Components/Assests/electronicsSlide3.webp';
import slideImg4 from '../../Components/Assests/electronicsSlide4.jpg';
import { useEffect, useState } from 'react';


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
    
    </>
  )
}
