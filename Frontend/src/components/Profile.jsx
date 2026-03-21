import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [logoutLoading, setLogoutLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/profile');
        setUser(response.data.user);
      } catch (err) {
        setError('Session expired or unauthorized. Please login again.');
        setTimeout(() => navigate('/login'), 2000);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await axios.post('http://localhost:3000/logout');
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
      // Force exit anyway on error since cookie is possibly cleared backend 
      navigate('/login');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
        <p className="text-indigo-400 font-medium animate-pulse">Loading secure profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-rose-500/10 border border-rose-500/50 text-rose-400 p-6 rounded-2xl shadow-2xl w-full text-center">
        <p className="font-medium text-lg">{error}</p>
        <p className="text-sm mt-2 opacity-75">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-10 rounded-3xl shadow-2xl w-full max-w-lg transform transition-all duration-500 hover:shadow-indigo-500/20">
      <div className="flex flex-col items-center text-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-28 h-28 bg-slate-900 rounded-full flex items-center justify-center border-2 border-slate-700 overflow-hidden">
            <span className="text-4xl font-extrabold bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-transparent uppercase">
              {user?.username?.charAt(0) || 'U'}
            </span>
          </div>
        </div>

        <h2 className="mt-6 text-3xl font-bold text-white tracking-tight">{user?.username}</h2>
        <p className="mt-1 text-slate-400 bg-slate-900/50 px-4 py-1.5 rounded-full border border-slate-800 text-sm mt-3 inline-flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {user?.email}
        </p>

        <div className="mt-10 w-full space-y-4">
          <div className="bg-slate-900/50 rounded-2xl p-4 border border-slate-800 flex items-center justify-between">
            <span className="text-slate-400 text-sm font-medium">Account ID</span>
            <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">{user?._id}</span>
          </div>
          
          <button 
            onClick={handleLogout}
            disabled={logoutLoading}
            className="w-full bg-slate-700 hover:bg-rose-500/20 border border-slate-600 hover:border-rose-500/50 text-slate-300 hover:text-rose-400 font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            {logoutLoading ? (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
