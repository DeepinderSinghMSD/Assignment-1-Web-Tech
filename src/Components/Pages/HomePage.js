import React from 'react';
import ProductList from '../components/ProductList';
import products from '../data';
import '../App.css'; 

const HomePage = ({ addToCart }) => {
  return (
    <div>
      <h1 className="text-center my-4">Collection</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
