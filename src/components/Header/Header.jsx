import React from 'react'
import logo from '../../assets/logo.png'
function Header() {
    return (
        <header>
            <div className='header-container'>
                <div className='d-flex'>
                    <a href='#'>
                        <img src={logo} alt='logo' />
                    </a>
                    <form action="">
                        <input type="search" name="" placeholder="search here..." id="search-box" />
                        <label for="search-box" className="fas fa-search"></label>
                    </form>
                </div>
                <div>
                    <a className='btn'>
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                        Cart
                    </a>
                    <a>
                        <span class="material-symbols-outlined">
                            person
                        </span>
                        Login
                    </a>
                </div>

            </div>
        </header>
    )
}

export default Header
