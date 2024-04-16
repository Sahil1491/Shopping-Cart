import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Contact.css'
import { faInstagram, faYoutubeSquare,faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from '../../Components/Footer/Footer';

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
     <Footer/>
    </>
  )
}
