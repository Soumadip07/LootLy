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
            <div className='container gap-5'>
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam pariatur, eos ipsam aut mollitia autem est, accusamus, doloremque asperiores accusantium quaerat illum deleniti doloribus laudantium iste neque voluptatum eum error! Qui delectus soluta tenetur asperiores consequatur earum nisi molestiae similique laborum omnis eaque ex explicabo ullam possimus, illo amet.</p>
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

                    <div className='d-flex justify-content-center p-3 gap-4 py-4'>
                        <button className='cart-btn'>Add to Cart</button>
                        <button className='cart-btn'>Buy</button>
                    </div>

                    <div className='d-flex gap-4 justify-content-center py-4'>
                        <div className='d-flex gap-2 justify-content-center align-items-center'>
                            <span class="material-symbols-outlined">
                                help
                            </span>
                            FAQ
                        </div>
                        <div className='d-flex gap-2 justify-content-center align-items-center'>
                            <span class="material-symbols-outlined">
                                local_shipping
                            </span>
                            Delivery & Return Policy
                        </div>
                        <div className='d-flex gap-2 justify-content-center align-items-center'>
                            <span class="material-symbols-outlined">
                                share
                            </span>
                            Share
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
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;
