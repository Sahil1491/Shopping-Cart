import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ cartCount }: { cartCount: number }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleCategoryMenu = () => {
    setShowCategoryMenu(!showCategoryMenu);
  };

  const closeMenus = () => {
    setShowMenu(false);
    setShowCategoryMenu(false);
  };

  return (
    <nav>
      <h3>Shopping Cart</h3>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li>
          <div className="dropdown" onMouseEnter={toggleCategoryMenu} onMouseLeave={toggleCategoryMenu}>
            <button className="dropbtn">
              Category
            </button>
            {showCategoryMenu && (
              <div className="dropdown-content">
                <Link to="/Fashion" onClick={closeMenus}>Fashion</Link>
                <Link to="/beauty-Producs" onClick={closeMenus}>Beauty Products</Link>
                <Link to="/electronics" onClick={closeMenus}>Electronics</Link>
              </div>
            )}
          </div>
        </li>
        <li><Link to="/Contact">About-Us</Link></li>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /> {cartCount}</Link></li>
        <li>
          <div className="dropdown" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
            <button className="dropbtn">
              <FontAwesomeIcon icon={faEllipsisV} />
            </button>
            {showMenu && (
              <div className="dropdown-content">
                <Link to="/customer-support" onClick={closeMenus}>Customer Support 24*7</Link>
                <Link to="/notifications" onClick={closeMenus}>Notifications Preference</Link>
                <Link to="/" onClick={closeMenus}>Log Out</Link>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
