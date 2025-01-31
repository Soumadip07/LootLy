import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { NavLink } from 'react-router-dom';
import ProductsApis from '../Services/ProductsService';
import Cookies from "js-cookie";
import logo from '../../assets/logo.png'
import JoditEditor from 'jodit-react';
import Dropdown from '../../utils/Dropdown';
import { DiscountTypes } from '../../utils/DiscountType';
import { QuantityTypes } from '../../utils/QuantityType';
import CategoriesApis from '../Services/CategoryService';
import Checkbox from '../../utils/Checkbox';

function CreateProductForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
    } = useForm();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const userId = Cookies.get("userId");
    const [category, setCategories] = useState();

    const getCategory = async () => {
        try {
            // console.log("Payload being sent:", data);

            const response = await CategoriesApis.getCategories();
            // console.log(response)
            setCategories(response.data)

            // alert("User created successfully!");
        } catch (err) {
            console.error("Error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Something went wrong!");
        } finally {
        }
    }


    useEffect(() => {
        if (!category)
            getCategory();
    }, [category])

    const onSubmit = async (data) => {
        setError("");
        setLoading(true);

        try {
            const response = await ProductsApis.createProduct(data?.category, userId, {
                title: data?.title,
                content: data?.content
            });

            // console.log(response?.data?.productId);

            if (data?.image?.[0]) {
                const formData = new FormData();
                formData.append("image", data.image?.[0]);

                const uploadImageResponse = await ProductsApis.uploadProductImage(
                    response?.data?.productId,
                    formData,
                    {
                        headers: { "Content-Type": "multipart/form-data" },
                    }
                );

                console.log("Image Upload Response:", uploadImageResponse);
            }
        } catch (err) {
            console.error("Error creating product:", err);
            setError("Failed to create product");
        } finally {
            setLoading(false);
        }
    };

    const editor = useRef(null);

    // Jodit Editor Config
    const config = useMemo(() => ({
        readonly: false,
        placeholder: "Description for the product",
        height: 350,
        // width: 600,
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
    const [selectedOption, setSelectedOption] = useState();
    const [open, setOpen] = useState(false)
    const [checked, setChecked] = useState();

    return (
        <section className='product-form p-3' id='product-form'>
            <div className="row g-4">
                {/* General Information */}
                <div className='d-flex gap-2'>
                    <span class="material-symbols-outlined">
                        package_2
                    </span>
                    <h4>Add New Product</h4>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="card p-4">
                        <h5 >General Information</h5>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                        >
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
                            {/* Rich Text Editor for Description */}
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
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label" htmlFor="quantityDropdown">Quantity</label>
                                    <p>Pick Available quantity</p>
                                    <Dropdown
                                        options={QuantityTypes}
                                        onChange={(item) => setSelectedOption(item)}
                                        selectedKey={selectedOption}
                                        placeholder={"Type to search"}
                                        open={open}
                                        setOpen={setOpen}
                                    />
                                </div>


                                <div className="col-6">
                                    <label className="form-label ps-3">Order Status</label>
                                    <p className='ps-3'>Click on the status for the product</p>
                                    {/* <div className='pt-2'>
                                        {["Available", "Unavailable", "Will be back"].map((status) => (
                                            <div key={status} className="form-check form-check-inline">
                                                <input
                                                    type="radio"
                                                    id={status}
                                                    name="status"
                                                    value={status}
                                                    className=""
                                                />
                                                <label htmlFor={status} className="ps-2">
                                                    {status}
                                                </label>
                                            </div>
                                        ))}
                                    </div> */}
                                    <Checkbox
                                        checkboxItems={["Available", "Unavailable", "Will be back"]}
                                        type={"radio_button_unchecked"}
                                        id={"status"}
                                        name={"status"}
                                        value={"status"}
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                </div>
                            </div>


                            {/* Product Category */}
                            {/* <label className="d-flex flex-column">
                        Product Category
                        <select {...register("category")} className='dropdown'>
                            <option value="1">Spices</option>
                            <option value="2">Beverages</option>
                            <option value="3">Other</option>
                        </select>
                    </label> */}

                            {/* Product Image Upload */}
                            {/* <label className="d-flex flex-column">
                        Product Image Upload
                        <input {...register("image")} type="file" />
                    </label> */}

                            {/* Error Message */}
                            {/* {error && <span className="error-text">{error}</span>} */}

                            {/* Submit Button */}
                            {/* <button type="submit" className="cart-btn" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button> */}
                        </form>

                        {/* <div className="text-start">
                    <h2>List</h2>
                    <h4>Your</h4>
                    <h2>Product on</h2>
                    <div className="d-flex gap-3 justify-content-center align-items-center">
                        <h3>LootLY</h3>
                        <a href='/'>
                            <img src={logo} alt='logo' />
                        </a>
                    </div>
                </div> */}
                    </div>
                </div>
                {/* Upload Image */}
                <div className="col-12 col-lg-4">
                    <div className="card p-4">
                        <h5 className="card-title">Upload Image</h5>
                        <div className="d-flex flex-column align-items-center">
                            <img src="/path/to/image.jpg" alt="Product Preview" className="img-fluid mb-3" />
                            <button className="btn btn-outline-secondary">Upload New Image</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="card p-4">
                        <h5 className="card-title">Pricing and Stock</h5>
                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label">Base Pricing</label>
                                    <input type="text" className="form-control" placeholder="$0.00" required />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Stock</label>
                                    <input type="text" className="form-control" placeholder="0" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <label className="form-label">Discount</label>
                                    <input type="text" className="form-control" placeholder="e.g. 10%" />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Discount Type</label>
                                    {/* <input type="text" className="form-control" placeholder="e.g. Seasonal Discount" /> */}
                                    <Dropdown
                                        options={DiscountTypes}
                                        onChange={(item) => setSelectedOption(item)}
                                        selectedKey={selectedOption}
                                        placeholder={"Search Season Discount"}
                                        open={open}
                                        setOpen={setOpen}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card p-4">
                        <h5 className="card-title">Category</h5>
                        <p>Pick a Category from the dropdown</p>
                        <form>
                            <label className="form-label" htmlFor="quantityDropdown"> Product Category</label>
                            <Dropdown
                                options={category}
                                onChange={(item) => setSelectedOption(item)}
                                selectedKey={selectedOption}
                                placeholder={"Type to search Product Category"}
                                open={open}
                                setOpen={setOpen}
                                keyTitle={"categoryTitle"}
                                idTitle={"categoryId"}
                            />
                            <button className='cart-btn mt-3'>Add Category</button>
                        </form>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default CreateProductForm;
