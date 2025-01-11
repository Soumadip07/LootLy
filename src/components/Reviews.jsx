import React from 'react';
import { products } from '../Data/ProductData';
import { useParams } from 'react-router-dom';

function Reviews() {
    const { id } = useParams();

    const filteredProductData = products.find((product) => product.id === parseInt(id));

    return (
        <section className="reviews-section mt-4">
            <div className='review-tab'>
                <h3 className='py-3'>User Reviews</h3>
                {filteredProductData?.reviews && filteredProductData?.reviews.length > 0 ? (
                    filteredProductData.reviews.map((review, index) => (
                        <div className="review-card" key={index}>
                            <div className="review-header">
                                <span className="review-username">{review.user}</span>
                                <div className="review-rating">
                                    {Array(5)
                                        .fill()
                                        .map((_, starIndex) => (
                                            <i
                                                key={starIndex}
                                                className={`fa-star ${starIndex < review.rating ? 'fas golden-star' : 'far'}`}
                                            ></i>
                                        ))}
                                </div>
                            </div>
                            <p className="review-comment">{review.comment}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet. Be the first to leave a review!</p>
                )}
            </div>
        </section>
    );
}

export default Reviews;
