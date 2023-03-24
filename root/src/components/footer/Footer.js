import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer" data-testid="footerpage">
        <section className="footer-main">
          <div className="fcontainer footer-main-section">
            <div className="footer-main-left">
              <h2 className="footer-main-title">About Us </h2>
              <div className="footer-main-content">
                RealEstate is a full stack service provider for all real estate
                needs, with 15+ services including home loans, pay rent, packers and
                movers, legal assistance, property valuation, and expert advice. As
                the largest platform for buyers and sellers of property to connect in
                a transparent manner, RealEstate has an active base of over 10 lakh
                property listings.
              </div>
              <ul className="footer-main-social-links">
                <li>
                  <a href="https://www.facebook.com">
                    <i
                      className="fab fa-facebook-f fontawesome-style"
                      data-testid="facebook"
                    ></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i
                      className="fab fa-instagram fontawesome-style"
                      data-testid="instagram"
                    ></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">
                    <i
                      className="fab fa-youtube fontawesome-style"
                      data-testid="youtube"
                    ></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/">
                    <i
                      className="fab fa-twitter fontawesome-style"
                      data-testid="twitter"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-main-right">
              <h2 className="footer-main-title">Properties in India</h2>
              <div className="footer-main-right-content-1">
                <Link to="/" className="footer-main-right-link">
                  Property in New Delhi |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  Property in Mumbai |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  Property in Chennai |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  Property in Pune |
                </Link>
              </div>
              <h2 className="footer-main-title">New Projects in India</h2>
              <div className="footer-main-right-content-1">
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  Property in Noida |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  Property in Gurgaon |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  Property in Bangalore |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  Property in Ahmedabad |
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-secondary">
          <div className="fcontainer">
            <ul className="footer-secondary-links">
              <li>
                <Link to="/helpcenter" className="footer-main-right-link">
                  Help center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer-main-right-link">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="footer-main-right-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="footer-copyright">
          <div className="fcontainer">
            Copyright @ 2022 Real Estate. All rights reserved.
          </div>
        </section>
      </footer>
    </>
  );
};
export default Footer;
