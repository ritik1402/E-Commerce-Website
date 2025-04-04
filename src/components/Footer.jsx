import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="footer">
        <div className="foote-container">
            <div className="footer-setion">
                <h1>ShopMate</h1>
                <p>Quality products at the best price.</p>
            </div>

            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Proudcts</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
            {/* Social Media */}
            <div className="footer-section">
                <h3>Follow Us</h3>
                <div className="social-links">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
</div>

            </div>
        </div>
        <p className="footer-bottom">&copy; 2025 ShopMate Store | All Rights Reserved</p>
    </footer>
      
    </div>
  )
}

export default Footer
