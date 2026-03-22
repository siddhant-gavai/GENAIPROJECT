import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
      });
      if (response.data.token || response.status === 200) {
        navigate('/profile');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212121] text-white p-4 font-sans relative overflow-hidden">
      <div className="w-full max-w-md bg-[#2a2a2a] border border-gray-600/50 rounded-2xl p-8 shadow-2xl transition-all duration-300 relative z-10">
        
        {/* Branding & Title */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
              <path d="M5 3v4M3 5h4"/>
            </svg>
            <h1 className="text-2xl font-bold tracking-tight">Interview-AI</h1>
          </div>
          <h2 className="text-xl font-semibold">Welcome back</h2>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm text-gray-300">Email address</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm text-gray-300">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-white text-black hover:scale-[1.02] hover:brightness-110 shadow-lg transition-transform font-medium py-2.5 px-4 rounded-lg mt-6 flex items-center justify-center text-sm"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-gray-600" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-white hover:underline transition-colors font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
