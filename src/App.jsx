import React from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom'; // Import Router, Routes, and Route
import Home from './components/Home';
import Products from './components/Products/products';
import ProductDetails from './components/Products/ProductDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { router } from './Router';
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
