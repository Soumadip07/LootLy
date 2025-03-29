import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';

import ProductDetails from './components/Products/ProductDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignUp/SignIn';
import LogIn from './components/SignUp/LogIn';
import Cart from './components/Cart/Cart';
import CreateProductForm from './components/Product/CreateProductForm';
import Dashboard from './components/Admin/Dashboard';
import AdminLayout from './components/Admin/AdminLayout';
import Admin from './components/Admin/Admin';
import SellerDetail from './components/Admin/SellerDetail';
import Sales from './components/Admin/Sales';
import ProductPage from './components/Product/ProductPage';
import UpdateProduct from './components/Product/UpdateProduct';
import Products from './components/Products/products';
import Profile from './components/User/Profile';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/products',
        element: <Products />,
    },
    {
        path: '/products/:slug',
        element: <>
            <Header />
            <ProductDetails />
            <Footer />
        </>,
    },
    {
        path: '/sign-up',
        element: <>
            <Header />
            <SignIn />
            <Footer />
        </>
    },
    {
        path: '/log-in',
        element: <>
            <Header />
            <LogIn />
            <Footer />
        </>
    },
    {
        path: '/cart',
        element: <>
            <Header />
            <Cart />
            <Footer />
        </>
    },
    {
        path: '/product-form',
        element: <>
            <Header />
            <CreateProductForm />
            <Footer />
        </>
    },
    {
        path: '/product-form',
        element: <>
            <Header />
            <CreateProductForm />
            <Footer />
        </>
    },
    {
        path: '/product',
        element: <>
            <Header />
            <ProductPage />
            <Footer />
        </>
    },
    {
        path: '/admin',
        element: <AdminLayout />, // This keeps Header, Sidebar, and Footer fixed
        children: [
            { path: 'overview', element: <Admin /> },
            { path: 'analytics', element: <Dashboard /> },
            { path: 'sales', element: <Sales /> },
            { path: 'seller-details', element: <SellerDetail /> },
            { path: 'product', element: <ProductPage /> },
            {
                path: 'update-product/:slug', element: <>
                    <UpdateProduct type="Update" />
                </>
            },
            {
                path: 'delete-product/:slug', element: <>
                    <UpdateProduct type="Delete" />
                </>
            },
            {
                path: 'product-variant/:id', element: <>
                    <Header />
                    <CreateProductForm type="Product Variant" />
                    <Footer />
                </>
            },
            { path: 'product-form', element: <CreateProductForm /> },
        ],
    },
    {
        path: '/user',
        element: <AdminLayout />, // This keeps Header, Sidebar, and Footer fixed
        children: [
            { path: 'profile', element: <Profile /> },
            { path: 'analytics', element: <Dashboard /> },
            { path: 'sales', element: <Sales /> },

        ],
    },
]);
