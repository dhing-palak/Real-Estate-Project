import React from "react";
import InputGallary from "./InputGallary";
import { city } from "../../common/common";

const GallaryInput = () => {
  const amenities = [
    { id: 1, value: "Swimming Pool" },
    { id: 2, value: "Power Back Up" },
    { id: 3, value: "Lift" },
    { id: 4, value: "Gymnasium" },
    { id: 5, value: "Rain Water Harvesting" },
    { id: 6, value: "Reserved Parking" },
    { id: 7, value: "Intercom Facility" },
    { id: 8, value: "Waste Disposal" },
    { id: 9, value: "CCTV Camera" },
    { id: 10, value: "Flower Gardens" },
    { id: 11, value: "Private Terrace" },
    { id: 12, value: "Security" },
    { id: 13, value: "Indoor Games Room" },
    { id: 14, value: "Water Storage" },
    { id: 15, value: "Meditation Area" },
    { id: 16, value: "Earth quake resistant" },
  ];
  const toggleHandler = (item) => () => {
    setPeopleInfo((state) => ({
      ...state,
      [item.id]: state[item.id] ? null : { id: item.id, value: item.value },
    }));
  };
  //const [peopleInfo, setPeopleInfo] = useState({});

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    //setProperty((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errors = validate({ ...property, [name]: value });
    setFormErrors((prevState) => ({ ...prevState, [name]: errors[name] }));
  };
  // const handleChange = (event) => {
  //   if (event.target.value) {
  //     setProperty({ ...property, city: event.target.value });
  //   }
  // };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form className="newgallary-form-wrapper">
        <div className="sec-Heading">Personal Details</div>
        <div className="newgallary-formLabel"> I am</div>

        <div className="iam-radio">
          <input
            type="radio"
            value="Owner"
            name="iam"
            onChange={handleInput}
            onBlur={handleBlur}
          />{" "}
          Owner
          <input
            type="radio"
            value="Agent"
            name="iam"
            onChange={handleInput}
            onBlur={handleBlur}
          />{" "}
          Agent
          <input
            type="radio"
            value="Builder"
            name="iam"
            onChange={handleInput}
            onBlur={handleBlur}
          />{" "}
          Builder
        </div>

        <InputGallary
          name="name"
          type="text"
          id="name"
          placeholder="Enter your Name"
        />
        <InputGallary
          name="email"
          type="text"
          id="email"
          placeholder="Enter your Email-id"
        />
        <InputGallary
          name="phno"
          type="text"
          id="phno"
          placeholder="Enter your Phone-Number"
        />
        <div className="postproperty-formLabel">For</div>
        <div className="radio-for">
          <input type="radio" value="Hostel" name="propertyfor" /> Hostel
          <input type="radio" value="Rent" name="propertyfor" /> Rent
          <input type="radio" value="Sale" name="propertyfor" /> Sale
        </div>
        <div>
          <select className="citydropdown">
            <option key="property.city" disabled selected hidden>
              Select City
            </option>
            {city.map((allcities) => {
              return <option key={allcities}>{allcities}</option>;
            })}
          </select>
        </div>

        <InputGallary
          name="location"
          type="text"
          id="location"
          placeholder="Enter your Locality"
        />
        <InputGallary
          name="rooms"
          type="text"
          id="rooms"
          placeholder="Enter the No of BHKs"
        />
        <InputGallary
          name="propertytype"
          type="text"
          id="propertytype"
          placeholder="Enter your Property type"
        />
        <InputGallary
          name="area"
          type="text"
          id="area"
          placeholder="Enter your Property Area"
        />
        <InputGallary
          name="floors"
          type="text"
          id="floors"
          placeholder="Enter the No of floors"
        />
        <InputGallary
          name="propertytype"
          type="text"
          id="propertytype"
          placeholder="Enter your Property type"
        />

        <InputGallary
          name="ratepersqft"
          type="text"
          id="ratepersqft"
          placeholder="Enter rate per sqft"
        />
        <InputGallary
          name="status"
          type="text"
          id="status"
          placeholder="Enter the status of project"
        />
        <InputGallary
          name="description"
          type="text"
          id="description"
          placeholder="Enter description"
        />

        <div className="amenities-checkbox">
          Select Your aminities
          <div className="amenities-options">
            <table>
              <tr>
                {amenities.map((item) => {
                  return (
                    <div key={item.id} style={{ display: "flex", width: "150px" }}>
                      <input
                        onChange={toggleHandler(item)}
                        //checked={peopleInfo[item.id]}
                        style={{ margin: "3px" }}
                        type="checkbox"
                      />
                      <td style={{ margin: "3px" }}>{item.value}</td>
                    </div>
                  );
                })}
              </tr>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};
export default GallaryInput;
