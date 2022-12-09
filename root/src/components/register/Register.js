import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
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

    const { name, phone, email, password, cpassword } = user;

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const res = await fetch("/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          password,
          cpassword,
        }),
      });

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
      errors.phone = "Phone Number is required!";
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
    <div className="register-container">
      <div className="register-app-wrapper">
        <div>
          <h2 className="register-title">Sign Up</h2>
        </div>
        <form className="register-form-wrapper">
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
            <span className="register-error-data">{formErrors.username}</span>
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
            <span className="register-error-data">{formErrors.password}</span>
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
            <span className="register-error-data">{formErrors.cpassword}</span>
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
  );
};

export default Register;
