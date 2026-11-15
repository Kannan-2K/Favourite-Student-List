import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

const Navbar = () => {
  // Access global favourite students count via useContext
  const { favourites } = useContext(StudentContext);
  const location = useLocation();

  const isCurrent = (path) => location.pathname === path;

  return (
    <header className="navbar-container">
      <nav className="navbar">
        {/* Brand Logo & Name */}
        <Link to="/" className="brand-logo">
          <div className="brand-icon">🎓</div>
          <div className="brand-text">
            <span className="brand-title">StudentPortal</span>
            <span className="brand-subtitle">Directory & Favourites</span>
          </div>
        </Link>

        {/* Navigation Links using React Router Link component */}
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${isCurrent('/') ? 'active' : ''}`}
          >
            <span className="nav-icon">📋</span>
            <span>Student List</span>
          </Link>

          <Link
            to="/favourites"
            className={`nav-link ${isCurrent('/favourites') ? 'active' : ''}`}
          >
            <span className="nav-icon">⭐</span>
            <span>Favourite Students</span>
            <span className={`badge ${favourites.length > 0 ? 'badge-pulse' : ''}`}>
              {favourites.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

