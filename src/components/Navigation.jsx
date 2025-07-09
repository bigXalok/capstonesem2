import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mountain } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/places", label: "Places" },
    { path: "/stay", label: "Stay" },
    { path: "/transport", label: "Transport" },
    { path: "/expense-plan", label: "Expense Plan" },
  ];
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <Mountain size={32} />
          <span>WanderLand</span>
        </Link>

        <ul className={`nav-menu ${isMenuOpen && "active"}`}>
          <li>
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" && "active"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/places"
              className={`nav-link ${location.pathname === "/places" && "active" }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Places
            </Link>
          </li>
          <li>
            <Link
              to="/stay"
              className={`nav-link ${location.pathname === "/stay" && "active"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Stay
            </Link>
          </li>
          <li>
            <Link
              to="/transport"
              className={`nav-link ${location.pathname === "/transport" && "active"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Transport
            </Link>
          </li>
          <li>
            <Link
              to="/expense-plan"
              className={`nav-link ${location.pathname === "/expense-plan" && "active"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Expense Plan
            </Link>
          </li>
        </ul>
        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};
export default Navigation;
