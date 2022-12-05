import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mushtaq</h1>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/mushtaq-ahamed/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://mail.google.com"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-envelope-alt"></i>
          </a>

          <a
            href="https://github.com/AhemMushtaq"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Mushtaq. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
