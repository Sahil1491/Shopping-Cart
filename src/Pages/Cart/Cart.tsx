import React, { useState } from 'react';
import './Cart.css';

interface CartItem {
  name: string;
  price: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="cart-container">
      {/* Cart items box */}
      <div className={`cart-box ${cartItems.length === 0 ? 'empty' : ''}`}>
        <h2>Cart Items</h2>
        <div className="cart-items">
          {/* Conditionally render cart items or "Cart is empty" message */}
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
              ))}
            </ul>
          ) : (
            <p>Cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
