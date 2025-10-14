import React, { useState } from 'react';
import axios from '../services/api';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/auth/login', { email, password });

      // Save token, user data & role
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user || { name: email.split('@')[0], email }));
      localStorage.setItem('role', data.role || 'user');

      toast.success('Login successful!');
      navigate('/dashboard'); // redirect to main dashboard
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          autoComplete="current-password"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition mb-4"
        >
          Login
        </button>

        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">Or try demo access:</p>
          <button
            type="button"
            onClick={() => {
              // Demo login
              const demoUser = { name: 'Demo User', email: 'demo@steellogistics.com' };
              localStorage.setItem('token', 'demo-token-12345');
              localStorage.setItem('user', JSON.stringify(demoUser));
              localStorage.setItem('role', 'user');
              toast.success('Demo login successful!');
              navigate('/dashboard');
            }}
            className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
          >
            Demo Login
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Register here
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
