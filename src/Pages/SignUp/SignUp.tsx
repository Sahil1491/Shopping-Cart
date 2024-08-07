import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'; 

interface User {
  username: string;
  email: string;
  password: string;
}

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUp: React.FC = () => {
  const handleSubmit = (values: { username: string, email: string, password: string }) => {
    const { username, email, password } = values;

    const existingUsersJSON = localStorage.getItem('users');
    const existingUsers: User[] = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    if (existingUsers.some(user => user.email === email)) {
      toast.error('Email already exists');
      return;
    }

    const newUser: User = { username, email, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    toast.success('Successfully signed up');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
      <Link to="/" className="already-user">Already have an account? Login</Link>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
