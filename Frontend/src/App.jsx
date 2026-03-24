import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './auth/pages/Login';
import Register from './auth/pages/Register';
import Profile from './components/Profile';
import Home from './pages/Home';

const ProtectedRoute = () => {
  const user = localStorage.getItem('user');
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

const PublicRoute = () => {
  const user = localStorage.getItem('user');
  return user ? <Navigate to="/" replace /> : <Outlet />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#212121] text-white font-sans selection:bg-white/20 selection:text-white flex flex-col">
        <main className="flex-grow w-full h-full relative overflow-hidden">
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
