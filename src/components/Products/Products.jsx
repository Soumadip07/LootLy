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

function Products() {
    const [selectedCategory, setSelectedCategory] = useState();
    const [filteredproductdata, setFilteredProductData] = useState(products);

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
    const handleClearAll = () => {
        setSelectedCategory();
        setFilteredProductData(products);
        document.querySelector('.form-select').value = '';
    }
    useEffect(() => {
        if (!selectedCategory) {
            setFilteredProductData(products);
        } else {
            const filteredData = products.filter(
                (product) => product.category === selectedCategory
            );
            setFilteredProductData(filteredData);
        }
    }, [selectedCategory]);


    // console.log(selectedCategory, "check", products)
    return (
        <section className="product-section" id="product-section">
            <div className="container mt-5 flex-column justify-content-start align-items-start">
                <div className="filter pb-3 d-flex gap-3">
                    <div className="">
                        <select className="form-select" onChange={handleSelect}>
                            <option value="">Filter by Category</option>
                            {Object.entries(categories).map(([key, value]) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
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
                            <Tooltip title={product?.stockStatus != "Out of Stock" ? `View ${product.name}` : ""} disableInteractive>
                                <Link className="upper-card focus:ring-opacity-50 border border-gray-200" to={product?.stockStatus != "Out of Stock" ? `/products/${product.id}` : "#"}>
                                    {/* <h6>{product?.tag}</h6> */}
                                    <img src={getImage(product?.image)} className={`${product?.stockStatus === "Out of Stock" ? "out-of-stock-img" : ""}`} alt={product.name} />
                                    {product?.stockStatus === "Out of Stock" && (
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

                                    <p>{product?.category}</p>
                                </div>

                                <h3>{product.name}</h3>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <h5>${product?.discountedPrice}</h5>
                                        <h6>${product?.marketPrice}</h6>
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
        </section >
    );
}
export default Products
