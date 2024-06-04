import React from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import '../App.css'; 

const CartP = ({ cartItems, updateCart, removeFromCart }) => {
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  const finalizePurchase = () => {
    cartItems.length = 0; // Clear cart
    setPurchaseConfirmed(true);
  };

  return (
    <Container className="container-custom my-4">
      <h2 className="my-4">Your Cart</h2>
      {purchaseConfirmed && <Alert variant="success">Successfully Purchased</Alert>}
      <Table striped bordered hover className="table-custom">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="secondary" onClick={() => updateCart(item.product, item.quantity + 1)}>+</Button>
                <Button variant="secondary" onClick={() => updateCart(item.product, item.quantity - 1)} disabled={item.quantity === 1}>-</Button>
                <Button variant="danger" onClick={() => removeFromCart(item.product)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="success" className="mt-4 btn-custom" onClick={finalizePurchase}>Confirm Purchase</Button>
    </Container>
  );
};

export default CartP;
