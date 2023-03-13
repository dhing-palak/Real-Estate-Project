import React from "react";
import "../../styles/Modal.scss";

const Modal = ({ isOpen, handleClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchParams = new URLSearchParams(formData);
    const homepageURL = `http://localhost:3000/?${searchParams.toString()}`;
    window.location.href = homepageURL;
  };

  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <button className="close" onClick={handleClose} onKeyDown={handleClose}>
          &times;
        </button>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-form-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div className="modal-form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
          </div>
          <div className="modal-form-field">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required pattern="^\d{10}$"/>
          </div>
          <button className="modal-form-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;