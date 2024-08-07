import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

interface User {
  email: string;
  password: string;
  username: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: { email: string, password: string }) => {
    const { email, password } = values;

    
    const existingUsersJSON = localStorage.getItem('users');
    const existingUsers: User[] = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    
    const currentUser = existingUsers.find((user: User) => user.email === email);

    if (currentUser && currentUser.password === password) {
      toast.success(`Successfully logged in as ${currentUser.username}`);
      setTimeout(() => {
        navigate('/home');
      }, 1500); 
    } else {
      toast.error('Incorrect email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form>
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
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <div className="additional-options">
        <div className="register-link">
          <Link to="/signup">New User? Sign Up</Link>
        </div>
        <div className="forgot-password-link">
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
