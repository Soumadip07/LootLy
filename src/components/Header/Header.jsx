import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'
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
                    <Tooltip title="View your shopping cart" disableInteractive>
                        <Link
                            className='btn focus:ring-opacity-50 border border-gray-200 p-3'
                            to='/cart'
                        >
                            {/* <h5 className='ps-3'>0 Items</h5> */}
                            <div className='d-flex'>
                                <span className="material-symbols-outlined pe-2">
                                    shopping_cart
                                </span>
                                <h3>Cart</h3>
                            </div>
                        </Link>
                    </Tooltip>

                    <Tooltip title="Sign Up to your account" disableInteractive>
                        <Link
                            className='btn focus:ring-opacity-50 border border-gray-200 p-3'
                            to='/sign-up'
                        >
                            {/* <h5 className='ps-3'>Account</h5> */}
                            <div className='d-flex'>
                                <span className="material-symbols-outlined pe-2">
                                    person
                                </span>
                                <h3>Sign Up</h3>
                            </div>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Log In to your account" disableInteractive>
                        <Link
                            className='btn focus:ring-opacity-50 border border-gray-200 p-3'
                            to='/log-in'
                        >
                            {/* <h5 className='ps-3'>Account</h5> */}
                            <div className='d-flex'>
                                <span className="material-symbols-outlined pe-2">
                                    person
                                </span>
                                <h3>Log In</h3>
                            </div>
                        </Link>
                    </Tooltip>
                </div>

            </div>
        </header >
    )
}

export default Header
