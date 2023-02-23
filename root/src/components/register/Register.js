/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Register.scss";
import { register } from "../../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [showdiv, setShowdiv] = useState(false);
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

  const validate = (values) => {
    let errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const phoneno = /^[0-9]{10}\s*$/;
    // const nameregex = /^[A-Z]{1}[a-z]\s*/;

    if (!values.name.trim()) {
      errors.name = "Name is required";
    } else if (!/[A-Z][a-z](\s[A-Z][a-z])*/.test(values.name)) {
      errors.name =
        "Name should be in alphabets only and first letter of name should be in capital!";
    } else if (values.name.length < 3) {
      errors.name = "Name should be atleast 3 letters";
    } else if (values.name.length > 20) {
      errors.name = "Name should be less than 20 letters";
    }

    if (!values.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^[0-9]+$/.test(values.phone)) {
      errors.phone = "Invalid phone number";
    } else if (values.phone.length !== 10) {
      errors.phone = "Phone number should be 10 digits";
    }

    if (!values.person) {
      errors.person = "Please select your role";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!values.cpassword) {
      errors.cpassword = "Please confirm your password";
    } else if (values.cpassword !== values.password) {
      errors.cpassword = "Passwords do not match";
    }

    return errors;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errors = validate({ ...user, [name]: value });
    setFormErrors((prevState) => ({ ...prevState, [name]: errors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(user);
    setFormErrors(errors);
    setIsSubmit(true);
    setShowdiv(true);

    try {
      const { name, phone, person, email, password, cpassword } = user;

      if (Object.keys(errors).length === 0 && isSubmit) {
        // calling register api
        const res = await register(name, phone, email, person, password, cpassword);
        const data = await res.json();

        if (res.status === 422 || !data) {
          // window.alert(data.error);
          console.log("Invalid Registration");
        } else {
          // window.alert("Registration Successful");
          console.log("Registration Successful");
          navigate("/user/login");
        }
      }
    } catch (error) {
      console.log("Error occurred during registration:", error);
    }
  };

  return (
    <>
      {/* <header className="register_main_header">
        <div className="register_header_container">
          <div className="register_header_logo">Real Estate</div>
        </div>
      </header> */}
      <div className="register-webpage" data-testid="registrationpage">
        <div className="register-left">
          <div className="register-left-data">
            <h3 className="register-left-heading">
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

        <div className="register-right">
          <div className="register-right-register">
            <div className="register-container">
              {showdiv ? (
                <div className="register-message-block">
                  <div className="register-message-data">
                    <div className="register-message-display">
                      {formErrors.name ||
                      formErrors.phone ||
                      formErrors.person ||
                      formErrors.email ||
                      formErrors.password ||
                      formErrors.cpassword
                        ? "Please fill the details mention below: "
                        : "Registration Sucesssful"}
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              <div className="register-heading">Sign Up</div>
              <div className="register-wrapper">
                <form className="register-form-wrapper">
                  <div className="register-person-details">
                    <input
                      type="radio"
                      name="person"
                      value="buyer/owner"
                      id="dot-1"
                      onChange={handleInput}
                      onBlur={handleBlur}
                    />
                    <input
                      type="radio"
                      name="person"
                      value="agent"
                      id="dot-2"
                      onChange={handleInput}
                      onBlur={handleBlur}
                    />
                    <input
                      type="radio"
                      name="person"
                      value="builder"
                      id="dot-3"
                      onChange={handleInput}
                      onBlur={handleBlur}
                    />
                    <span className="register-person-title">I am</span>
                    <div className="register-category">
                      <label htmlFor="dot-1">
                        <span className="dot one"></span>
                        <span className="register-personN">Buyer/Owner</span>
                      </label>
                      <label htmlFor="dot-2">
                        <span className="dot two"></span>
                        <span className="register-personN">Agent</span>
                      </label>
                      <label htmlFor="dot-3">
                        <span className="dot three"></span>
                        <span className="register-personN">Builder</span>
                      </label>
                    </div>

                    <span className="register-error-data">{formErrors.person}</span>
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
                      onBlur={handleBlur}
                    ></input>
                    <span className="register-error-data">{formErrors.name}</span>
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
                      onBlur={handleBlur}
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
                      onBlur={handleBlur}
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
                      onBlur={handleBlur}
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
                      onBlur={handleBlur}
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
                      onClick={handleSubmit}
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
    </>
  );
};

export default Register;
