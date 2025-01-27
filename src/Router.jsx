import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products/products';
import ProductDetails from './components/Products/ProductDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignUp/SignIn';
import LogIn from './components/SignUp/LogIn';
import Cart from './components/Cart/Cart';
import CreateProductForm from './components/Product/CreateProductForm';

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
        path: '/products/:id',
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
]);
