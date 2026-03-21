import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/register', {
        username,
        email,
        password
      });
      if (response.data.token || response.status === 201) {
        navigate('/profile');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl shadow-2xl w-full transform transition-all hover:scale-[1.01] duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-slate-400">Join the GENAI community today</p>
      </div>

      {error && (
        <div className="bg-rose-500/10 border border-rose-500/50 text-rose-400 p-3 rounded-xl mb-6 text-sm text-center animate-pulse">
          {error}
        </div>
      )}

      <form onSubmit={handleRegister} className="space-y-5">
        <div className="group">
          <label className="block text-sm font-medium text-slate-300 mb-2 transition-colors group-focus-within:text-indigo-400">Username</label>
          <input 
            type="text" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
            placeholder="johndoe123"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-slate-300 mb-2 transition-colors group-focus-within:text-indigo-400">Email Address</label>
          <input 
            type="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
            placeholder="you@example.com"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-slate-300 mb-2 transition-colors group-focus-within:text-pink-400">Password</label>
          <input 
            type="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all duration-300"
            placeholder="••••••••"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-purple-500/30 transform transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group mt-2"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "Register"}
          </span>
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-slate-400 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-400 hover:text-pink-300 font-semibold transition-colors underline decoration-pink-400/30 underline-offset-4 decoration-2">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
