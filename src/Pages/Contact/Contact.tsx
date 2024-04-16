import './Contact.css'
import Footer from '../../Components/Footer/Footer';
import sideImg1 from '../../Components/Assests/SideImg1.webp';
import sideImg2 from '../../Components/Assests/SideImg2.webp';

export default function Constact() {
  return (
    <>
      <div className='outerImgContainer'>
        <div className='Imgcontainer'>

        </div>
      </div>
      <h1>Hi! I am Sahil Bharti</h1>
      <div className='lowerPart'>
        <p>
          "Hi, I'm Sahil Bharti from Hamirpur, Himachal Pradesh. I have completed my B.Tech in Computer Science from CGC Landran, Mohali. I built this website as part of my learning journey in React at Meritech Pvt Ltd. Passionate about web development, I'm eager to create engaging and innovative digital experiences."
        </p>
       
     </div>
     
      {/* New div with image and content */}
      <div className="ImageWithContent">
        <div className="ImageContainer">
          <img src={sideImg1} alt="Description" />
        </div>
        <div className="ContentContainer">
          <p>
            "Shopping Cart is an exceptional ecommerce platform, renowned for its top-notch service and customer satisfaction. It excels in providing a seamless shopping experience, offering a wide range of products, secure transactions, and prompt delivery. Its user-friendly interface and responsive support make it the preferred choice for online shoppers worldwide."</p>
        </div>
      </div>

      <div className="ImageWithContent">
        <div className="ImageContainer">
          <img src={sideImg2} alt="Description" />
        </div>
        <div className="ContentContainer">

         <p> "Shopping Cart, founded in 2024 by Sahil, revolutionizes online shopping through its innovative use of React.js. This cutting-edge platform offers seamless navigation, real-time updates, and personalized experiences. Its robust architecture ensures secure transactions and efficient order management, making it a preferred choice for modern e-commerce solutions."</p>

        </div>
      </div>
     <Footer/>
    </>
  )
}
