import React, { useState, useEffect } from 'react';
import './Cart.css';
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon from Material-UI

interface CartItem {
  name: string;
  price: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    // Retrieve cart items from local storage on initial render
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    // Calculate subtotal whenever cart items change
    const calculatedSubtotal = cartItems.reduce((total, item) => total + item.price, 0);
    setSubtotal(calculatedSubtotal);
  }, [cartItems]);

  const handleRemoveItem = (indexToRemove: number) => {
    const updatedCartItems = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCartItems);
    // Update localStorage if needed
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="cart-container">
      {/* Cart items box */}
      <div className={`cart-box ${cartItems.length === 0 ? 'empty' : ''}`}>
        <h2>Cart Items</h2>
        <div className="cart-items">
          {/* Conditionally render cart items or "Cart is empty" message */}
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                {/* Product Image */}
                <div className="product-image-container">
                  <img src={item.image} alt={item.name} />
                </div>
                {/* Product Info */}
                <div className="item-info">
                  <div className="product-header">Product Info</div>
                  <p>{item.name}</p>
                  <p>Price: ${item.price}</p>
                </div>
                {/* Delete Icon */}
                <DeleteIcon
                  data-testid={`DeleteIcon-${index}`} // Unique test id for testing purposes
                  onClick={() => handleRemoveItem(index)} // Call handleRemoveItem with index on click
                  style={{ cursor: 'pointer', marginLeft: 'auto' }} // Add cursor and margin for styling
                />
              </div>
            ))
          ) : (
            <p>Cart is empty</p>
          )}
        </div>
        {/* Conditionally render subtotal if cart is not empty */}
        {cartItems.length > 0 && (
          <div className="subtotal-container">
            <h3>Subtotal: ${subtotal}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
