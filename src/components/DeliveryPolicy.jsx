import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../Data/ProductData';

function DeliveryPolicy() {
    const { id } = useParams();

    const filteredProductData = products.find((product) => product.id === parseInt(id));
    console.log(filteredProductData)
    return (
        <section className='delivery-section mt-4'>
            <h3 className='py-3'>Delivery & Return Policy</h3>
            <div className='delivery-card py-4'>
                <p className='p-2'>
                    {filteredProductData?.deliveryAndReturnPolicy}
                </p>
            </div>
        </section>
    )
}

export default DeliveryPolicy
