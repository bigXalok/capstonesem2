import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlane, FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-brand" onClick={closeMobileMenu}>
          <FaPlane size={24} />
          <span>TravelGo</span>
        </Link>

        <button className="nav-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/transport"
              className={`nav-link ${location.pathname === '/transport' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Transport
            </Link>
          </li>
          <li>
            <Link
              to="/stay"
              className={`nav-link ${location.pathname === '/stay' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Stay
            </Link>
          </li>
          <li>
            <Link
              to="/places"
              className={`nav-link ${location.pathname === '/places' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Places
            </Link>
          </li>
          <li>
            <Link
              to="/expense-plan"
              className={`nav-link ${location.pathname === '/expense-plan' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Expense Plan
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;