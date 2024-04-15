import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'; 

interface User {
  username: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      toast.error('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Retrieve existing users from local storage
    const existingUsersJSON = localStorage.getItem('users');
    const existingUsers: User[] = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    // Check if email already exists
    if (existingUsers.some((user: User) => user.email === email)) {
      toast.error('Email already exists');
      return;
    }

    // Add new user to the array
    const newUser: User = { username, email, password };
    const updatedUsers: User[] = [...existingUsers, newUser];

    // Save updated user array back to local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Clear form fields after successful signup
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    toast.success('Successfully signed up');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/" className="already-user">
        Already have an account? Login
      </Link>
    </div>
  );
}
