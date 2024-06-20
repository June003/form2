import React from 'react';
import "./App.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  consent: Yup.bool()
    .oneOf([true], 'Consent is required')
    .required('Consent is required')
});

const MyForm = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md min-h-7">
      <Formik
        initialValues={{ email: '', password: '', consent: false }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="email" className=" text-gray-700 flex">
                Enter your email
                <p className='text-red-600'>&nbsp;*</p>
              </label>
              <Field 
                type="email" 
                name="email" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              />
              <ErrorMessage 
                name="email" 
                component="div" 
                className="text-red-500 text-sm mt-1" 
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="flex text-gray-700">
                Enter your password
                <p className='text-red-600'>&nbsp;*</p>
              </label>
              <Field 
                type="password" 
                name="password" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              />
              <ErrorMessage 
                name="password" 
                component="div" 
                className="text-red-500 text-sm mt-1" 
              />
            </div>
            
            <div className="mb-4">
              <label className="inline-flex items-center">
                <Field 
                  type="checkbox" 
                  name="consent" 
                  className="form-checkbox h-5 w-5 text-indigo-600" 
                />
                <span className="ml-2 text-gray-700">I have read and agreed to all
                  <a className='text-blue-700' href="/">&nbsp;Terms & Conditions</a>
                </span>
              </label>
              <ErrorMessage 
                name="consent" 
                component="div" 
                className="text-red-500 text-sm mt-1" 
              />
            </div>
            
            <div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
