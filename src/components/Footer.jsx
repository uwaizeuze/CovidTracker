import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer__container">
        <h1 className="footer__title">copyRight © {year} </h1>
      </footer>
    </>
  );
};

export default Footer;
