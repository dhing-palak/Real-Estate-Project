import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <section className="contact-section">
          <div className="contact-section-container">
            <div className="contact-contactus">
              <div className="contact-contactus-heading">Contact Us</div>
              <div className="contact-contactus-text">
                For any assistance or enquiry, please free to reach out to us. We
                love to help you.{" "}
              </div>
            </div>
            <div className="contact-phone">
              <div className="contact-phone-heading">Phone:</div>
              <div className="contact-phone-text">9981475203</div>
            </div>
            <div className="contact-email">
              <div className="contact-email-heading">Email:</div>
              <div className="contact-email-text">
                propertyservices@realestate.com
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
