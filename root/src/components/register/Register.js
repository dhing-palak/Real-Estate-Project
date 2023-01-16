/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Register.css";
import { register } from "../../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    person: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);

    const { name, phone, person, email, password, cpassword } = user;

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //calling register api
      const res = await register(name, phone, email, person, password, cpassword);

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert(data.error);
        console.log("Invalid Registration");
      } else {
        window.alert("Registration Successful");
        console.log("Registraton Successful");
        navigate("/user/login");
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.username = "Username is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirm Password is required!";
    }

    return errors;
  };

  return (
    <>
      {/* <header className="register_main_header">
        <div className="register_header_container">
          <div className="register_header_logo">Real Estate</div>
        </div>
      </header> */}
      <div className="register_webpage" data-testid="registrationpage">
        <div className="register_left">
          <div className="register_left_data">
            <h3 className="register_left_heading">
              Things you Can Do with <br />
              Real Estate Account
            </h3>
            <ul>
              <li>Post one Single Property for Free</li>
              <li>Set property alerts for your requirements</li>
              <li>Get accessed by over 1 Lakh buyers</li>
              <li>Showcase your property as Rental, PG or for Sale</li>
              <li>Get instant queries over Phone, Email ans SMS</li>
              <li>Performance in search & Track responses & views online</li>
              <li>
                Add detailed property information & multiple photos per listing
              </li>
            </ul>
          </div>
        </div>
        <div className="register_right">
          <div className="register_right_register">
            <div className="register_container">
              <div className="register_heading">Sign Up</div>
              <div className="register_wrapper">
                <form className="register-form-wrapper">
                  <div className="register_person_details">
                    <input
                      type="radio"
                      name="person"
                      value="buyer/owner"
                      id="dot-1"
                      onChange={handleInput}
                    />
                    <input
                      type="radio"
                      name="person"
                      value="agent"
                      id="dot-2"
                      onChange={handleInput}
                    />
                    <input
                      type="radio"
                      name="person"
                      value="builder"
                      id="dot-3"
                      onChange={handleInput}
                    />
                    <span className="register_person_title">I am</span>
                    <div className="register_category">
                      <label htmlFor="dot-1">
                        <span className="dot one"></span>
                        <span className="register_personN">Buyer/Owner</span>
                      </label>
                      <label htmlFor="dot-2">
                        <span className="dot two"></span>
                        <span className="register_personN">Agent</span>
                      </label>
                      <label htmlFor="dot-3">
                        <span className="dot three"></span>
                        <span className="register_personN">Builder</span>
                      </label>
                    </div>
                  </div>
                  <div className="register-input-name">
                    <input
                      className="register-input"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={user.name}
                      onChange={handleInput}
                    ></input>
                    <span className="register-error-data">
                      {formErrors.username}
                    </span>
                  </div>
                  <div className="register-input-phone">
                    <input
                      className="register-input"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      value={user.phone}
                      onChange={handleInput}
                    ></input>
                    <span className="register-error-data">{formErrors.phone}</span>
                  </div>

                  <div className="register-input-email">
                    <input
                      className="register-input"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={handleInput}
                    ></input>
                    <span className="register-error-data">{formErrors.email}</span>
                  </div>

                  <div className="register-input-password">
                    <input
                      className="register-input"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleInput}
                    ></input>
                    <span className="register-error-data">
                      {formErrors.password}
                    </span>
                  </div>

                  <div className="register-input-cpassword">
                    <input
                      className="register-input"
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      placeholder="Confirm Password"
                      value={user.cpassword}
                      onChange={handleInput}
                    ></input>
                    <span className="register-error-data">
                      {formErrors.cpassword}
                    </span>
                  </div>

                  <div className="register-submit-button">
                    <button
                      className="register-form-submit"
                      name="signup"
                      id="signup"
                      value="register"
                      onClick={PostData}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="register-signin-text">
                    Already Registered?{" "}
                    <span
                      className="register-signin-btn"
                      onClick={() => navigate("/user/login")}
                    >
                      Login Now
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="register_footer">
        <div className="register_inner_footer">Real Estate</div>
        <div className="register_footer_links">
          <span>About</span>
          <span>Terms and Conditions</span>
          <span>Privacy</span>
        </div>
      </footer> */}
    </>
  );
};

export default Register;
