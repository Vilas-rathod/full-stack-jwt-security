import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import { useState } from 'react';
import './App.css'; // Assuming you'll add styles here
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [roles, setRoles] = useState(JSON.parse(localStorage.getItem('roles')) || []);

  const logout = () => {
    setToken('');
    setRoles([]);
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
  };

  const ProtectedRoute = ({ children, requiredRole }) => {
    if (!token) return <Navigate to="/login" replace />;
    if (requiredRole && !roles.includes(requiredRole)) return <Navigate to="/" replace />;
    return children;
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">SecureApp</h1>
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
            {!token ? (
              <>
                <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Register
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Login
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/user" className={({ isActive }) => (isActive ? 'active' : '')}>
                  User Dashboard
                </NavLink>
                {roles.includes('ROLE_ADMIN') && (
                  <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Admin Dashboard
                  </NavLink>
                )}
                <button onClick={logout} className="logout-btn">
                  Logout
                </button>
             
              </>
            )}
          </div>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/register" element={<Register setToken={setToken} setRoles={setRoles} />} />
          <Route path="/login" element={<Login setToken={setToken} setRoles={setRoles} />} />
          <Route
            path="/user"
            element={
              <ProtectedRoute requiredRole="ROLE_USER">
                <UserDashboard token={token} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="ROLE_ADMIN">
                <AdminDashboard token={token} />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<HomeContent />} />

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;