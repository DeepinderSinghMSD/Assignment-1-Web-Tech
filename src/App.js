import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './Components/Navbar';
import HomePage from './pages/HomePage';
import CartP from './pages/CartP';  
import AccountPage from './pages/AccountPage';
import productsData from './data';
import './App.css'; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    province: '',
    creditCard: ''
  });

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
  };

  const updateCart = (product, quantity) => {
    if (quantity <= 0) {
      removeFromCart(product);
    } else {
      setCartItems(cartItems.map((item) =>
        item.product.id === product.id ? { ...item, quantity } : item
      ));
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.product.id !== product.id));
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/cart" element={
          <CartP
            cartItems={cartItems}
            updateCart={updateCart}
            removeFromCart={removeFromCart}
          />
        } />
        <Route path="/account" element={
          <AccountPage user={user} updateUser={updateUser} />
        } />
      </Routes>
    </Router>
  );
};

export default App;
