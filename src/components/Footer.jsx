import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span>TripUp</span>
            </div>
            <p className="footer-description">
              Discover new destinations,
              <br />
              plan your journey, and create memories that last a lifetime.
            </p>
          </div>


          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <Mail size={16} /> <span>travel@TripUp.com</span>
              </li>
              <li>
                <Phone size={16} /> <span>+919988777111</span>
              </li>
              <li>
                <MapPin size={16} /> <span>123 Adventure St, Travel City</span>
              </li>
            </ul>
            <div className="footer-social">
              <a href="#">
                <Facebook size={20} />
              </a>
              <a href="#">
                <Twitter size={20} />
              </a>
              <a href="#">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <p>&copy; 2025 TripUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
