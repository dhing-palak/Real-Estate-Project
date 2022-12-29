import React from "react";
import "../styles/Helpcenter.css";

function Helpcenter() {
  return (
    <>
      <helpcenter>
        <div className="helpcenter-container">
          <div className="helpcenter-main">
            <div className="helpcenter-title">Frequently Asked Questions</div>

            <div
              className="helpcenter-title p-1"
              style={{ backgroundColor: "#f3efe0" }}
            >
              <div className="helpcenter-title"> 1. How to Register?</div>
            </div>
            <p>To create your account, follow these steps:</p>
            <ul className="helpcenter_list_content">
              <li>Step 1: Enter your Correct name, mobile number and Email id.</li>
              <li>
                Step 2: Enter a strong password and Re-enter it to confirm Password.
              </li>
              <li>click `&apos Confirm`. Your account will be created.</li>
            </ul>
            <div
              className="helpcenter-title p-1"
              style={{ backgroundColor: "#f3efe0" }}
            >
              <div className="helpcenter-title">2. How to Login?</div>
            </div>
            <p>To login your account, follow these steps:</p>
            <ul className="helpcenter_list_content">
              <li>Step 1: Enter your Username and Password.</li>
              <li>
                click `&apos Confirm`. Your account will be Login to your account.
              </li>
            </ul>
            <div
              className="helpcenter-title p-1"
              style={{ backgroundColor: "#f3efe0" }}
            >
              <div className="helpcenter-title">
                3. How do I Deactivate my account?
              </div>
            </div>
            <p>To de-activate your account, follow these steps:</p>
            <ul className="helpcenter_list_content">
              <li>
                {" "}
                Step 1: Login into your Magicbricks account with your username &
                password.
              </li>
              <li>
                Step 2: On the top banner, click on `&apos My Activity / My
                Dashboard` and select `&apos my profile`
              </li>
              <li>
                Step 3: Proceed to `&apos Profile Details` section. Here, click onnpm
                `&apos Deactivate account`.
              </li>
              <li>
                Step 4: You will get a Verification Code on your registered mobile
                no. & email id.
              </li>
              <li>
                Enter the 3 digit verification code sent and click `&apos Confirm`.
                Your account will be de-activated.
              </li>
            </ul>
            <div
              className="helpcenter-title p-1"
              style={{ backgroundColor: "#f3efe0" }}
            >
              <div className="helpcenter-title">
                4. When will my Property become visible on the site?
              </div>
            </div>
            <p>
              It takes maximum 24hours for a property to get screened and become
              visible on search.
            </p>
          </div>
        </div>
      </helpcenter>
    </>
  );
}

export default Helpcenter;
