import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import statesMapper from '../../utils/States';
import Dropdown from '../../utils/Dropdown';
import districtsMapper, { transformDistricts } from '../../utils/District';

function SellerDetail() {
    const [state, setState] = useState(null);
    const [districts, setDistricts] = useState(null);
    const [open, setOpen] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
    }
    // if (state) {
    const districtsd = (transformDistricts(districtsMapper).find((dist) => dist.state === state)?.districts || []);
    console.log(districtsd)
    // setDistricts(districtsd)
    // }
    // }), [];
    // console.log(districts, "check", transformDistricts(districtsMapper))


    return (
        <section className='seller-details-section'>
            <div className='d-flex gap-3 justify-content-center align-items-center mb-3'>
                <span class="material-symbols-outlined">
                    demography
                </span>
                <h2>Seller Details</h2>
            </div>
            <div className='row seller-details-container'>
                {/* Percentage completion container */}
                <div className='col-lg-3 percentage-completion-container d-flex justify-content-center align-items-center flex-column gap-3'>
                    <h4>Profile Information</h4>
                    <p>Complete profile info to unlock all features</p>
                    <button className='cart-btn'>
                        75%
                    </button>
                </div>

                {/* Personal Information */}
                <div className='col-lg-9 personal-info-container'>
                    <div className="card p-4">
                        <h5 >Personal Information</h5>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            {/* Product Name Field */}
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("fullNmae", { required: "Full Name is required", maxLength: 50 })}
                                    placeholder="Enter your Full name"
                                />
                                {errors.title && <small className="text-danger">{errors.title.message}</small>}
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    {...register("email", { required: "Email is required", maxLength: 50 })}
                                    placeholder="Enter your Email"
                                />
                                {errors.title && <small className="text-danger">{errors.title.message}</small>}
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label className="form-label">Phone number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("phnNo", { required: "Phone number is required", maxLength: 50 })}
                                    placeholder="Enter your Phone Number"
                                />
                                {errors.title && <small className="text-danger">{errors.title.message}</small>}
                            </div>
                            {/* State Field */}
                            <div className="mb-3">
                                <label className="form-label">State</label>
                                <Dropdown
                                    options={statesMapper}
                                    onChange={(item) => setState(item)}
                                    placeholder={"Type to search"}
                                    open={open}
                                    setOpen={setOpen}
                                    keyTitle={"name"}
                                    idTitle={"id"}
                                    type="state"

                                />
                            </div>
                            {/* District Field */}
                            <div className="mb-3">
                                <label className="form-label">District</label>
                                <Dropdown
                                    options={districtsd}
                                    onChange={(item) => setDistricts(item)}
                                    placeholder={"Type to search"}
                                    open={open}
                                    setOpen={setOpen}
                                    type="district"
                                    keyTitle={"district_name"}
                                    idTitle={"id"}
                                />
                            </div>

                            {/* Profile pic Field */}
                            <div className="mb-3">
                                <label className="form-label">Profile Picture</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    {...register("profilePic", { required: "Profile Picture is required", maxLength: 50 })}
                                    placeholder="Enter your Profile Picture"
                                />
                                {errors.title && <small className="text-danger">{errors.title.message}</small>}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Tax Information */}
                <div className='col-lg-6 mt-4 tax-info-container'>
                    <div className="card p-4">
                        <h5 >Tax Information</h5>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            {/* Product Name Field */}
                            <div className="mb-3">
                                <label className="form-label">PAN (Permanent Account Number)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("PanNumber", { required: "Pan Number is required", maxLength: 50 })}
                                    placeholder="Enter your Pan number"
                                />
                                {errors.title && <small className="text-danger">{errors.title.message}</small>}
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label className="form-label">GST number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("gstNumber", { required: "GST number is required", maxLength: 50 })}
                                    placeholder="Enter your GST number"
                                />
                                {errors.title && <small className="text-danger">{errors.title.message}</small>}
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label className="form-label">Tax Category/Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("taxType", { required: "Tax Category/Type is required", maxLength: 50 })}
                                    placeholder="Enter your Tax Category/Type"
                                />
                                {errors.title && <small className="text-danger">{errors.title.message}</small>}
                            </div>

                            {/* Profile pic Field */}
                            <div className="mb-3">
                                <label className="form-label">Supporting Documents</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    {...register("Taxdoc", { required: "Supporting Documents is required", maxLength: 50 })}
                                    placeholder="Enter your Supporting Documents"
                                />
                                {errors.title && <small className="text-danger">{errors.title.message}</small>}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Company Information */}
                <div className='col-lg-6 mt-4 company-info-container'>
                    <div className="card p-4">
                        <h5>Company Information</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Company Name Field */}
                            <div className="mb-3">
                                <label className="form-label">Company Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("companyName", { required: "Company Name is required", maxLength: 50 })}
                                    placeholder="Enter your Company Name"
                                />
                                {errors.companyName && <small className="text-danger">{errors.companyName.message}</small>}
                            </div>

                            {/* Business Type Field */}
                            <div className="mb-3">
                                <label className="form-label">Business Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("businessType", { required: "Business Type is required", maxLength: 50 })}
                                    placeholder="Enter your Business Type"
                                />
                                {errors.businessType && <small className="text-danger">{errors.businessType.message}</small>}
                            </div>

                            {/* Business Address Field */}
                            <div className="mb-3">
                                <label className="form-label">Business Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("businessAddress", { required: "Business Address is required", maxLength: 100 })}
                                    placeholder="Enter your Business Address"
                                />
                                {errors.businessAddress && <small className="text-danger">{errors.businessAddress.message}</small>}
                            </div>

                            {/* Social Media Handles Field */}
                            <div className="mb-3">
                                <label className="form-label">Social Media Handles</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("socialMedia", { required: "Social Media Handles are required", maxLength: 100 })}
                                    placeholder="Enter your Social Media Handles"
                                />
                                {errors.socialMedia && <small className="text-danger">{errors.socialMedia.message}</small>}
                            </div>

                            {/* Company Logo Field */}
                            <div className="mb-3">
                                <label className="form-label">Company Logo</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    {...register("companyLogo", { required: "Company Logo is required" })}
                                />
                                {errors.companyLogo && <small className="text-danger">{errors.companyLogo.message}</small>}
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SellerDetail
