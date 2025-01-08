import React, { useState } from 'react'
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

function Products() {
    const [selectedCategory, setSelectedCategory] = useState();
    const categories = {
        0: 'Juices',
        1: 'Jams',
        2: 'Bread',
        3: 'Dairy Products',
        4: 'Snacks',
        5: 'Vegetables',
        6: 'Fruits',
    };
    const products = [
        { id: 1, name: 'Black Pepper Spice Pack', price: '52.00$', image: prod1 },
        { id: 2, name: 'Mixed Fruit Jam', price: '45.00$', image: prod2 },
        { id: 3, name: 'Wheat Bread', price: '30.00$', image: prod3 },
        { id: 4, name: 'Organic Milk', price: '25.00$', image: prod4 },
        { id: 5, name: 'Potato Chips', price: '15.00$', image: prod5 },
        { id: 6, name: 'Fresh Carrots', price: '10.00$', image: prod6 },
        { id: 7, name: 'Seasonal Mangoes', price: '20.00$', image: prod7 },
        { id: 8, name: 'Apple Juice', price: '18.00$', image: prod8 },
        { id: 9, name: 'Strawberry Jam', price: '50.00$', image: prod9 },
        { id: 10, name: 'Garlic Bread', price: '28.00$', image: prod10 },
        { id: 11, name: 'Cheddar Cheese', price: '35.00$', image: prod11 },
        { id: 12, name: 'Bananas', price: '12.00$', image: prod12 },
    ];

    const handleSelect = (event) => {
        setSelectedCategory(categories[event.target.value]);
    };
    // const handleProductDetails = (id) => {
    //     console.log(id)
    //     navigate(`/product-details/${id}`); // Navigate to the product details page
    // }

    return (
        <section className="product-section" id="product-section">
            <div className="container mt-5 flex-column">
                <div className="filter">
                    <div className="select-container">
                        <select className="form-select" onChange={handleSelect}>
                            <option value="">Select a Category</option>
                            {Object.entries(categories).map(([key, value]) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <h2>
                        Day of the <span>Deal</span>
                    </h2>
                    <p>Don’t wait. The time will never be just right.</p>
                </div>
                <div className="product-wrapper">
                    {products.map((product) => (
                        <NavLink
                            key={product.id}
                            to={`/products/${product.id}`}
                            className="card focus:ring-opacity-50 border border-gray-200 mt-4"
                        >
                            <div className="upper-card">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="lower-card">
                                <h3>{product.name}</h3>
                                <h5>{product.price}</h5>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Products
