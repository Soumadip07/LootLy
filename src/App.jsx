import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import Home from './components/Home';
import Products from './components/Products/products';
import ProductDetails from './components/Products/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Products route */}
        <Route path="products" element={<Products />} />

        {/* Product details route */}
        <Route path="products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
