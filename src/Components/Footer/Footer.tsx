import './Footer.css';
import { faInstagram, faLinkedin, faSquareGithub, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div className='Logos'>
        <a href="https://www.instagram.com/Sahil_Thakur_9067" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className='icon' />
        </a>
        <a href="https://www.youtube.com/@hpadventures3533" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutubeSquare} className='icon' />
        </a>
        <a href="https://in.linkedin.com/in/sahil-bharti-90022a271" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='icon' />
        </a>
        <a href="https://github.com/Sahil1491" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareGithub} className='icon' />
        </a>
      </div>
      <div className='Footer'>
        <p>© 2024, Shpping-Cart, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer;
