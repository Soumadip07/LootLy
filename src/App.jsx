import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import Home from './components/Home';
import Products from './components/Products/products';
import ProductDetails from './components/Products/ProductDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="products" element={
          <>
            <Header />
            <Products />
            <Footer />
          </>
        } />

        <Route path="products/:id" element={
          <>
            <Header />
            <ProductDetails />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
