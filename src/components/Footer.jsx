import '../styles/Footer.css';
import { HiMail } from "react-icons/hi";
import { MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Zaika-e-Khaas is your one-stop destination for delicious meals. We serve quality food with love!</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><HiMail/>zaika_e_khaas@gmail.com</p>
          <p><MdPhone />+92 333 0000000</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Zaika-e-Khaas. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;