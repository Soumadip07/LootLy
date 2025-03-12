import React, { useEffect, useState } from 'react'
import prod1 from '../../assets/prod1.jpeg'
import prod2 from '../../assets/prod2.jpeg'
import prod3 from '../../assets/prod3.jpeg'
import prod4 from '../../assets/prod4.jpeg'
import prod5 from '../../assets/prod5.jpeg'
import prod6 from '../../assets/prod6.jpeg'
import prod7 from '../../assets/prod7.jpeg'
import prod8 from '../../assets/prod8.jpeg'
import prod9 from '../../assets/prod9.jpeg'
import prod10 from '../../assets/prod10.jpeg'
import prod11 from '../../assets/prod11.jpeg'
import prod12 from '../../assets/prod12.jpeg'
import { Link, NavLink, Route, Routes, } from 'react-router-dom'
import ProductDetails from './ProductDetail'
import { products } from '../../Data/ProductData'
import { categories } from '../../Data/Category'
import { Tooltip } from '@mui/material'
import ProductsApis from '../Services/ProductsService'
import CategoriesApis from '../Services/CategoryService'
import Dropdown from '../../utils/Dropdown'
import toast, { Toaster } from 'react-hot-toast'
import prodPlaceholder from '../../assets/prod2Placeholder.png';

function Products() {
    const [selectedCategory, setSelectedCategory] = useState();
    const [filteredproductdata, setFilteredProductData] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [category, setCategories] = useState();
    const [selectedOption, setSelectedOption] = useState();
    const [open, setOpen] = useState(false)
    const [hasError, setHasError] = useState(false);
    const imageMap = {
        prod1: prod1,
        prod2: prod2,
        prod3: prod3,
        prod4: prod4,
        prod5: prod5,
        prod6: prod6,
        prod7: prod7,
        prod8: prod8,
        prod9: prod9,
        prod10: prod10,
        prod11: prod11,
        prod12: prod12,
    };

    const handleSelect = (event) => {
        setSelectedCategory(categories[event.target.value]);
    };

    const getImage = (imageName) => {
        return imageMap[imageName] || '/images/default-image.jpeg';
    };
    const getData = async (pageNumber, pageSize, sortBy, sortDir) => {
        setError("");
        setHasError(false)
        setLoading(true);
        try {
            // console.log("Payload being sent:", data);
            // toast.loading('Waiting...');
            const response = await ProductsApis.getProducts(pageNumber, pageSize, sortBy, sortDir);
            setData(response)
            // console.log("Response:", response.data);
            // alert("User created successfully!");
        } catch (err) {
            setHasError(true)
            console.error("Error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    const getCategory = async () => {
        try {
            // console.log("Payload being sent:", data);
            setHasError(false)
            const response = await CategoriesApis.getCategories();
            // console.log(response)
            setCategories(response.data)

            // console.log("Response:", response?.data);
            // alert("User created successfully!");
            toast.success('This is success!');

        } catch (err) {
            toast.error('This is an error!');
            setHasError(true)
            console.error("Error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Something went wrong!");
        } finally {
        }
    }
    const handleClearAll = () => {
        setSelectedCategory();
        setFilteredProductData(data?.data?.content);
        document.querySelector('.form-select').value = '';
    }
    useEffect(() => {
        if (!selectedCategory) {
            setFilteredProductData(data?.data?.content);
        } else {
            const filteredData = data?.data?.content?.filter(
                (product) => product.category?.
                    categoryTitle === selectedCategory
            );
            setFilteredProductData(filteredData);
        }
    }, [selectedCategory, data]);
    useEffect(() => {
        if (!data && !hasError)
            getData(0, 10);
    }, [data, hasError])

    useEffect(() => {
        // console.log("Category", category)
        if (!category && !hasError)
            getCategory();
    }, [category, hasError])
    console.log((data?.data?.content?.[0]?.category?.categoryTitle), "check", filteredproductdata)
    return (
        <section className="product-section" id="product-section">
            <div className="container mt-5 flex-column justify-content-start align-items-start">
                <div className="filter pb-3 d-flex gap-3">
                    {category && (
                        <div className="">
                            <Dropdown
                                options={category}
                                onChange={(item) => setSelectedOption(item)}
                                selectedKey={selectedOption}
                                placeholder={"Select Category"}
                                open={open}
                                setOpen={setOpen}
                                keyTitle={"categoryTitle"}
                                idTitle={"categoryId"}
                            />
                        </div>
                    )}
                    {selectedCategory && (
                        <button className='cart-btn d-flex justify-content-center align-items-center gap-2'
                            onClick={handleClearAll}
                        >
                            Reset
                            <span class="material-symbols-outlined">
                                cancel
                            </span>
                        </button>
                    )}
                </div>

                <div>
                    <h2>
                        Day of the <span>Deal</span>
                    </h2>
                    <p>Don’t wait. The time will never be just right.</p>
                </div>
                <div className="product-wrapper">
                    {filteredproductdata?.map((product) => (
                        <div
                            key={product.id}
                            className="card  mt-4 custom-link"
                        >
                            <Tooltip title={product?.stockStatus != "Out of Stock" ? `View ${product.title}` : ""} disableInteractive>
                                <Link
                                    className="upper-card focus:ring-opacity-50"
                                    to={product?.stock > 0 ? `/products/${product.id}` : "#"}
                                >
                                    {product?.imageName != "default.png" ? (
                                        <img
                                            src={`http://localhost:8082/api/products/image/${product?.imageName}`}
                                            alt={product?.title || "Product Image"}
                                            className={product?.stock <= 0 ? "out-of-stock-img" : ""}
                                        />
                                    ) : (
                                        <img
                                            src={prodPlaceholder}
                                            alt={product?.title || "Product Image"}
                                            className={product?.stock <= 0 ? "out-of-stock-img" : ""}
                                        />
                                    )}

                                    {product?.stock <= 0 && (
                                        <div className="out-of-stock-overlay">
                                            <span>Out of Stock</span>
                                        </div>
                                    )}
                                </Link>
                            </Tooltip>
                            <div className="lower-card">
                                <div className='d-flex justify-content-between'>
                                    <div className="stars">
                                        {Array(5)
                                            .fill()
                                            .map((_, index) => (
                                                <i
                                                    key={index}
                                                    className={`fa-star ${index < parseInt(product?.rating ? product?.rating : 1) ? 'fas golden-star' : 'far normal-star'}`}
                                                ></i>
                                            ))}
                                    </div>

                                    <p>{product?.category?.categoryTitle}</p>
                                </div>

                                <h3>{product?.title}</h3>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <h5>${product?.discountedPrice}</h5>
                                        <h6>${product?.base_price}</h6>
                                    </div>
                                    <p>{product?.quantity}</p>
                                </div>

                                <div className='d-flex justify-content-center p-3'>
                                    <Tooltip title="Add this item to your cart" disableInteractive>
                                        <button className={`${product?.stockStatus === "Out of Stock" ? "cartless-btn" : "cart-btn"}`}>
                                            {product?.stockStatus === "Out of Stock" ? "Out of Stock" : "Add to Cart"}
                                        </button>
                                    </Tooltip>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Toaster />
        </section >
    );
}
export default Products
