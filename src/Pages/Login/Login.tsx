import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

interface User {
  email: string;
  password: string;
}


export default function Login() {
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Retrieve existing users from local storage
    const existingUsersJSON = localStorage.getItem('users');
    const existingUsers: User[] = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    // Find the user by email
    const currentUser = existingUsers.find((user: User) => user.email === useremail);

    if (currentUser && currentUser.password === password) {
    
      window.location.href = '/home';
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="useremail">Email:</label>
          <input
            type="text"
            id="useremail"
            value={useremail}
            onChange={(e) => setUseremail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="additional-options">
        <div className="register-link">
          <Link to="/signup">New User? Sign Up</Link>
        </div>
        <div className="forgot-password-link">
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
      </div>
    </div>
  );
}

