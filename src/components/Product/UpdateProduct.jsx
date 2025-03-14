import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import ProductsApis from '../Services/ProductsService';
import Cookies from "js-cookie";
import logo from '../../assets/logo.png'
import JoditEditor from 'jodit-react';
import Dropdown from '../../utils/Dropdown';
import Dropzone from '../../utils/Dropzone';
import toast, { Toaster } from 'react-hot-toast'

import { DiscountTypes } from '../../utils/DiscountType';
import CategoriesApis from '../Services/CategoryService';
import { getUserId } from '../../utils/constFunctions';
import { QuantityTypes } from '../../utils/QuantityType';
function UpdateProduct({ type }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
        reset,
    } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [category, setCategories] = useState();
    const [selectedDiscountOption, setSelectedDiscountOption] = useState();
    const [selectedCategoryOption, setSelectedCategoryOption] = useState();
    const [uploadedImages, setuploadedImages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState();
    const [data, setData] = useState();
    const [selectedQuantityOption, setSelectedQuantityOption] = useState();

    const closeModal = () => setShowModal(false);
    const [userId, setUserId] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const storedUserId = Cookies.get("userId");
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);
    console.log("User ID:", userId);
    const [open, setOpen] = useState(false)
    const [selectedCheckboxValue, setSelectedCheckboxValue] = useState(null);


    useEffect(() => {
        const fetchProductData = async () => {
            if (!userId) return; // Ensure userId exists

            try {
                const response = await ProductsApis.getProductBySlug(slug);
                if (response?.data) {
                    const productData = response.data;
                    console.log(productData?.discount_type, "product")

                    // Populate form fields
                    reset({
                        title: productData.title || "",
                        content: productData.content || "",
                        base_price: productData.base_price || "",
                        stock: productData.stock || "",
                        discount: productData.discount || "",
                        // discount_type: productData.discount_type || "",
                        category: productData.category || "",
                    });

                    // Set category and discount dropdowns
                    setSelectedCategoryOption(productData.category || null);
                    // setSelectedDiscountOption(productData.discount_type || null);

                    // If product has an image, set it
                    if (productData.imageName) {
                        setuploadedImages({ file: productData.imageName });
                    }
                }
            } catch (err) {
                console.error("Error fetching product data:", err);
                setError("Failed to fetch product details.");
            }
        };

        if (userId) {
            fetchProductData();
        }
    }, [userId, reset]);
    const handleRemoveProduct = async () => {
        console.log("Delete")
        if (type == "Delete") {
            try {
                const response = await ProductsApis.deleteProduct(slug, {

                });
            } catch (err) {
                console.error("Error deleting product:", err);
                setError("Failed to delete product");
            } finally {
                setLoading(false);
            }
        }
    }
    console.log(selectedCategoryOption)
    const onSubmit = async (data, event) => {
        if (uploadedImages.length > 0) {
            setError("");
            event.preventDefault();
            setLoading(true);
            console.log(data?.category?.title, "helooooooooooo");
            try {
                const response = await ProductsApis.updateProduct(data?.productId, {
                    title: data?.title,
                    content: data?.content,
                    base_price: data?.base_price,
                    quantity: data?.quantity,
                    stock: data?.stock,
                    discount: data?.discount,
                    // discount_type: data?.discount_type,
                });

                console.log(uploadedImages?.[0], "Responses");

                if (uploadedImages?.length > 0) {
                    const formData = new FormData();
                    formData.append("image", uploadedImages[0]?.file);

                    // // Log the FormData to see its contents
                    // for (let pair of formData.entries()) {
                    //     console.log(pair[0] + ':', pair[1]);
                    // }

                    const uploadImageResponse = await ProductsApis.uploadProductImage(
                        response?.data?.productId,
                        formData,
                        {
                            headers: { "Content-Type": "multipart/form-data" },
                        }
                    );

                    console.log("Image Upload Response:", uploadImageResponse);
                    reset();
                    setuploadedImages([]);
                    toast.success("Product created successfully!");
                }
            } catch (err) {
                console.error("Error creating product:", err);
                setError("Failed to create product");
            } finally {
                setLoading(false);
            }
        }
        else {
            toast.error('Upload Images for your product!');
        }
    };


    const editor = useRef(null);

    // Jodit Editor Config
    const config = useMemo(() => ({
        readonly: false,
        height: 350,
        background: "#7688db",
        buttons: [
            "source", "bold", "italic", "underline", "strikethrough", "superscript", "subscript",
            "link", "unlink", "image", "table", "code", "list", "align", "hr",
            "undo", "redo", "preview", "outdent", "indent",
            "selectall", "cut", "copy", "paste", "font", "fontsize",
            "paragraph", "hr", "save", "clear"
        ],
        toolbar: true,
    }), []);
    const handleNavigate = () => {
        navigate("/admin/product");
    }
    console.log(uploadedImages)
    return (
        <section className='product-form p-3' id='product-form'>
            <button className="small-buttons d-flex mb-3 justify-content-center align-items-center p-1" onClick={handleNavigate}>
                <span className="material-symbols-outlined">
                    chevron_backward
                </span>
                <h6 className='mt-2'>Product page</h6>
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-4">
                    {/* General Information */}
                    <div className='d-flex gap-2'>
                        <span className="material-symbols-outlined">package_2</span>
                        <h4>{type} page</h4>
                    </div>


                    <div className="col-12 col-lg-8">
                        <div className="card p-4">
                            <h5>General Information</h5>

                            {/* Product Name Field */}
                            <div className="mb-3">
                                <label className="form-label">Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("title", { required: "Product Name is required", maxLength: 50 })}
                                    placeholder="Enter the Product name"
                                />
                                {errors.title && <small className="text-danger">{errors.title.message}</small>}
                            </div>

                            {/* Description Field */}
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <Controller
                                    name="content"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Content is required" }}
                                    render={({ field: { onChange, value } }) => (
                                        <JoditEditor
                                            ref={editor}
                                            value={value}
                                            config={config}
                                            tabIndex={1}
                                            onBlur={(newContent) => onChange(newContent)}
                                        />
                                    )}
                                />
                                {errors.content && <small className="text-danger">{errors.content.message}</small>}
                            </div>

                            {/* Quantity & Inventory */}
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label" htmlFor="quantityDropdown">Quantity</label>
                                    <Controller
                                        name="quantity"
                                        control={control}
                                        rules={{ required: "Quantity is required" }}
                                        render={({ field: { onChange, value } }) => (
                                            <Dropdown
                                                options={QuantityTypes}
                                                onChange={(item) => {
                                                    setSelectedQuantityOption(item);
                                                    onChange(item);
                                                }}
                                                placeholder={"Type to search"}
                                                open={open}
                                                setOpen={setOpen}
                                                value={value}
                                            />
                                        )}
                                    />
                                    {errors.quantity && <small className="text-danger">{errors.quantity.message}</small>}
                                </div>


                                {/* <div className="col-6">
                                    <label className="form-label ps-3">Inventory Status</label>
                                    <Checkbox
                                        checkboxItems={["Available", "Unavailable", "Discontinued"]}
                                        type={"radio"}
                                        selectedCheckboxValue={selectedCheckboxValue}
                                        setSelectedCheckboxValue={setSelectedCheckboxValue}
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Upload Image */}
                    <div className="col-12 col-lg-4">
                        <div className="card p-4">
                            <h5 className="card-title">Upload Image</h5>
                            <p>Only .png, .jpg, and .jpeg files are allowed.</p>
                            {/* <Dropzone uploadedImages={uploadedImages} setuploadedImages={setuploadedImages} /> */}
                        </div>
                    </div>

                    {/* Pricing & Stock */}
                    <div className="col-12 col-lg-8">
                        <div className="card p-4">
                            <h5 className="card-title">Pricing and Stock</h5>
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label">Base Pricing</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="$0.00"
                                        {...register("base_price", { required: "Base Price is required" })}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Stock</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="0"
                                        {...register("stock", { required: "Stock is required" })}
                                    />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-6">
                                    <label className="form-label">Discount</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g. 10%"
                                        {...register("discount", { required: "Discount is required" })}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Discount Type</label>
                                    <Controller
                                        name="discount_type"
                                        control={control}
                                        rules={{ required: "Discount Type is required" }}
                                        render={({ field: { onChange, value } }) => (
                                            <Dropdown
                                                options={DiscountTypes}
                                                onChange={(item) => {
                                                    setSelectedDiscountOption(item);  // For local state update (if needed)
                                                    onChange(item);  // Important: This ensures the value is stored in the form data
                                                }}
                                                placeholder={"Search Season Discount"}
                                                open={open}
                                                setOpen={setOpen}
                                                value={value}  // This ensures the selected value persists in the dropdown
                                            />
                                        )}
                                    />
                                    {errors.discount_type && <small className="text-danger">{errors.discount_type.message}</small>}

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category */}
                    <div className="col-12 col-lg-4">
                        <div className="card p-4">
                            <h5 className="card-title">Category</h5>
                            <label className="form-label" htmlFor="categoryDropdown">Product Category</label>
                            <Controller
                                name="category"
                                control={control}
                                rules={{ required: "Category is required" }}
                                render={({ field: { onChange, value } }) => (
                                    <Dropdown
                                        options={category}
                                        onChange={(item) => {
                                            setSelectedCategoryOption(item); // Local state update (if needed)
                                            onChange(item);      // Store only the `id` or desired value in form data
                                        }}
                                        placeholder={"Type to search Product Category"}
                                        open={open}
                                        setOpen={setOpen}
                                        value={value}  // Ensures the selected value appears in the dropdown
                                        keyTitle={"categoryTitle"}
                                        idTitle={"categoryId"}
                                    />
                                )}
                            />
                            {errors.category && <small className="text-danger">{errors.category.message}</small>}

                            {/* <button
                                type="button"
                                className='cart-btn mt-3'
                                onClick={() => setShowModal(true)}
                            >
                                Add Category
                            </button> */}
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-content-end">
                        {type != "Delete" ? (
                            <button
                                className="cart-btn"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="spinner-border text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ) : "Save Changes"}
                            </button>
                        ) : (
                            <button
                                className="cart-btn"
                                onClick={handleRemoveProduct}
                                disabled={loading}
                                type="button"
                            >
                                {loading ? (
                                    <div className="spinner-border text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ) : "Delete Product"}
                            </button>
                        )}
                    </div>
                </div>
            </form>
            <Toaster />
        </section>
    )
}

export default UpdateProduct
