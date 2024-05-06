import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Cart.css';
import DeleteIcon from '@mui/icons-material/Delete';

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
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <Container className="cart-container">
      <div className={`cart-box ${cartItems.length === 0 ? 'empty' : ''}`}>
        <h2>Cart Items</h2>
        <Row>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <div className="cart-item">
                  {/* Product Image */}
                  <div className="product-image-container">
                    <img src={item.image} alt={item.name} />
                  </div>
                  {/* Product Info */}
                  <div className="product-info">
                    <div className="product-header">Product Info</div>
                    <p>{item.name}</p>
                    <p>Price: ${item.price}</p>
                    {/* Delete Icon */}
                    <DeleteIcon
                      data-testid={`DeleteIcon-${index}`}
                      onClick={() => handleRemoveItem(index)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <p>Cart is empty</p>
          )}
        </Row>
        {cartItems.length > 0 && (
          <div className="subtotal-container">
            <h3>Subtotal: ${subtotal}</h3>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
