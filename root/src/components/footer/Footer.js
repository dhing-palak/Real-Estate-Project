import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.scss";

const Footer = ({ props }) => {
  console.log(props.name);
  return (
    <>
      <footer className="footer" data-testid="footerpage">
        <section className="footer-main">
          <div className="fcontainer footer-main-section">
            <div className="footer-main-left">
              <h2 className="footer-main-title">{props.heading} </h2>
              <div className="footer-main-content">{props.description}</div>
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
              <h2 className="footer-main-title">{props.subheading1}</h2>
              <div className="footer-main-right-content-1">
                <Link to="/" className="footer-main-right-link">
                  {props.city1} |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  {props.city2} |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  {props.city3} |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  {props.city4} |
                </Link>
              </div>
              <h2 className="footer-main-title">{props.subheading2}</h2>
              <div className="footer-main-right-content-1">
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  {props.city5} |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  {props.city6} |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  {props.city7} |
                </Link>
                <Link to="/" className="footer-main-right-link">
                  {" "}
                  {props.city8} |
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
          <div className="fcontainer">{props.copyright}</div>
        </section>
      </footer>
    </>
  );
};
export default Footer;
