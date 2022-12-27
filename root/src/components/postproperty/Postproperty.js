import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Postproperty.css";
import { postproperty } from "../../api/api";

const Postproperty = () => {
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    iam:"",
    name: "",
    email: "",
    phone: "",
    propertyfor:"",
    city: "",
    locality: "",
    rooms:"",
    propertytype:"",
    area:"",
    floors:"",
    price:"",
    status:"",
    description:"",

  });

 // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setProperty({ ...property, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    // setFormErrors(validate(user));
    // setIsSubmit(true);

    const { iam, name, email, phone, propertyfor, city, locality, rooms, propertytype, area, floors, price, status,description } = property;

     //calling login api
     const res = await postproperty ( iam, name, email, phone, propertyfor, city, locality, rooms, propertytype, area, floors, price, status,description );

    // if (Object.keys(formErrors).length === 0 && isSubmit) {
      // const res = await fetch("/post/property", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     iam,
      //     name,         
      //     email,
      //     phone,
      //     propertyfor,
      //     city,
      //     locality,
      //     rooms,
      //     propertytype,
      //     area,
      //     floors,
      //     price,
      //     status,
      //     description
      //   }),
      // });

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert(data.error);
        console.log("Invalid Property");
      } else {
        window.alert(" Successfully Added Property");
        console.log(" Successfully Added Property");
        navigate("/");
      }
    // }
  };

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.name) {
  //     errors.username = "Username is required!";
  //   }
  //   if (!values.phone) {
  //     errors.phone = "Phone number is required!";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
    // if (!values.password) {
    //   errors.password = "Password is required!";
    // } else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters!";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters!";
    // }
    // if (!values.cpassword) {
    //   errors.cpassword = "Confirm Password is required!";
    // }

  //   return errors;
  // };

  return (
    <>
    <div className="postproperty_webpage"> 
        
          <div className="postproperty_left_register">
            <div className="postproperty_container">
              <div className="postproperty_heading">
		        <span><h1 className="highLight">Sell or Rent your Property</h1> 
                <h4> We've over 15 Lac buyers and tenants for you!</h4></span>
              </div>
              <div className="postproperty__offer__block">	
	  	        <div className="postproperty_offer_data">
	  		    <div className="postproperty__offer__heading">You are posting this property for <span className="postproperty__offer__free">FREE!</span></div>
	  		    <div className="postproperty__offer__list">
	  			<div className="postproperty__offer__listitems"><span className="postproperty__offer__bold">Free</span> Professional Photoshoot</div>
	  			<div className="postproperty__offer__listitems">Get Contact Details of upto <span className="postproperty__offer__bold">5</span> Responses</div>
	  			<div className="postproperty__offer__listitems">Access to <span className="postproperty__offer__bold">15 Lac</span> Buyers &amp; Tenants</div>
	  		</div>
	  	</div>
	</div>

              <div className="register_wrapper">           
                <form className="register-form-wrapper">
                <div class="secHeading">Personal Details</div>
                
                <div class="formElement">
            		<div class="formLabel">I am</div>
	                <div class="formValue">

                  <div className="register_input_iam">
                    <input
                      type="radio"
                      name="iam"
                      value="owner"
                      id="dot-1"
                      onChange={handleInput}
                    />
                    <input
                      type="radio"
                      name="iam"
                      value="agent"
                      id="dot-2"
                      onChange={handleInput}
                    />
                    <input
                      type="radio"
                      name="iam"
                      value="builder"
                      id="dot-3"
                      onChange={handleInput}
                    />
                    {/* <span className="register_person_title">I am</span> */}
                    <div className="register_category">
                      <label for="dot-1">
                        <span className="dot one"></span>
                        <span className="register_iam">Owner</span>
                      </label>
                      <label for="dot-2">
                        <span className="dot two"></span>
                        <span className="register_iam">Agent</span>
                      </label>
                      <label for="dot-3">
                        <span className="dot three"></span>
                        <span className="register_iam">Builder</span>
                      </label>
                    </div>
                  </div>
                  </div>
                  </div>
	        
                  <div className="register-input-name">                    
                    <input
                      className="register-input"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your Name"
                      value={property.name}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.username}
                    </span> */}
                  </div>                

                  <div className="register-input-email">
                    <input
                      className="register-input"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your Email - id"
                      value={property.email}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.email}
                    </span> */}
                  </div>
                  <div className="register-input-phone">
                    <input
                      className="register-input"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your Phone Number"
                      value={property.phone}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.phone}
                    </span> */}
                  </div>
                  

                  <div class="formElement">
            		<div class="formLabel">For</div>
	                <div class="formValue">
	                
                  <div className="register_input_propertyfor">
                    <input
                      type="radio"
                      name="propertyfor"
                      value="sale"
                      id="dot-4"
                      onChange={handleInput}
                    />
                    <input
                      type="radio"
                      name="propertyfor"
                      value="rent"
                      id="dot-5"
                      onChange={handleInput}
                    />
                    <input
                      type="radio"
                      name="propertyfor"
                      value="hostel"
                      id="dot-6"
                      onChange={handleInput}
                    />
                    {/* <span className="register_person_title">I am</span> */}
                    <div className="register_category">
                      <label for="dot-4">
                        <span className="dot four"></span>
                        <span className="register_propertyfor">Sale</span>
                      </label>
                      <label for="dot-5">
                        <span className="dot five"></span>
                        <span className="register_propertyfor">Rent</span>
                      </label>
                      <label for="dot-6">
                        <span className="dot six"></span>
                        <span className="register_propertyfor">Hostel</span>
                      </label>
                    </div>
                  </div>
                  </div>
                  </div>

                  <div className="register-input-city">
                    <input
                      className="register-input"
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      value={property.city}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.city}
                    </span> */}
                  </div>

                  <div className="register-input-locality">
                    <input
                      className="register-input"
                      type="text"
                      name="locality"
                      id="locality"
                      placeholder="Locality"
                      value={property.locality}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.locality}
                    </span> */}
                  </div>

                  <div className="register-input-rooms">
                    <input
                      className="register-input"
                      type="text"
                      name="rooms"
                      id="rooms"
                      placeholder="Rooms"
                      value={property.rooms}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.rooms}
                    </span> */}
                  </div>

                  <div className="register-input-propertytype">
                    <input
                      className="register-input"
                      type="text"
                      name="propertytype"
                      id="propertytype"
                      placeholder="Type of Property "
                      value={property.propertytype}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.propertytype}
                    </span> */}
                  </div>

                  <div className="register-input-area">
                    <input
                      className="register-input"
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Area"
                      value={property.area}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.area}
                    </span> */}
                  </div>

                  <div className="register-input-floors">
                    <input
                      className="register-input"
                      type="text"
                      name="floors"
                      id="floors"
                      placeholder="Number of Floors"
                      value={property.floors}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.floors}
                    </span> */}
                  </div>

                  <div className="register-input-price">
                    <input
                      className="register-input"
                      type="text"
                      name="price"
                      id="price"
                      placeholder="Price of Property"
                      value={property.price}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.price}
                    </span> */}
                  </div>

                  <div className="register-input-status">
                    <input
                      className="register-input"
                      type="text"
                      name="status"
                      id="status"
                      placeholder="Status"
                      value={property.status}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.status}
                    </span> */}
                  </div>

                  <div className="register-input-description">
                    <input
                      className="register-input"
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Description"
                      value={property.description}
                      onChange={handleInput}
                    ></input>
                    {/* <span className="register-error-data">
                      {formErrors.description}
                    </span> */}
                  </div>

                  <div className="postproperty-submit-button">
                    <button
                      className="postproperty-form-submit"
                      name="postproperty"
                      id="postproperty"
                      value="postproperty"
                      onClick={PostData}
                    >
                      Add Property
                    </button>
                  </div>
                  <div className="postproperty_heading">
		        <span><h3 className="highLight">Looking to Sell or Rent your Flat? </h3> 
                <p> Do you want to Sell your flat or put your house on rent? RealEstate has the right solution for you.Your advertisement will be viewed
                     by millions of buyers and tenants in India. RealEstate provides you the best classified for your requirement.</p></span>
              </div>

                </form>
              </div>
            </div>
          </div>
        </div>
     
    
      
    </>
  );
                
}

export default Postproperty;
