import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import '../App.css';

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Card className="card-custom">
      <Card.Img variant="top" src={`images/${product.image}`} className="card-image" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Form.Control
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          className="mb-2"
        />
        <Button variant="custom" onClick={handleAddToCart} className="btn-custom mt-auto">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
