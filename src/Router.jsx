import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Products from './components/Products/products.jsx';
import ProductDetails from './components/Products/ProductDetail.jsx';
import Home from './components/Home.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'products',
                element: <Products />,
                children: [
                    {
                        path: ':id', // Nested dynamic route for product details
                        element: <ProductDetails />,
                    },
                ],
            },
        ],
    },
]);

export default router;
