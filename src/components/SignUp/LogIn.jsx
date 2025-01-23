import React from 'react';
import { useFormik } from 'formik';

export default function LogIn() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate: values => {
            const errors = {};

            if (!values.firstName) {
                errors.firstName = 'First name is required';
            }
            if (!values.lastName) {
                errors.lastName = 'Last name is required';
            }
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Email address is invalid';
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <section className='login-section p-5'>
            <form
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column justify-content-center align-items-center gap-4"
            >
                <label htmlFor="firstName" className="d-flex flex-column">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                    <div className="error">{formik.errors.firstName}</div>
                )}

                <label htmlFor="lastName" className="d-flex flex-column">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                {formik.errors.lastName && formik.touched.lastName && (
                    <div className="error">{formik.errors.lastName}</div>
                )}

                <label htmlFor="email" className="d-flex flex-column">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                    <div className="error">{formik.errors.email}</div>
                )}

                <button type="submit" className="cart-btn">Submit</button>
            </form>
        </section>
    );
}
