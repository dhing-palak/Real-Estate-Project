/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import "../../styles/Login.scss";
import { login } from "../../api/api";
import { AppContext } from "../../state/StateContext";

const Login = () => {
  const { setisLoggedin } = useContext(AppContext);

  const navigate = useNavigate();
  const [showdiv, setShowdiv] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    validateInput({ [e.target.name]: e.target.value });
  };

  const validateInput = (newState) => {
    let isValid = true;
    const errors = {};

    const { email, password } = { ...user, ...newState };

    if (!email) {
      errors.email = "Email is required";
      // setErrorMessage("Please fill the details mention below")
      isValid = false;
    } else if (!email.includes("@") || email.length < 3) {
      errors.email = "Please enter a valid email address.";
      // setErrorMessage("Please fill the details mention below")
      isValid = false;
    }
    // if (!email) {
    //   errors.email = "Email is required";
    //   isValid = false;
    // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(newState.email)) {
    //   errors.email = "Invalid email address";
    //   isValid = false;
    // }

    if (!password) {
      errors.password = "Password is required.";
      // setErrorMessage("Please fill the details mention below")
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
      // setErrorMessage("Please fill the details mention below")
      isValid = false;
    }
    setErrorMessage("Please fill the details mention below");
    setErrors(errors);
    return isValid;
  };

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("showdiv:", showdiv);

    if (!validateInput()) {
      // setErrors({
      //   email: "Email is required.",
      //   password: "Password is required.",
      // });
      setErrorMessage("Please fill the details mention below");
      setShowdiv(true);
      setTimeout(() => {
        setShowdiv(true);
      }, 2000);
      return;
    }

    const { email, password } = user;

    if (!password) {
      setErrors({ password: "Please enter a password." });
      setErrorMessage("invalid email or password");
      setShowdiv(true);
      setTimeout(() => {
        setShowdiv(false);
      }, 2000);
      return;
    }
    try {
      const res = await login(email, password);

      const data = await res.json();
      console.log(data);
      // if (res.status === 200 && data.error) {
      //   setErrors({ email: data.error});
      //   setShowdiv(true);
      //   setTimeout(() => {
      //     setShowdiv(false);
      //   }, 2000);
      console.log(password);
      if (res.status === 200 && !data.error) {
        setisLoggedin(true);
        // navigate("/user/login");
        setShowdiv(true);
        setErrorMessage("Login successful.");
        setTimeout(() => {
          setShowdiv(false);
          navigate("/");
        }, 2000);
      } else {
        setErrorMessage("Invalid email or password.");
        setShowdiv(true);
        setTimeout(() => {
          setShowdiv(true);
        }, 2000);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      setShowdiv(true);
      setTimeout(() => {
        setShowdiv(false);
      }, 2000);
    }

    // try {
    //   const res = await login(email, password);

    //   // const data = await res.json();
    //   // if (res.status === 200 && data.error) {
    //   //   setErrors({ email: data.error});
    //   //   setShowdiv(true);
    //   //   setTimeout(() => {
    //   //     setShowdiv(false);
    //   //   }, 2000);
    //   console.log(password)
    //   if (res.status === 400 || !password ) {
    //     setErrorMessage("Invalid email or password.");
    //     setShowdiv(true);
    //     setTimeout(() => {
    //       setShowdiv(true);
    //     }, 2000);
    //   } else {
    //     console.log(errorMessage)
    //     setisLoggedin(true);
    //     navigate("/");
    //     setShowdiv(true);
    //     setErrorMessage("Login successful.");
    //     setTimeout(() => {
    //       setShowdiv(false);
    //     }, 2000);
    //   }
    // } catch (error) {
    //   setErrorMessage("An error occurred. Please try again later.");
    //   setShowdiv(true);
    //   setTimeout(() => {
    //     setShowdiv(false);
    //   }, 2000);
    // }
  };

  return (
    <>
      <div className="login-webpage" data-testid="loginpage">
        <div className="login-left">
          <div className="login-left-data">
            <h3 className="login-left-heading">
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
        <div className="login-right">
          <div className="login-right-login">
            <div className="login-container">
              {showdiv && (
                <div className="login-message-block">
                  <div className="login-message-data">
                    <div className="login-message-display">
                      {errorMessage || "Login successful."}
                    </div>
                  </div>
                </div>
              )}
              <div className="login-heading">Login</div>
              <div className="login-wrapper">
                <form className="login-form-wrapper" method="POST" id="login-form">
                  <div className="login-input-email">
                    <input
                      className="login-input"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={handleChange}
                    ></input>
                    {errors.email && (
                      <div className="error-message">{errors.email}</div>
                    )}
                  </div>
                  <div className="login-input-password">
                    <input
                      className="login-input"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleChange}
                    ></input>
                    {errors.password && (
                      <div className="error-message">{errors.password}</div>
                    )}
                  </div>
                  <div className="login-submit-button" data-testid="buttondiv">
                    <button
                      className="login-form-submit"
                      name="signin"
                      id="signin"
                      value="log in"
                      onClick={loginUser}
                    >
                      Log In
                    </button>
                  </div>
                </form>
                <div className="login-need">Need help?</div>
                <div className="login-using">Or login using</div>
                <div className="login-with-social">
                  <div className="login-field">
                    <div className="login-social1">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEUYd/L///8NdPJTj/QAcfIAbPH7/v8Ab/E4gvO/1Pp6qPYAafHv9v7h6/2uxfjF2Pva5v1mnPWFrvcaevKhwPmOtfdqn/W4z/qWuvhVk/Q1hfOKsfdjmfV1pfZMjPQlfvPM3vsobh/GAAADrUlEQVRoga2a6aLiIAyFEVnsNrbWtV7n+v5POVRrrTSBQ53zt/I1AgkhqVgBKuvTOb90rXBqu0t+PtUlMk7EfmC217XUVkkpBkmprJbr69Z8BzdZoxxXEHJvUE0W5ofg1bXVJHh8gW6v1SJ43WgVIj+ldFMnw6tj2Oip+UfOehpudhawerTe7ui5J+GZsDi6lxUZCDc5OiNvSZ0Txs/hVZswI2+pdj7zM3gmk80ejJezqfHh+2IZulexD8MPejlbCH0IwXdfsR19x8O/s3tu+xS+/5rt6HsaniWtJbenioyCV2gsUbbQ4rdrW10U2lp/68pqDjctBJe6252qpzcaU95P+1v3OVC2ZgbPEb+URXOfufkfLxCp3IdnyGLa7u6TCbjQ2SfcsAs0UZETaAIuhfmA74AYq88kew4XdjeFVwDb0nZTcGGrCbyJr6bsGDYFV8c3vAZW07LnMAEXuh7hTXw1ZcOxSfjz5z28AgzXfAJBwYWuBvgVmPENy6bh6vqEmzZuuDokwkUfBATmnHrumvdD8/NQR65Y76YCWk4h/ZS56rRLfJ+iRzQ93CAR69cLV3U8R1DGwbeAd8q/nuGb+L+1WwcH9oqQa2++gUPL7RexWiNT7sEPmEGiRA4gH36BBpUCiSszOPJvnVOLE5ItL4LbkzhDZ+cSuDqLfMmcQ3CZC2xtFsEvogN+tgzu0EBIXAoPo+WoGfwt5DWENm/9fMJ/Jo82i9i6dNngS59wM3lQLoUjqgNeyM86COcPsjawFUH4mbW8CzgRCL9xAOdEvPuDcPZQcu7PBy4QzhrnAhcfcjF4ya6nC7n8YYHB7/z4OnDMYXA63+rljjk+CGFw9qLWH9B8aoHB2a38SC3YpAiD05miGJIiNp2Tt3yUl+Qexgc3ZvCQzvGJqFQvWS+d+2tfT9jt8ExEkRR6wUk0pNBA8r8APiT/QCqaDn9dW4ALVzp8vHDF7xbJ8PdVMX7JTYZPLrmrY2TWU+HT63m0sJAK/ygsxEoiifDPkkismJMG94s5ETdNg/tlqEgBLQk+L6CFS38pcKr0FyxaJsGJomWw3JoAp8utoUIxDucKxYESNwznS9x8cR6Fh4rzrO0gPNxW4BoiGDzWEGFaOQgcaOXQTSgADjWhyPZZFI62z1ZE4y8Gxxt/q3nLMgxPa1mu/GZrCJ7cbO01bRPz8EVt4of1Y4ObgS9vcPcy2fHRmifgfWv++EVr/snvPyoo/Cy3+A8fFQwqa2+nZdjnEP8A/SsrcWyWZckAAAAASUVORK5CYII="
                        alt="logo"
                      />
                      <span>Facebook</span>
                    </div>
                    <div className="login-social2">
                      <img
                        src="https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
                        alt="logo"
                      />
                      <span>Google</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-signup">
              <div className="login-signup-text">
                New to Real Estate?{" "}
                <span
                  className="login-signup-btn"
                  onClick={() => navigate("/user/register")}
                >
                  Sign Up
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
