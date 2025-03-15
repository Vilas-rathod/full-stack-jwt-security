import { NavLink } from 'react-router-dom';

function Navbar({ token, roles, logout }) {
  return (
    <nav className="navbar ">
      <div className="container">
        <h1 className="logo">SecureApp</h1>
        <div className="nav-links">
          <NavLink to="/user">Home</NavLink>
          {!token ? (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/user">User Dashboard</NavLink>
              {roles.includes('ROLE_ADMIN') && <NavLink to="/admin">Admin Dashboard</NavLink>}
              <button onClick={logout} className="logout-btn">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
