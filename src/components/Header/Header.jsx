import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie"; // Import js-cookie
import { logoutUser } from '../slice/AuthSlice';

function Header() {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const authenticationStatus = Cookies.get("isAuthenticated") || isAuthenticated;
    const user = useSelector((state) => state.auth);
    let userRole = user?.user?.roles?.[0]?.name;
    if (!userRole) {
        userRole = Cookies.get("role");
    } useEffect(() => {
        console.log("logout")
    }, [authenticationStatus]);
    const userEmail = useSelector((state) => state.auth.user);
    // console.log("user email", userEmail)
    const logOutHnadler = () => {
        dispatch(logoutUser())
        Cookies.remove("isAuthenticated");
        Cookies.remove("role");
    }
    // console.log(isAuthenticated)
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
                    {/* <Tooltip title="Sell your products" disableInteractive>
                        <Link
                            className='btn focus:ring-opacity-50 border border-gray-200 p-3'
                            to='/cart'
                        >
                            <h5 className='ps-3'>0 Items</h5>
                            <div className='d-flex'>
                                <span class="material-symbols-outlined">
                                    storefront
                                </span>
                                <h3>Seller</h3>
                            </div>
                        </Link>
                    </Tooltip> */}
                    {userRole === "ADMIN_USER" && (
                        <Tooltip title="Admin Pannel" disableInteractive>
                            <Link
                                className='btn focus:ring-opacity-50 border border-gray-200 p-3'
                                to='/admin/overview'
                            >
                                <div className='d-flex'>
                                    <span class="material-symbols-outlined">
                                        supervisor_account
                                    </span>
                                    <h3>Admin</h3>
                                </div>
                            </Link>
                        </Tooltip>
                    )}
                    {userRole === "NORMAL_USER" && (
                        <Tooltip title="Profile" disableInteractive>
                            <Link
                                className='btn focus:ring-opacity-50 border border-gray-200 p-3'
                                to='/user'
                            >
                                <div className='d-flex'>
                                    <span class="material-symbols-outlined">
                                        manage_accounts
                                    </span>
                                    <h3>Profile</h3>
                                </div>
                            </Link>
                        </Tooltip>
                    )}
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
                    {!authenticationStatus && (
                        <>
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
                        </>
                    )}
                    {authenticationStatus && (
                        <Tooltip title="Log Out of your account" disableInteractive>
                            <Link
                                className='btn focus:ring-opacity-50 border border-gray-200 p-3'
                                to='/'
                                onClick={logOutHnadler}
                            >
                                {/* <h5 className='ps-3'>Account</h5> */}
                                <div className='d-flex' >
                                    <span className="material-symbols-outlined pe-2">
                                        person
                                    </span>
                                    <h3>Log Out</h3>
                                </div>
                            </Link>
                        </Tooltip>
                    )}
                </div>

            </div>
        </header >
    )
}

export default Header
