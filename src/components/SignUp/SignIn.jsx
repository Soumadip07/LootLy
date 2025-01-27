import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SignInApis from "../Services/SignInServices";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../slice/AuthSlice";

function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        setError("");
        setLoading(true);
        try {
            // console.log("Payload being sent:", data);

            const response = await SignInApis.RegisterUser(data);

            console.log("Response:", response.data?.roles?.[0]?.id);
            alert("User created successfully!");
            dispatch(
                loginUser({
                    password: data.password,
                    username: data.email,
                    id: response.data?.roles?.[0]?.id,
                })
            );
            navigate('/')
        } catch (err) {
            console.error("Error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };


    return (
        <section className="SignUp-section p-5">
            <div className="form-container">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="d-flex flex-column justify-content-center align-items-center gap-4"
                >
                    {/* Name Field */}
                    <label className="d-flex flex-column">
                        Full Name
                        <input
                            {...register("name", { required: "Name is required", maxLength: 20 })}
                            placeholder="Enter your full name"
                        />
                        {errors.name && <span className="error-text">{errors.name.message}</span>}
                    </label>

                    {/* Email Field */}
                    <label className="d-flex flex-column">
                        Email
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Invalid email format",
                                },
                            })}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="error-text">{errors.email.message}</span>}
                    </label>

                    {/* Password Field */}
                    <label className="d-flex flex-column">
                        Password
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long",
                                },
                            })}
                            placeholder="Enter your password"
                        />
                        {errors.password && <span className="error-text">{errors.password.message}</span>}
                    </label>

                    {/* About Field */}
                    <label className="d-flex flex-column">
                        About
                        <textarea
                            {...register("about", {
                                required: "About field is required",
                                maxLength: {
                                    value: 200,
                                    message: "About section must be less than 200 characters",
                                },
                            })}
                            placeholder="Tell us about yourself"
                        />
                        {errors.about && <span className="error-text">{errors.about.message}</span>}
                    </label>

                    {/* Error Message */}
                    {error && <span className="error-text">{error}</span>}

                    {/* Submit Button */}
                    <button type="submit" className="cart-btn" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    <NavLink to='/log-in'>
                        <p>Already Have an Acoount? Log In</p>
                    </NavLink>
                </form>
            </div>
        </section>
    );
}

export default SignIn;
