import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="container footer__content ">
        <p className="footer__name">© 2021 My Project name.</p>
        <div className="logo footer__logo">Express<span className="logo-green">Menu</span></div>
        <p className="footer__text">Terms and conditions <span className="footer__text-2">How it works</span></p>
      </div>
    </div>
  )
}

export default Footer
