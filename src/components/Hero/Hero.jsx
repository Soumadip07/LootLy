import React from 'react';
import heroOne from '../../assets/hero1.png';
import heroTwo from '../../assets/hero2.png';
import heroThree from '../../assets/hero3.png';

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
                                <span>never stop</span>
                                <h3>exploring</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit molestias ratione omnis
                                    debitis illo alias commodi quibusdam iusto at quaerat.</p>
                                <a href="#" className="btn">
                                    get started
                                </a>
                            </div>
                            <div>
                                <img src={heroOne} alt="hero-1" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box third">
                            <div className="content">
                                <span>explore the</span>
                                <h3>new world</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit molestias ratione omnis
                                    debitis illo alias commodi quibusdam iusto at quaerat.</p>
                                <a href="#" className="btn">
                                    get started
                                </a>
                            </div>
                            <div>
                                <img src={heroTwo} alt="hero-2" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box third">
                            <div className="content">
                                <span>explore the</span>
                                <h3>new world</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit molestias ratione omnis
                                    debitis illo alias commodi quibusdam iusto at quaerat.</p>
                                <a href="#" className="btn">
                                    get started
                                </a>
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
