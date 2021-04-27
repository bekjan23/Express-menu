import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content container">
        <p className="footer__name">© 2021 My Project name.</p>
        <div className="logo footer__logo">Express<span className="logo-green">Menu</span></div>
        <div className="footer__text">
          <p className="footer__text-1">Terms and conditions</p>
          <p className="footer__text-1">How it works</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
