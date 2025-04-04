import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../Data/ProductData';
import prod1 from '../../assets/prod1.jpeg';
import prod2 from '../../assets/prod2.jpeg';
import prod3 from '../../assets/prod3.jpeg';
import prod4 from '../../assets/prod4.jpeg';
import prod5 from '../../assets/prod5.jpeg';
import prod6 from '../../assets/prod6.jpeg';
import prod7 from '../../assets/prod7.jpeg';
import prod8 from '../../assets/prod8.jpeg';
import prod9 from '../../assets/prod9.jpeg';
import prod10 from '../../assets/prod10.jpeg';
import prod11 from '../../assets/prod11.jpeg';
import prod12 from '../../assets/prod12.jpeg';
import Faq from '../Faq';
import DeliveryPolicy from '../DeliveryPolicy';
import Reviews from '../Reviews';
import { Tooltip } from '@mui/material';
import ProductsApis from '../Services/ProductsService';
import { discountedPrice, formatUnit } from '../../utils/constFunctions';
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import CartService from '../Services/CartService';

function ProductDetails() {
    const { slug } = useParams();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [data, setData] = useState();

    const [userId, setUserId] = useState(null);

    // const filteredProductData = products.find((product) => product.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const storedUserId = Cookies.get("userId");
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);


    const getData = async (pageNumber, pageSize, sortBy, sortDir) => {
        setError("");
        setHasError(false)
        setLoading(true);
        try {
            // console.log("Payload being sent:", data);

            const response = await ProductsApis.getProductBySlug(slug);
            setData(response?.data)
            console.log("Response:", response.data);
            // alert("User created successfully!");
        } catch (err) {
            setHasError(true)
            console.error("Error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (!data && !hasError)
            getData();
    }, [])
    const handleQuantityCounter = (type) => {
        if (!data?.stock) {
            toast.error("Stock data unavailable!");
            return;
        }

        if (type === "increase") {
            if (quantity >= data?.stock) {
                toast.error(`Stock limit reached! Max: ${data?.stock}`);
                return;
            }
            setQuantity((prevQuantity) => prevQuantity + 1);
        } else if (type === "decrease" && quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };
    const handleAddtoCart = async (productId) => {
        if (!userId) {
            toast.error("User not logged in. Please log in to add items to the cart.");
            return;
        }

        try {
            const response = await CartService.AddtoCart(userId, productId, quantity);
            toast.success("Item added to cart successfully!");
            console.log("Cart Response:", response.data);
        } catch (error) {
            console.error("Error adding to cart:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Failed to add item to cart.");
        }
    };
    console.log(userId)

    return (
        <section className="product-details">
            <div className="d-flex justify-content-center flex-column flex-lg-row pt-5 gap-5">
                <div className=''>
                    <img src={`http://localhost:8082/api/products/image/${data?.imageName}`} alt={data?.title} />
                </div>
                <div className='product-info'>
                    <h2>{data?.title}</h2>
                    {/* <div className="stars">
                        {Array(5)
                            .fill()
                            .map((_, index) => (
                                <i
                                    key={index}
                                    className={`fa-star ${index < parseInt(filteredProductData?.rating ? filteredProductData?.rating : 1) ? 'fas golden-star' : 'far normal-star'}`}
                                ></i>
                            ))}

                        ({filteredProductData?.reviews.length} reviews)
                    </div> */}

                    <div className='d-flex justify-content-between py-3'>
                        <div className='d-flex'>
                            <h5>${discountedPrice(data?.base_price, data?.discount)}</h5>
                            <h6>${data?.base_price}</h6>
                        </div>
                        <p>{formatUnit(data?.quantity)}</p>
                    </div>

                    <div className='stock-status my-3'>
                        <Tooltip title="Stock" disableInteractive>
                            {data?.stock}
                        </Tooltip>
                    </div>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: data?.content || "",
                        }}
                    />

                    <div className='d-flex gap-2'>
                        Quantity
                        <button className='d-flex justify-content-center align-items-center small-buttons' onClick={() => handleQuantityCounter("increase")}>
                            <span class="material-symbols-outlined">
                                add
                            </span>
                        </button>
                        <button className='d-flex justify-content-center align-items-center small-buttons' onClick={() => handleQuantityCounter("decrease")}>
                            <span class="material-symbols-outlined">
                                remove
                            </span>
                        </button>

                    </div>
                    <div className='quantity'>
                        {quantity}
                    </div>
                    <div className='d-flex gap-2  align-items-center'>
                        <p className='mt-3'>Sub Total</p>
                        <div className='small-buttons'>${quantity * discountedPrice(data?.base_price, data?.discount)}</div>
                    </div>

                    <div className='d-flex  p-3 gap-4 py-5'>
                        <Tooltip title="Add this item to your cart" disableInteractive>
                            <button className='cart-btn' onClick={() => handleAddtoCart(data?.productId)}>Add to Cart</button>
                        </Tooltip>
                        <Tooltip title="Buy this item" disableInteractive>
                            <button className='cart-btn'>Buy</button>
                        </Tooltip>
                    </div>

                    <div className='d-flex gap-4 justify-content-center flex-wrap py-5'>
                        <div className='d-flex gap-2 justify-content-center align-items-center'
                            onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span class="material-symbols-outlined" id='faq'>
                                help
                            </span>
                            FAQ
                        </div>
                        <div className='d-flex gap-2 justify-content-center align-items-center'
                            onClick={() => document.getElementById('delivery').scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span class="material-symbols-outlined">
                                local_shipping
                            </span>
                            Delivery & Return Policy
                        </div>
                        <div className='d-flex gap-2 justify-content-center align-items-center'
                            onClick={() => document.getElementById('user-reviews').scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span class="material-symbols-outlined">
                                reviews
                            </span>
                            User Reviews
                        </div>
                        <div className='d-flex gap-2 justify-content-center align-items-center'>
                            <span className="material-symbols-outlined">
                                share
                            </span>
                            <a href="https://web.whatsapp.com/send?text=www.google.com" data-action="share/whatsapp/share" target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-share-btn">
                                Share via Whatsapp </a>
                        </div>

                    </div>


                    <div className='d-flex justify-content-center gap-4 py-5 product-info-footer'>
                        <div className='focus:ring-opacity-50 border border-gray-200 ad-btn d-flex flex-column justify-content-center align-items-center'>
                            <h4>Free Shipping</h4>
                            <p>Free Shipping on order above 120$</p>
                        </div>
                        <div className='focus:ring-opacity-50 border border-gray-200 ad-btn d-flex flex-column justify-content-center align-items-center'>
                            <h4>Flexible Payment</h4>
                            <p>Free Shipping on order above 120$</p>
                        </div>
                    </div>


                    <div id='faq'>
                        <Faq />
                    </div>
                    <div id='delivery'>
                        <DeliveryPolicy />
                    </div>
                    <div id='user-reviews'>
                        <Reviews />
                    </div>
                </div>
            </div>
            <Toaster />
        </section >
    );
}

export default ProductDetails;
