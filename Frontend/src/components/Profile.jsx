import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [logoutLoading, setLogoutLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/profile');
        setUser(response.data.user);
      } catch (err) {
        setError('Session expired or unauthorized. Please login again.');
        setTimeout(() => navigate('/auth'), 2000);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await axios.post('http://localhost:3000/api/auth/logout');
      navigate('/auth');
    } catch (err) {
      console.error('Logout failed:', err);
      navigate('/auth');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111111] p-4 text-white">
        <div className="w-8 h-8 border-2 border-[#333] border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#111111] font-sans text-white p-4">
        <div className="mb-8 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4M3 5h4"/></svg>
            <h1 className="text-2xl font-bold tracking-tight">Interview-AI</h1>
          </div>
        </div>
        <div className="w-full max-w-[400px] bg-[#171717] border border-[#2a2a2a] p-6 rounded-xl text-center shadow-2xl">
          <p className="text-red-400 text-sm mb-2">{error}</p>
          <p className="text-[#a1a1a1] text-xs">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#111111] font-sans text-white p-4">
      
      {/* Logo & Title */}
      <div className="mb-8 text-center flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4M3 5h4"/></svg>
          <h1 className="text-2xl font-bold tracking-tight">Interview-AI</h1>
        </div>
        <p className="text-[#a1a1a1] text-sm">Your Developer Profile</p>
      </div>

      <div className="w-full max-w-[400px] bg-[#171717] border border-[#2a2a2a] rounded-xl p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#111111] border border-[#333] rounded-full flex items-center justify-center mb-4 text-xl font-bold">
            {user?.username?.charAt(0) || 'U'}
          </div>
          <h2 className="text-xl font-semibold text-white tracking-tight">{user?.username}</h2>
          <p className="text-[#a1a1a1] text-sm mt-1">{user?.email}</p>
          <div className="mt-4 text-xs text-[#71717a] font-mono">
            ID: {user?._id}
          </div>

          <div className="w-full border-t border-[#2a2a2a] my-8"></div>

          <button 
            onClick={handleLogout}
            disabled={logoutLoading}
            className="w-full bg-[#111111] border border-[#333] hover:bg-[#1f1f1f] text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex justify-center items-center text-sm"
          >
            {logoutLoading ? (
              <svg className="animate-spin h-4 w-4 text-gray-500" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "Sign Out"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
