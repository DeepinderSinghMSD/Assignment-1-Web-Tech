import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../App.css'

function Account({ user, updateUser }) {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert('Info Updated');
  };

  return (
    <Container className="container-custom my-4">
      <h2 className="text-center mb-4">Account Information</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="XXXX@gmail.com"
            value={formData.email}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formAddress" className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formCity" className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="Enter your City"
            value={formData.city}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formProvince" className="mb-3">
          <Form.Label>Province</Form.Label>
          <Form.Control
            type="text"
            name="province"
            placeholder="Enter your Province"
            value={formData.province}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formCreditCard" className="mb-3">
          <Form.Label>Credit Card</Form.Label>
          <Form.Control
            type="text"
            name="creditCard"
            placeholder="Enter your card number"
            value={formData.creditCard}
            onChange={handleChange} />
        </Form.Group>
        <Button variant="custom" type="submit" className="btn-custom">
          Update Details
        </Button>
      </Form>
    </Container>
  );
}

export default Account;
