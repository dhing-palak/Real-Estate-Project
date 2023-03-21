import React, { useState } from "react";
import { usercontact } from "../../api/api";
import "../../styles/Modal.scss";

const Modal = ({ isOpen, handleClose }) => {
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    try {
      const res = await usercontact(name, email, phone);
      const data = await res.json();
      console.log(data.message);
      // set submitted to true to render thank you message
      setSubmitted(true);
      // redirect to the homepage
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  

  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <div className="content">
          <h4>Fill out this one-time form</h4>
          <span>Get Owners details over email</span>
          <button className="close" onClick={handleClose} onKeyDown={handleClose}>
            &times;
          </button>
        </div>
        {/* conditionally render thank you message */}
        {submitted ? (
          <div className="thankyou-message">
            <p>Thank you for contacting us!</p>
            <p>We will reach you soon.</p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="modal-form-field">
              {/* <label htmlFor="name">Name:</label> */}
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="modal-form-field">
              {/* <label htmlFor="email">Email:</label> */}
              <input type="email" id="email" name="email" placeholder="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
            </div>
            <div className="modal-form-field">
              {/* <label htmlFor="phone">Phone:</label> */}
              <input type="tel" id="phone" name="phone" placeholder="Mobile Number" required pattern="^\d{10}$"  />
            </div>
            <div className="modal-form-field-check">
              {/* disable checkbox when form is not valid */}
              <input type="checkbox" id="agree" name="agree" required/>&nbsp;
              <label htmlFor="agree">I agree to MagicBricks Terms of Use.</label>
              
            </div>
            <button className="modal-form-button" type="submit" >
              Get Contact Details
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;