import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';
import ProductsApis from '../Services/ProductsService';
import Cookies from "js-cookie"; // Import js-cookie

function CreateProductForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const userId = Cookies.get("userId")
    const onSubmit = async (data) => {
        setError("");
        setLoading(true);

        try {
            const response = await ProductsApis.createProduct(data?.category, userId, { title: data?.title, content: data?.content });
            console.log(response?.data?.productId)
            if (data?.image?.[0]) {
                const formData = new FormData();
                console.log(data.image?.[0])
                formData.append("image", data.image?.[0]);
                console.log(formData)

                const uploadImageResponse = await ProductsApis.uploadProductImage(
                    response?.data?.productId,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log("Image Upload Response:", uploadImageResponse);
            }
        }
        catch (err) {

        }
        finally {

        }
        console.log("product create", data)
        setLoading(false);
    };

    return (
        <section className='product-form' id='product-form'>
            <div className="form-container">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="d-flex flex-column justify-content-center align-items-center gap-4"
                >
                    {/* Product Name Field */}
                    <label className="d-flex flex-column">
                        Product Name
                        <input
                            {...register("title", { required: "ProductName is required", maxLength: 20 })}
                            placeholder="Enter the Product name.."
                        />
                        {errors.title && <span className="error-text">{errors.title.message}</span>}
                    </label>

                    {/* Description Field */}
                    <label className="d-flex flex-column">
                        Description
                        <input
                            type="text"
                            {...register("content", {
                                required: "content is required",
                                // pattern: {
                                //     value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                //     message: "Invalid email format",
                                // },
                            })}
                            placeholder="Enter product's Description"
                        />
                        {errors.content && <span className="error-text">{errors.content.message}</span>}
                    </label>


                    <label className="d-flex flex-column">
                        Product Category
                        <select {...register("category")}>
                            <option value="1">spices</option>
                            <option value="2">beverages</option>
                            <option value="3">other</option>
                        </select>
                    </label>

                    <label className="d-flex flex-column">
                        Product Image Upload
                        <input {...register("image")} type="file" />

                    </label>


                    {/* Error Message */}
                    {error && <span className="error-text">{error}</span>}

                    {/* Submit Button */}
                    <button type="submit" className="cart-btn" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default CreateProductForm
