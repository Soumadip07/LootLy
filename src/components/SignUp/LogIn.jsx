import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../slice/AuthSlice';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
    console.log(isAuthenticated)
    const navigate = useNavigate();

    // Formik initialization
    const formik = useFormik({
        initialValues: {
            username: '', // Email
            password: '',
        },
        validate: (values) => {
            const errors = {};

            if (!values.username) {
                errors.username = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.username)) {
                errors.username = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password is required';
            }

            return errors;
        },
        onSubmit: async (values, { resetForm }) => {
            // Dispatch loginUser action
            dispatch(loginUser(values));
            resetForm(); // Reset the form after submission
            navigate('/');
        },
    });

    return (
        <section className="login-section p-5">
            <form
                onSubmit={formik.handleSubmit} // Correctly binding Formik's handleSubmit
                className="d-flex flex-column justify-content-center align-items-center gap-4"
            >
                {/* Username (Email) */}
                <label htmlFor="username" className="d-flex flex-column">
                    Email
                </label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.errors.username && formik.touched.username && (
                    <div className="error">{formik.errors.username}</div>
                )}

                {/* Password */}
                <label htmlFor="password" className="d-flex flex-column">
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && (
                    <div className="error">{formik.errors.password}</div>
                )}

                {/* Submit Button */}
                <button type="submit" className="cart-btn" disabled={loading}>
                    {loading ? 'Logging in...' : 'Log In'}
                </button>

                {/* Error Message */}
                {error && <div className="error-message">{error}</div>}
            </form>
        </section>
    );
}
