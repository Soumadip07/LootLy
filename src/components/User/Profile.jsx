import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Dropdown from '../../utils/Dropdown';
import statesMapper from '../../utils/States';
import districtsMapper from '../../utils/District';
import UserService from '../Services/UserService';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import ShippingAddressService from '../Services/Shipping AddressService';
import toast, { Toaster } from 'react-hot-toast'
import ProfileService from '../Services/Profile';

function Profile() {
    const [state, setState] = useState();
    const [districts, setDistricts] = useState();
    const [openState, setOpenState] = useState(false)
    const [openDistrict, setOpenDistrict] = useState(false)
    const [totalValue, setTotalValue] = useState(0);
    const [ItemNumber, setItemNumeber] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false)
    const user = useSelector((state) => state.auth);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [profileData, setProfileData] = useState();

    let userId = user?.user?.id;
    if (!userId) {
        userId = Cookies.get("userId");
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    useEffect(() => {
        const fetchUserData = async () => {
            if (!userId) return;

            try {
                const response = await UserService.getUserbyId(userId);
                if (response?.data) {
                    const userData = response.data;
                    console.log(userData, "product")

                    // Populate form fields
                    reset({
                        fullName: userData.name || "",
                        email: userData.email || "",
                        about: userData.about || "",
                    });

                }
            } catch (err) {
                console.error("Error fetching product data:", err);
                setError("Failed to fetch product details.");
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId]);

    const onSubmit = async (data) => {
        console.log(data?.profilePic?.[0], "Data")
        if (data) {
            setError("");
            setLoading(true);
            try {
                if (data?.fullAddress.trim() || data?.state.trim() || data?.city.trim() || data?.zipCode.trim()) {
                    console.log('All fields are not empty');

                    const response = await ShippingAddressService.createShippingAddress(userId, {
                        fullAddress: data?.fullAddress,
                        state: data?.state,
                        city: data?.city,
                        zipCode: data?.zipCode,
                    });
                }
                if (data?.phnNo) {
                    const response = await ProfileService.createProfileDetails(userId, {
                        contactNumber: data?.phnNo
                    });
                    console.log(data?.profilePic?.[0], "checkl")
                    console.log("Profile Pic Type:", typeof data?.profilePic?.[0]);

                    toast.success("Profile Updated!");
                    if (data?.profilePic?.length > 0) {
                        const formData = new FormData();
                        const file = data?.profilePic?.[0];

                        if (file instanceof File) {
                            console.log("is a file ")
                            formData.append("image", file);
                        } else {
                            console.error("Invalid file:", file);
                        }

                        console.log("FormData before sending:");
                        for (let pair of formData.entries()) {
                            console.log(pair[0] + ":", pair[1]);
                        }

                        try {
                            const response2 = await ProfileService.uploadProfileImage(
                                response?.data?.profileId,
                                formData,
                            );
                            console.log("Image response:", response2);
                            toast.success("Image Uploaded!");
                        } catch (error) {
                            console.error("Image upload failed:", error);
                            toast.error("Failed to upload image.");
                        }
                    }

                }
                // reset();
            } catch (err) {
                console.error("Error creating product:", err);
                setError("Failed to create product");
            } finally {
                setLoading(false);
            }
        }
    };
    return (
        <section>
            <div className='col-lg-9 personal-info-container'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="card p-4">
                        <h5 >Personal Information</h5>
                        {/* Product Name Field */}
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("fullName",)}

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
                                    { required: "Phone number is required", maxLength: 10 }

                                )}
                                placeholder="Enter your Phone Number"
                            />
                            {errors.phnNo && <small className="text-danger">{errors.phnNo.message}</small>}

                        </div>
                        <div className="mb-3">
                            <label className="form-label">About You</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("about",
                                    // { required: "Phone number is required", maxLength: 10 }

                                )}
                                placeholder="Tell us Something about you!"
                            />
                            {errors.about && <small className="text-danger">{errors.about.message}</small>}
                        </div>
                        {/* State Field */}
                        {/* <div className="mb-3">
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
                        </div> */}
                        {/* District Field */}
                        {/* <div className="mb-3">
                            <label className="form-label">District</label>
                            <Dropdown
                                options={districtsMapper}
                                onChange={(item) => setDistricts(item)}
                                placeholder={"Type to search"}
                                open={openDistrict}
                                setOpen={setOpenDistrict}
                                type="district"
                                keyTitle={"district_name"}
                                idTitle={"id"}
                            />
                        </div> */}

                        {/* Profile pic Field */}
                        <div className="mb-3">
                            <label className="form-label">Profile Picture</label>
                            <input
                                type="file"
                                className="form-control"
                                {...register("profilePic",
                                    // { required: "Profile Picture is required", maxLength: 50 }
                                )}
                            />
                            {errors.profilePic && <small className="text-danger">{errors.profilePic.message}</small>}
                        </div>
                    </div>
                    <div className="card p-4 mt-3">
                        <h5 >Shipping Address</h5>
                        <div className="mb-3">
                            <label className="form-label">Full Address</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("fullAddress",)}
                                placeholder="Enter your Full Address"
                            />
                            {errors.fullAddress && <small className="text-danger">{errors.fullAddress.message}</small>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">State</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("state",)}
                                placeholder="Enter your State"
                            />
                            {errors.state && <small className="text-danger">{errors.state.message}</small>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("city",)}
                                placeholder="Enter your City"
                            />
                            {errors.city && <small className="text-danger">{errors.city.message}</small>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Zip Code</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("zipCode",)}
                                placeholder="Enter your Zip Code"
                            />
                            {errors.zipCode && <small className="text-danger">{errors.zipCode.message}</small>}
                        </div>
                    </div>
                    <button
                        className="cart-btn mt-4"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : "Submit"}
                    </button>
                    <Toaster />
                </form>
            </div>
        </section>
    )
}

export default Profile
