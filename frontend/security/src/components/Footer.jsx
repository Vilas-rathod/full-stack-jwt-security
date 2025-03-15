import React from 'react';
import './Footer.css';

const Footer = () => {
  console.log("Footer"); // This will still log
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 SecureApp. All rights reserved.</p>
        <p className="footer-text">Built with security and simplicity in mind.</p>
        <div className="footer-links">
          <a href="https://example.com/about" target="_blank" rel="noopener noreferrer">About Us</a>
          <a href="https://example.com/contact" target="_blank" rel="noopener noreferrer">Contact</a>
          <a href="https://example.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;