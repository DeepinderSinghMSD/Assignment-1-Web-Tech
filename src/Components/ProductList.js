import React from 'react';
import Product from './Product';
import { Container, Row, Col } from 'react-bootstrap';

const ProductList = ({ products, addToCart }) => {
  return (
    <Container>
      <Row>
        {products.slice(0, 3).map((product) => (
          <Col key={product.id} md={4} className="d-flex">
            <Product product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
      <Row>
        {products.slice(3, 5).map((product) => (
          <Col key={product.id} md={6} className="d-flex">
            <Product product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
