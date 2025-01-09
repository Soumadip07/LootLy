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
            <div className='container justify-content-evenly gap-3'>
                <div className='focus:ring-opacity-50 border border-gray-200 mt-4'>
                    <img src={getImage(filteredProductData?.image)} alt={filteredProductData?.name} />
                </div>
                <div className=''>
                    <h2>{filteredProductData?.name}</h2>
                    <p>{filteredProductData?.price}</p>

                    <div>
                        In Stock
                    </div>
                    <p>20 people are viewing this</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, perferendis. Quo eligendi non pariatur consequuntur.</p>
                    <div>
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

                    </div>
                    <div>
                        Sub Total
                        <h5>25.00$</h5>
                    </div>
                    <div>
                        <span class="material-symbols-outlined">
                            local_shipping
                        </span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined">
                            share
                        </span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined">
                            help
                        </span>
                    </div>
                </div>
                <button>
                    Add to Cart
                </button>
                <button>
                    Buy
                </button>
            </div>
        </section>
    );
}

export default ProductDetails;
