import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="footer__main">
          <div className="container footer__main__section">
            <div className="footer__main__left">
              <div className="footer__main__title">About Us </div>
              <div className="footer__main__content">
                RealEstate is a full stack service provider for all real estate
                needs, with 15+ services including home loans, pay rent, packers and
                movers, legal assistance, property valuation, and expert advice. As
                the largest platform for buyers and sellers of property to connect in
                a transparent manner, RealEstate has an active base of over 10 lakh
                property listings.
              </div>
              <ul className="footer__main__social-links">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f fontawesome-style"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram fontawesome-style"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube fontawesome-style"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter fontawesome-style"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__main__right">
              <div className="footer__main__title">Properties in India</div>
              <div className="footer__main__right__content-1">
                <Link to="/" className="footer__main__right__link">
                  Property in New Delhi |
                </Link>
                <Link to="/" className="footer__main__right__link">
                  {" "}
                  Property in Mumbai |
                </Link>
                <Link to="/" className="footer__main__right__link">
                  {" "}
                  Property in Chennai |
                </Link>
                <Link to="/" className="footer__main__right__link">
                  {" "}
                  Property in Pune |
                </Link>
              </div>
              <div className="footer__main__title">New Projects in India</div>
              <div className="">
                <Link to="/" className="footer__main__right__link">
                  {" "}
                  Property in Noida |
                </Link>
                <Link to="/" className="footer__main__right__link">
                  {" "}
                  Property in Gurgaon |
                </Link>
                <Link to="/" className="footer__main__right__link">
                  {" "}
                  Property in Bangalore |
                </Link>
                <Link to="/" className="footer__main__right__link">
                  {" "}
                  Property in Ahmedabad |
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="footer__secondary">
          <div className="footer">
            <ul className="footer__secondary__links">
              <li>
                <Link to="/helpcenter" className="footer__main__right__link">
                  Help center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer__main__right__link">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="footer__main__right__link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="footer__copyright">
          <div className="footer">
            Copyright @ 2022 Real Estate. All rights reserved.
          </div>
        </section>
      </footer>
    </>
  );
};
export default Footer;
