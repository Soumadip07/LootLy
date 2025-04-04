import React, { useEffect, useState } from 'react';
import heroOne from '../../assets/hero1.png';
import heroTwo from '../../assets/hero2.png';
import heroThree from '../../assets/hero3.png';
import { Link } from 'react-router-dom';
import TopBannerService from '../Services/TopBannerService';

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
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const getData = async (id) => {
        setError("");
        setLoading(true);
        try {
            // console.log("Payload being sent:", data);

            const response = await TopBannerService.getAllBanner();
            setData(response?.data)
            // console.log("Response:", response.data);
            // alert("User created successfully!");
        } catch (err) {
            console.error("Error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (!data)
            getData();
    }, [])

    return (
        <section className='hero-container container'>
            <div className="swiper hero-slider focus:ring-opacity-50 border border-gray-200 mt-4">
                <div className="swiper-wrapper ">
                    {data && data.map((banner, index) => (
                        <div className="swiper-slide" key={index}>
                            <div className="box">
                                <div className="content">
                                    <span className="mt-3">{banner.offer_sale_text}</span>
                                    <div className="pt-3" dangerouslySetInnerHTML={{ __html: banner.offer_text }}></div>
                                    <p className="pt-2">{banner.offer_desc_text}</p>
                                    <span className="mt-3"
                                        dangerouslySetInnerHTML={{ __html: banner.offer_code_text }}>
                                    </span>
                                    <div>
                                        <Link to={banner?.imageUrl ? banner?.imageUrl : "/products"} className="btn mt-4">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={`http://localhost:8082/api/top-banner/${banner?.imageName}`}
                                        alt={`hero-${index + 1}`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="custom-prev">
                    <span className="material-icons">arrow_back</span>
                </button>
                <button className="custom-next">
                    <span className="material-icons">arrow_forward</span>
                </button>
            </div>
        </section>
    );
}

export default Hero;
