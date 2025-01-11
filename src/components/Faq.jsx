import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../Data/ProductData';

function Faq() {
    const { id } = useParams();

    const filteredProductData = products.find((product) => product.id === parseInt(id));
    return (
        <section className='faq-section' id='faq-section'>
            <div className="accordion accordion-flush py-3" id="accordionFlushExample">
                <h3 className='py-3'>Frequently Asked Questions</h3>
                {filteredProductData?.faq?.map((faq, index) => (
                    <div className="accordion-item mb-3" key={index}>
                        <h2 className="accordion-header" id={`flush-heading${index}`}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#flush-collapse${index}`}
                                aria-expanded="false"
                                aria-controls={`flush-collapse${index}`}
                            >
                                <b>{faq?.question}</b>
                            </button>
                        </h2>
                        <div
                            id={`flush-collapse${index}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`flush-heading${index}`}
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">{faq?.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Faq
