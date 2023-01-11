/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../../styles/Login.css";
import { login } from "../../api/api";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    //calling login api
    const res = await login(email, password);

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credientials");
    } else {
      window.alert("Login Successful");
      navigate("/");
    }
  };

  return (
    <>
      {/* <header className="login_main_header">
        <div className="login_header_container">
          <div className="login_header_logo">Real Estate</div>
        </div>
      </header> */}
      <div className="login_webpage" data-testid="loginpage">
        <div className="login_left">
          <div className="login_left_data">
            <h3 className="login_left_heading">
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
        <div className="login_right">
          <div className="login_right_login">
            <div className="login_container">
              <div className="login_heading">Login</div>
              <div className="login_wrapper">
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
                <div className="login_need">Need help?</div>
                <div className="login_using">Or login using</div>
                <div className="login_with_social">
                  <div className="login_field">
                    <div className="login_social1">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEUYd/L///8NdPJTj/QAcfIAbPH7/v8Ab/E4gvO/1Pp6qPYAafHv9v7h6/2uxfjF2Pva5v1mnPWFrvcaevKhwPmOtfdqn/W4z/qWuvhVk/Q1hfOKsfdjmfV1pfZMjPQlfvPM3vsobh/GAAADrUlEQVRoga2a6aLiIAyFEVnsNrbWtV7n+v5POVRrrTSBQ53zt/I1AgkhqVgBKuvTOb90rXBqu0t+PtUlMk7EfmC217XUVkkpBkmprJbr69Z8BzdZoxxXEHJvUE0W5ofg1bXVJHh8gW6v1SJ43WgVIj+ldFMnw6tj2Oip+UfOehpudhawerTe7ui5J+GZsDi6lxUZCDc5OiNvSZ0Txs/hVZswI2+pdj7zM3gmk80ejJezqfHh+2IZulexD8MPejlbCH0IwXdfsR19x8O/s3tu+xS+/5rt6HsaniWtJbenioyCV2gsUbbQ4rdrW10U2lp/68pqDjctBJe6252qpzcaU95P+1v3OVC2ZgbPEb+URXOfufkfLxCp3IdnyGLa7u6TCbjQ2SfcsAs0UZETaAIuhfmA74AYq88kew4XdjeFVwDb0nZTcGGrCbyJr6bsGDYFV8c3vAZW07LnMAEXuh7hTXw1ZcOxSfjz5z28AgzXfAJBwYWuBvgVmPENy6bh6vqEmzZuuDokwkUfBATmnHrumvdD8/NQR65Y76YCWk4h/ZS56rRLfJ+iRzQ93CAR69cLV3U8R1DGwbeAd8q/nuGb+L+1WwcH9oqQa2++gUPL7RexWiNT7sEPmEGiRA4gH36BBpUCiSszOPJvnVOLE5ItL4LbkzhDZ+cSuDqLfMmcQ3CZC2xtFsEvogN+tgzu0EBIXAoPo+WoGfwt5DWENm/9fMJ/Jo82i9i6dNngS59wM3lQLoUjqgNeyM86COcPsjawFUH4mbW8CzgRCL9xAOdEvPuDcPZQcu7PBy4QzhrnAhcfcjF4ya6nC7n8YYHB7/z4OnDMYXA63+rljjk+CGFw9qLWH9B8aoHB2a38SC3YpAiD05miGJIiNp2Tt3yUl+Qexgc3ZvCQzvGJqFQvWS+d+2tfT9jt8ExEkRR6wUk0pNBA8r8APiT/QCqaDn9dW4ALVzp8vHDF7xbJ8PdVMX7JTYZPLrmrY2TWU+HT63m0sJAK/ygsxEoiifDPkkismJMG94s5ETdNg/tlqEgBLQk+L6CFS38pcKr0FyxaJsGJomWw3JoAp8utoUIxDucKxYESNwznS9x8cR6Fh4rzrO0gPNxW4BoiGDzWEGFaOQgcaOXQTSgADjWhyPZZFI62z1ZE4y8Gxxt/q3nLMgxPa1mu/GZrCJ7cbO01bRPz8EVt4of1Y4ObgS9vcPcy2fHRmifgfWv++EVr/snvPyoo/Cy3+A8fFQwqa2+nZdjnEP8A/SsrcWyWZckAAAAASUVORK5CYII="
                        alt="logo"
                      />
                      <span>Facebook</span>
                    </div>
                    <div className="login_social2">
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
            <div className="login_signup">
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
      {/* <footer className="login_footer">
        <div className="login_inner_footer">Real Estate</div>
        <div className="login_footer_links">
          <span>About</span>
          <span>Terms and Conditions</span>
          <span>Privacy</span>
        </div>
      </footer> */}
    </>
  );
};

export default Login;
