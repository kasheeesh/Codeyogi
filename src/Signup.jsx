import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from './CustomTextInput';
import addCartImage from './add-cart.png'; // Import the image directly from src

const Signup = () => {
  const initialValues = {
    name: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    contactNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Contact number must be 10 digits')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log('Form data', values);
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-400">
      <div className="w-full max-w-xs  p-6">
        <img src={addCartImage} alt="Add to Cart" className="mb-4 mx-auto" /> {/* Display the image */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors, touched, handleChange, handleBlur }) => (
            <Form className="rounded px-8 pt-6 pb-8 mb-2">
              <CustomTextInput
                label="Name"
                placeholder = "Name"
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                touched={touched.name}
              />
              <CustomTextInput
                label="Email"
                placeholder = "Email"
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />
              <CustomTextInput
                label="Contact Number"
                id="contactNumber"
                placeholder = "Contact"
                name="contactNumber"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.contactNumber}
                touched={touched.contactNumber}
              />
              
              <CustomTextInput
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder = "Password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
              />
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white hover:bg-blue-100 text-blue-900 font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </div>
              <p className="text-white w-full mt-4 text-center">
                Already have an account? <a href="/login" className="underline text-blue-500">Login</a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
