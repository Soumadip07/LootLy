import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import statesMapper from '../../utils/States';
import Dropdown from '../../utils/Dropdown';
import districtsMapper, { transformDistricts } from '../../utils/District';
import ProgressBar from '../../utils/ProgressBar';

function SellerDetail() {
    const [state, setState] = useState();
    const [districts, setDistricts] = useState();
    const [openState, setOpenState] = useState(false)
    const [openDistrict, setOpenDistrict] = useState(false)
    const [totalValue, setTotalValue] = useState(0);
    const [ItemNumber, setItemNumeber] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const allKeys = Object.keys(data); // Get all keys

        // Count only non-empty fields & check FileList properly
        const filledFields = allKeys.filter(key => {
            const value = data[key];

            // If value is a FileList and empty, treat it as falsy
            if (value instanceof FileList && value.length === 0) {
                return false;
            }

            return Boolean(value); // Otherwise, check for truthy values
        });
        console.log(allKeys.length, "asd", filledFields.length)

        setTotalValue(allKeys.length);
        setItemNumeber(filledFields.length);
        setIsSubmit(true)
    };

    const districtsd = (transformDistricts(districtsMapper).find((dist) => dist.state === state)?.districts || []);



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
                    <ProgressBar totalValue={totalValue} ItemNumber={ItemNumber} />
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
                                    {...register("fullName",
                                        // { required: "Full Name is required", maxLength: 50 


                                        // }
                                    )
                                    }

                                    placeholder="Enter your Full name"
                                />
                                {errors.fullName && <small className="text-danger">{errors.fullName.message}</small>}
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    {...register("email",
                                        // { required: "Email is required", maxLength: 50 }
                                    )}

                                    placeholder="Enter your Email"
                                />
                                {errors.email && <small className="text-danger">{errors.email.message}</small>}
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label className="form-label">Phone number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("phnNo",
                                        //  { required: "Phone number is required", maxLength: 50 }

                                    )}
                                    placeholder="Enter your Phone Number"
                                />
                                {errors.phnNo && <small className="text-danger">{errors.phnNo.message}</small>}
                            </div>
                            {/* State Field */}
                            <div className="mb-3">
                                <label className="form-label">State</label>
                                <Dropdown
                                    options={statesMapper}
                                    onChange={(item) => setState(item)}
                                    placeholder={"Type to search"}
                                    open={openState}
                                    setOpen={setOpenState}
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
                                    open={openDistrict}
                                    setOpen={setOpenDistrict}
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
                                    {...register("profilePic",
                                        // { required: "Profile Picture is required", maxLength: 50 }
                                    )}
                                    placeholder="Enter your Profile Picture"
                                />
                                {errors.profilePic && <small className="text-danger">{errors.profilePic.message}</small>}
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
                                    {...register("PanNumber",
                                        // { required: "Pan Number is required", maxLength: 50 }
                                    )}
                                    placeholder="Enter your Pan number"
                                />
                                {errors.PanNumber && <small className="text-danger">{errors.PanNumber.message}</small>}
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label className="form-label">GST number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("gstNumber",
                                        // { required: "GST number is required", maxLength: 50 }
                                    )}
                                    placeholder="Enter your GST number"
                                />
                                {errors.gstNumber && <small className="text-danger">{errors.gstNumber.message}</small>}
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label className="form-label">Tax Category/Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("taxType",
                                        { required: "Tax Category/Type is required", maxLength: 50 })}
                                    placeholder="Enter your Tax Category/Type"
                                />
                                {errors.taxType && <small className="text-danger">{errors.taxType.message}</small>}
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
                                {errors.Taxdoc && <small className="text-danger">{errors.Taxdoc.message}</small>}
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
                                    {...register("companyLogo",
                                        // { required: "Company Logo is required" }
                                    )}
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
