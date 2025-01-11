import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header>
            <div className='header-container conatiner 
            focus:ring-opacity-50 border border-gray-200'>
                <div className='d-flex me-4 gap-3'>
                    <a href='/'>
                        <img src={logo} alt='logo' />
                    </a>
                </div>
                <div className="searchbox">
                    <form action="" className="search-form">
                        <input
                            type="search"
                            name=""
                            placeholder="Search for Products"
                            id="search-box"
                            className="search-input focus:ring-opacity-50 border border-gray-200"
                        />
                        <label htmlFor="search-box" className="search-icon">
                            <i className="fas fa-search"></i>
                        </label>
                    </form>
                </div>


                <div className='d-flex  gap-3 user-section ms-3'>
                    <Link className='btn focus:ring-opacity-50 border border-gray-200 p-3'>
                        {/* <h5 className='ps-3'>0 Items</h5> */}
                        <div className='d-flex'>
                            <span className="material-symbols-outlined pe-2">
                                shopping_cart
                            </span>
                            <h3>Cart</h3>
                        </div>
                    </Link>
                    <Link className='btn focus:ring-opacity-50 border border-gray-200 p-3'>
                        {/* <h5 className='ps-3'>Account</h5> */}
                        <div className='d-flex'>
                            <span className="material-symbols-outlined pe-2">
                                person
                            </span>
                            <h3>Login</h3>
                        </div>
                    </Link>
                </div>

            </div>
        </header >
    )
}

export default Header
