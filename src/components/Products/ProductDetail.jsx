import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../Data/ProductData';
import prod1 from '../../assets/prod1.jpeg';
import prod2 from '../../assets/prod2.jpeg';
import prod3 from '../../assets/prod3.jpeg';
import prod4 from '../../assets/prod4.jpeg';
import prod5 from '../../assets/prod5.jpeg';
import prod6 from '../../assets/prod6.jpeg';
import prod7 from '../../assets/prod7.jpeg';
import prod8 from '../../assets/prod8.jpeg';
import prod9 from '../../assets/prod9.jpeg';
import prod10 from '../../assets/prod10.jpeg';
import prod11 from '../../assets/prod11.jpeg';
import prod12 from '../../assets/prod12.jpeg';
import Faq from '../Faq';
import DeliveryPolicy from '../DeliveryPolicy';
import Reviews from '../Reviews';

function ProductDetails() {
    const { id } = useParams();

    const imageMap = {
        prod1: prod1,
        prod2: prod2,
        prod3: prod3,
        prod4: prod4,
        prod5: prod5,
        prod6: prod6,
        prod7: prod7,
        prod8: prod8,
        prod9: prod9,
        prod10: prod10,
        prod11: prod11,
        prod12: prod12,
    };

    const filteredProductData = products.find((product) => product.id === parseInt(id));

    const getImage = (imageName) => {
        return imageMap[imageName] || '/images/default-image.jpeg';
    };

    console.log(filteredProductData)

    return (
        <section className="product-details">
            <div className="d-flex justify-content-center flex-column flex-lg-row pt-5 gap-5">
                <div className=''>
                    <img src={getImage(filteredProductData?.image)} alt={filteredProductData?.name} />
                </div>
                <div className='product-info'>
                    <h2>{filteredProductData?.name}</h2>
                    <div className="stars">
                        {Array(5)
                            .fill()
                            .map((_, index) => (
                                <i
                                    key={index}
                                    className={`fa-star ${index < parseInt(filteredProductData?.rating ? filteredProductData?.rating : 1) ? 'fas golden-star' : 'far normal-star'}`}
                                ></i>
                            ))}

                        ({filteredProductData?.reviews.length} reviews)
                    </div>

                    <div className='d-flex justify-content-between py-3'>
                        <div className='d-flex'>
                            <h5>${filteredProductData?.discountedPrice}</h5>
                            <h6>${filteredProductData?.marketPrice}</h6>
                        </div>
                        <p>{filteredProductData?.quantity}</p>
                    </div>

                    <div className='stock-status my-3'>
                        {filteredProductData?.stockStatus}
                    </div>
                    <p>{filteredProductData?.description}</p>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet inventore dolorum molestiae ex amet, debitis eos magni rem laudantium id qui iusto, reiciendis vitae modi corporis enim ipsam cum a soluta quidem quia ipsum. Cum facilis obcaecati sed est! Harum minus nihil facilis voluptate cumque neque eius temporibus, vitae illo, cupiditate fugit a aliquam sit amet itaque. Provident asperiores animi dolorum non. Quisquam facilis earum ullam excepturi itaque voluptas pariatur possimus amet ab architecto molestiae, quasi rem voluptatem totam debitis maiores consequuntur harum libero commodi qui a ducimus ut. Cupiditate inventore itaque repudiandae odit nihil voluptates, modi iste ipsum.</p> */}
                    {/* <div>
                        Quantity
                        <button>
                            <span class="material-symbols-outlined">
                                add
                            </span>
                        </button>
                        <button>
                            <span class="material-symbols-outlined">
                                remove
                            </span>
                        </button>

                    </div> */}
                    {/* <div>
                        Sub Total
                        <h5>25.00$</h5>
                    </div> */}

                    <div className='d-flex  p-3 gap-4 py-4'>
                        <button className='cart-btn'>Add to Cart</button>
                        <button className='cart-btn'>Buy</button>
                    </div>

                    <div className='d-flex gap-4 justify-content-center flex-wrap py-5'>
                        <div className='d-flex gap-2 justify-content-center align-items-center'
                            onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span class="material-symbols-outlined" id='faq'>
                                help
                            </span>
                            FAQ
                        </div>
                        <div className='d-flex gap-2 justify-content-center align-items-center'
                            onClick={() => document.getElementById('delivery').scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span class="material-symbols-outlined">
                                local_shipping
                            </span>
                            Delivery & Return Policy
                        </div>
                        <div className='d-flex gap-2 justify-content-center align-items-center'
                            onClick={() => document.getElementById('user-reviews').scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span class="material-symbols-outlined">
                                reviews
                            </span>
                            User Reviews
                        </div>
                        <div className='d-flex gap-2 justify-content-center align-items-center'>
                            <span className="material-symbols-outlined">
                                share
                            </span>
                            <a href="https://web.whatsapp.com/send?text=www.google.com" data-action="share/whatsapp/share" target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-share-btn">
                                Share via Whatsapp </a>
                        </div>

                    </div>


                    <div className='d-flex justify-content-center gap-4 py-4 product-info-footer'>
                        <div className='focus:ring-opacity-50 border border-gray-200 ad-btn d-flex flex-column justify-content-center align-items-center'>
                            <h4>Free Shipping</h4>
                            <p>Free Shipping on order above 120$</p>
                        </div>
                        <div className='focus:ring-opacity-50 border border-gray-200 ad-btn d-flex flex-column justify-content-center align-items-center'>
                            <h4>Flexible Payment</h4>
                            <p>Free Shipping on order above 120$</p>
                        </div>
                    </div>


                    <div id='faq'>
                        <Faq />
                    </div>
                    <div id='delivery'>
                        <DeliveryPolicy />
                    </div>
                    <div id='user-reviews'>
                        <Reviews />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default ProductDetails;
