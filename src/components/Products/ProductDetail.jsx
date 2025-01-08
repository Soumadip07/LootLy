import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams(); // Retrieve ID from route
    console.log("Inner page", id)

    // if (!product) {
    //     return <div>Product not found!</div>;
    // }

    return (
        <div className='container'>
            <h1>{id}</h1>
            hello
            {/* <img src={product.img} alt={product.name} />
            <p>Price: ${product.price.toFixed(2)}</p> */}
        </div>
    );
}

export default ProductDetails;
