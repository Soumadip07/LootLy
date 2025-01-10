import React from 'react';
import heroOne from '../../assets/hero1.png';
import heroTwo from '../../assets/hero2.png';
import heroThree from '../../assets/hero3.png';
import { Link } from 'react-router-dom';

function Hero() {
    React.useEffect(() => {
        new Swiper(".hero-slider", {
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
            },
        });
    }, []);

    return (
        <div className='container'>
            <div className="swiper hero-slider focus:ring-opacity-50 border border-gray-200 mt-4">
                <div className="swiper-wrapper ">
                    <div className="swiper-slide">
                        <div className="box">
                            <div className="content">
                                <span>Flate Sale 20% Off</span>
                                <h3 className='pt-3'>New Year Eve Discount</h3>
                                <p className='pt-2'>Get Discount in your most favourite brands and products</p>
                                <span className='mt-3'>Use code: <b>BERRY</b> for 20% OFF</span>
                                <div>
                                    <Link to="/products" className="btn mt-5">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <img src={heroOne} alt="hero-1" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box third">
                            <div className="content">
                                <span>Flash Sale 15% off</span>
                                <h3 className='pt-3'>Ongoing Flash Sale</h3>
                                <p className='pt-2'>Get the best we can offer for you in this season</p>
                                <span className='mt-3'>Use code: <b>BERRY</b> for 15% OFF</span>
                                <div>
                                    <Link to="/products" className="btn mt-5">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <img src={heroTwo} alt="hero-2" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box third">
                            <div className="content">
                                <span>Flash Sale 35% off</span>
                                <h3 className='pt-3'>New Year Eve offer</h3>
                                <p className='pt-2'>Get discount in your most favorite brands and products.</p>
                                <span className='mt-3'>Use code: <b>NEW_YEAR</b> for 35% OFF</span>
                                <div>
                                    <Link to="/products" className="btn mt-5">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <img src={heroThree} alt="hero-3" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="custom-prev">
                    <span className="material-icons">arrow_back</span>
                </button>
                <button className="custom-next">
                    <span className="material-icons">arrow_forward</span>
                </button>
            </div>
        </div>
    );
}

export default Hero;
