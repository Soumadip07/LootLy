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

function Products() {
    const [selectedProduct, setSelectedProduct] = useState();
    const categories = {
        0: "Juices",
        1: "Jams",
        2: "Bread",
        3: "Dairy Products",
        4: "Snacks",
        5: "Vegetables",
        6: "Fruits",
    };
    const handleSelect = (event) => {

        setSelectedProduct(categories[event.target.value]);
    }
    // console.log(selectedProduct)
    return (
        <section className='product-section' id='product-section'>
            <div className='container mt-5 flex-column'>
                <div className="filter">
                    <div className="select-container">
                        <select className="form-select" onChange={handleSelect}>
                            {Object.entries(categories).map(([key, value]) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>
                        {/* <span className="material-symbols-outlined dropdown-arrow">
                            arrow_drop_down_circle
                        </span> */}
                    </div>
                </div>

                <div>
                    <h2>Day of the <span>Deal</span></h2>
                    <p>Don’t wait. The time will never be just right.</p>
                </div>
                <div className='product-wrapper '>
                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod1} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>

                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod2} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>

                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod3} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>


                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod4} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>

                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod5} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>


                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod6} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>


                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod7} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>
                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod8} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>
                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod9} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>
                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod10} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>
                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod11} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>
                    <div className='card focus:ring-opacity-50 border border-gray-200 mt-4'>
                        <div className='upper-card'>
                            <img src={prod12} alt='prod-1' />
                        </div>
                        <div className="lower-card">
                            <h3>Black Pepper Spice Pack</h3>
                            <h5>52.00$</h5>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Products
