import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Cart.css';
import DeleteIcon from '@mui/icons-material/Delete';

interface CartItem {
  name: string;
  price: number;
  image: string;
}

const Cart = ({ setCartCount }: { setCartCount: React.Dispatch<React.SetStateAction<number>> }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    const calculatedSubtotal = cartItems.reduce((total, item) => total + item.price, 0);
    setSubtotal(calculatedSubtotal);
  }, [cartItems]);

  const handleRemoveItem = (indexToRemove: number) => {
    const updatedCartItems = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setCartCount(updatedCartItems.length); // Update cart count
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
                  <div className="product-image-container">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="product-info">
                    <div className="product-header">Product Info</div>
                    <p>{item.name}</p>
                    <p>Price: ${item.price}</p>
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
