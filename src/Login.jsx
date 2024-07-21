import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from './CustomTextInput';
import addCartImage from './add-cart.png'; 
import { Link } from 'react-router-dom';



const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log('Form data', values);
      setSubmitting(false);
    }, 400);
  };

  return (
    <>

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-400">
      <div className="w-full max-w-xs">
        <img src = {addCartImage} className = " m-auto w-52" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors, touched, handleChange, handleBlur }) => (
            <Form className="px-8 pt-6 pb-8 mb-4">
              <CustomTextInput
                id="email"
                name="email"
                type="email"
                placeholder = "Email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />
              <CustomTextInput
        
                id="password"
                name="password"
                type="password"
                placeholder = "Password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
              />
              <div >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" mb-4 w-full bg-white hover:bg-blue-100 text-blue-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
                <p className = "text-white">Already have an Account? <Link to="/signup" className="underline">Sign Up</Link> </p>

              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </>

  );
};

export default Login;
