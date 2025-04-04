import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import CartService from '../Services/CartService';
import { discountedPrice, encryptId, formatUnit } from '../../utils/constFunctions';
import Dropdown from '../../utils/Dropdown';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);
    const [quantity, setQuantity] = useState()
    useEffect(() => {
        const storedUserId = Cookies.get("userId");
        if (storedUserId) {
            setUserId(storedUserId);
            fetchCartItems(storedUserId);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchCartItems = async (userId) => {
        try {
            const response = await CartService.GetCartItemsByUser(userId);
            const updatedCartItems = response.data?.items?.map((item) => ({
                ...item,
                quantity: item.userQuantity,
            }));
            setCartItems(updatedCartItems);
        } catch (error) {
            console.error("Error fetching cart items:", error);
            toast.error("Failed to load cart items.");
        } finally {
            setLoading(false);
        }
    };
    const updateCartQuantity = async (userId, productId, newQuantity) => {
        try {
            await CartService.UpdateCartItem(userId, productId, newQuantity);
            toast.success("Cart updated!");
        } catch (error) {
            console.error("Error updating cart:", error);
            toast.error("Failed to update cart.");
        }
    };
    const handleQuantityCounter = async (type, index, productId, stock) => {
        console.log(productId)
        setCartItems((prevCartItems) => {
            const updatedItems = [...prevCartItems];
            const currentItem = updatedItems[index];

            let newQuantity = currentItem.quantity;
            if (type === "increase") {
                if (currentItem.quantity >= stock) {
                    toast.error(`Stock limit reached! Max: ${stock}`);
                    return prevCartItems;
                }
                newQuantity += 1;
            } else if (type === "decrease" && currentItem.quantity > 1) {
                newQuantity -= 1;
            }

            updatedItems[index] = {
                ...currentItem,
                quantity: newQuantity,
            };

            updateCartQuantity(userId, productId, newQuantity);

            return updatedItems;
        });
    };

    console.log(cartItems)
    return (
        <section className="cart-section">
            <h2>Shopping Cart</h2>
            <div className='card p-5 shadow-sm rounded h-100vh'>
                <div className="table-responsive">

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Counter</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems && cartItems?.map((productItem, index) => (
                                <tr key={index}>
                                    <td>{encryptId(productItem?.productId)}</td>
                                    <td>{productItem?.productName}
                                    </td>
                                    {productItem?.productImage && (
                                        <td>
                                            <img src={`http://localhost:8082/api/products/image/${productItem?.productImage}`} alt="product-image" style={{ width: 100, height: 90, borderRadius: 5 }} />
                                        </td>
                                    )}
                                    <td>${(productItem?.totalPrice)}</td>
                                    <td>{productItem?.stock}</td>
                                    <td>{productItem?.quantity}</td>
                                    <td>
                                        <div className='d-flex gap-3'>
                                            <button className='d-flex justify-content-center align-items-center small-buttons' onClick={() => handleQuantityCounter("increase", index, productItem?.productId, productItem?.stock)}>
                                                <span class="material-symbols-outlined">
                                                    add
                                                </span>
                                            </button>
                                            <p className='my-2'>{productItem?.quantity}</p>
                                            <button className='d-flex justify-content-center align-items-center small-buttons' onClick={() => handleQuantityCounter("decrease", index, productItem?.productId, productItem?.stock)}>
                                                <span class="material-symbols-outlined">
                                                    remove
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Toaster />
        </section>
    )
}

export default Cart
