import { useState } from 'react';
import { useLogin, useRegister } from '../hooks/useAuth';

const AuthSplit = () => {
  // Login State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const { login, loading: loginLoading, error: loginError } = useLogin('/profile');

  // Register State
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const { register, loading: regLoading, error: regError } = useRegister('/profile');

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(loginEmail, loginPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(regUsername, regEmail, regPassword, regConfirmPassword);
  };

  return (
    <div className="min-h-screen w-full flex flex-row bg-[#212121] text-white relative overflow-hidden">
      
      {/* Branding Header */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          <path d="M5 3v4M3 5h4"/>
        </svg>
        <span className="text-2xl font-bold tracking-tight">Interview-AI</span>
      </div>

      {/* Center Glow and Divider */}
      <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-px bg-gray-700/50 z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[300px] bg-white/[0.02] blur-[80px] rounded-full pointer-events-none"></div>
      </div>

      {/* Register Section (Left, Translated UP) */}
      <div className="w-1/2 flex items-center justify-center p-8 min-h-screen relative z-10 -translate-y-8">
        <div className="w-full max-w-[400px] bg-[#2a2a2a] border border-gray-600/30 rounded-xl p-8 shadow-2xl transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Create account</h2>
            <p className="text-gray-400 text-sm">Join the Interview-AI community</p>
          </div>

          {regError && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-6 text-sm text-center">
              {regError}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-sm text-gray-300">Username</label>
              <input 
                type="text" 
                required 
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
                className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-mono"
                placeholder="Username"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm text-gray-300">Email</label>
              <input 
                type="email" 
                required 
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-mono"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="block text-sm text-gray-300">Password</label>
                <input 
                  type="password" 
                  required 
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-mono"
                  placeholder="••••••••"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm text-gray-300">Confirm Password</label>
                <input 
                  type="password" 
                  required 
                  value={regConfirmPassword}
                  onChange={(e) => setRegConfirmPassword(e.target.value)}
                  className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-mono"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={regLoading}
              className="w-full bg-white text-black hover:scale-[1.02] hover:brightness-110 shadow-lg transition-transform font-medium py-2.5 px-4 rounded-lg mt-6 flex justify-center items-center text-sm group"
            >
              {regLoading ? (
                <svg className="animate-spin h-5 w-5 text-gray-600" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : "Sign Up"}
            </button>
          </form>
        </div>
      </div>

      {/* Login Section (Right, Translated DOWN) */}
      <div className="w-1/2 flex items-center justify-center p-8 min-h-screen relative z-10 translate-y-8">
        <div className="w-full max-w-[400px] bg-[#2a2a2a] border border-gray-600/30 rounded-xl p-8 shadow-2xl transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Welcome back</h2>
            <p className="text-gray-400 text-sm">Sign in to your account</p>
          </div>

          {loginError && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-6 text-sm text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-sm text-gray-300">Email</label>
              <input 
                type="email" 
                required 
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-mono"
                placeholder="you@example.com"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-sm text-gray-300">Password</label>
              <input 
                type="password" 
                required 
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full bg-[#2a2a2a] border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all font-mono"
                placeholder="••••••••"
              />
              <div className="flex justify-end pt-1">
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Forgot password?</a>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loginLoading}
              className="w-full bg-white text-black hover:scale-[1.02] hover:brightness-110 shadow-lg transition-transform font-medium py-2.5 px-4 rounded-lg mt-6 flex justify-center items-center text-sm group"
            >
              {loginLoading ? (
                <svg className="animate-spin h-5 w-5 text-gray-600" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : "Sign In"}
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default AuthSplit;
