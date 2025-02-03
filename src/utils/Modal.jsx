import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import CategoriesApis from '../components/Services/CategoryService';

function Modal({ modalData, setModalData, closeModal, type = "form" }) {


    const postCategory = async (data) => {

        try {
            // console.log("Payload being sent:", data);

            const response = await CategoriesApis.addCategories(data);
            console.log(response)
            // alert("User created successfully!");
        } catch (err) {
            console.error("Error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Something went wrong!");
        } finally {
        }
    }
    useEffect(() => {
        // Prevent scrolling
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        return () => {
            // Restore scrolling when modal is closed
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";
        };
    }, []);
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        postCategory(data)
        setModalData(data)
        closeModal();
    }
    // Close modal if clicking outside the modal-container
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };
    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className="modal-container card">
                <button className="close-btn" onClick={closeModal}>&times;</button>

                {type === "form" && (
                    <div className='form-container'>
                        <div className='d-flex gap-3'>
                            <span class="material-symbols-outlined">
                                category
                            </span>
                            <h4 className='mt-1'>Add Category</h4>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className='d-flex flex-column justify-content-start align-items-start gap-3'>

                                <label>Category Name</label>
                                <input
                                    {...register("categoryTitle", { required: true, maxLength: 20 })}
                                    placeholder="Enter category name"
                                    style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                                />

                                <label>Category Description</label>
                                <textarea
                                    className='input-desc'
                                    {...register("categoryDescription", { required: true, maxLength: 40 })}
                                    placeholder="Enter category description"
                                />
                            </div>
                            <div className='d-flex justify-content-end'>
                                <input
                                    type="submit"
                                    className="cart-btn mt-5"
                                    value="Add Category"
                                />
                            </div>
                        </form>
                    </div>
                )}
                {type === "disclaimer" && (
                    <div>
                        <h2>STAY TUNED</h2>
                        <p>
                            Subscribe to our newsletter and never miss our designs, latest news, etc.
                            Our newsletter is sent once a week, every Monday.
                        </p>
                        <button className="modal-btn" type='submit' onClick={closeModal}>
                            Accept It
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Modal;
