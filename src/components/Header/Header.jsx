import React from 'react'
import logo from '../../assets/logo.png'
function Header() {
    return (
        <header>
            <div className='header-container conatiner focus:ring-opacity-50 border border-gray-200'>
                <div className='d-flex pe-4 gap-3'>
                    <a href='#'>
                        <img src={logo} alt='logo' />
                    </a>
                </div>
                <div className='searchbox'>
                    <form action="">
                        <input type="search" name="" placeholder="Search for Products" id="search-box" className='focus:ring-opacity-50 border border-gray-200' />
                        <label for="search-box" className="fas fa-search"></label>
                    </form>
                </div>
                <div className='d-flex p-3 gap-3 user-section'>
                    <a className='btn focus:ring-opacity-50 border border-gray-200'>
                        <h5 className='ps-3'>0 Items</h5>
                        <div className='d-flex'>
                            <span className="material-symbols-outlined pe-2">
                                shopping_cart
                            </span>
                            <h3>Cart</h3>
                        </div>
                    </a>
                    <a className='btn focus:ring-opacity-50 border border-gray-200 '>
                        <h5 className='ps-3'>Account</h5>
                        <div className='d-flex'>
                            <span className="material-symbols-outlined pe-2">
                                person
                            </span>
                            <h3>Login</h3>
                        </div>
                    </a>
                </div>

            </div>
        </header>
    )
}

export default Header
