import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import LoginForm from '../features/auth/components/LoginForm';
import RegisterForm from '../features/auth/components/RegisterForm';
import AuthPage from '../features/auth/pages/AuthPage';
import InterviewPage from '../features/ai/pages/InterviewPage';
import Profile from '../components/Profile';
import Home from '../pages/Home';

const ProtectedRoute = () => {
  const user = localStorage.getItem('user');
  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

const PublicRoute = () => {
  const user = localStorage.getItem('user');
  return user ? <Navigate to="/" replace /> : <Outlet />;
};

const AppRoutes = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#212121] text-white font-sans selection:bg-white/20 selection:text-white flex flex-col">
        <main className="flex-grow w-full h-full relative overflow-hidden">
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/interview" element={<InterviewPage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AppRoutes;
