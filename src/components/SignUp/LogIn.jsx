import React, { useState } from 'react';
import { useFormik } from 'formik';
import LoginApis from '../Services/LogInServices';

export default function LogIn() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (data, { resetForm }) => {
        setError("");
        setLoading(true);
        try {
            console.log("Payload being sent:", data);

            const response = await LoginApis.LoginUser(data);

            console.log("Response:", response.data);
            alert("User created successfully!");
            resetForm(); // Reset form values after successful submission
        } catch (err) {
            console.error("Error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: values => {
            const errors = {};

            if (!values.firstName) {
                errors.firstName = 'First name is required';
            }
            if (!values.lastName) {
                errors.lastName = 'Last name is required';
            }
            if (!values.username) {
                errors.username = 'username is required';
            } else if (!/\S+@\S+\.\S+/.test(values.username)) {
                errors.username = 'username address is invalid';
            }
            return errors;
        },
        onSubmit: handleSubmit, // Bind handleSubmit here
    });

    return (
        <section className='login-section p-5'>
            <form
                onSubmit={formik.handleSubmit} // Use formik's handleSubmit
                className="d-flex flex-column justify-content-center align-items-center gap-4"
            >
                <label htmlFor="username" className="d-flex flex-column">Email </label>
                <input
                    id="username"
                    name="username"
                    type="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.errors.username && formik.touched.username && (
                    <div className="error">{formik.errors.username}</div>
                )}

                <label htmlFor="password" className="d-flex flex-column">Password</label>
                <input
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.errors.lastName && formik.touched.password && (
                    <div className="error">{formik.errors.password}</div>
                )}



                <button type="submit" className="cart-btn" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
                {error && <div className="error-message">{error}</div>}
            </form>
        </section>
    );
}
