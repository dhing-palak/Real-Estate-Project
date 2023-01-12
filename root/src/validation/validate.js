const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phoneno = /^\d{10}$/;
  const number = /^[0-9]$/;

  if (!values.iam) {
    errors.iam = "Select any option";
  }
  if (!values.name) {
    errors.username = "Username is required!";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required!";
  } else if (!phoneno.test(values.phone)) {
    errors.phone = "Phone number must be in 10 digits!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.propertyfor) {
    errors.propertyfor = "Select any option";
  }
  if (!values.city) {
    errors.city = "City is required!";
  }
  if (!values.locality) {
    errors.locality = "Locality is required!";
  }
  if (!values.rooms) {
    errors.rooms = "Rooms is required!";
  } else if (!number.test(values.rooms)) {
    errors.rooms = "Number of rooms must be in a single digit!";
  }
  if (!values.propertytype) {
    errors.propertytype = "Type of Property is required!";
  }
  if (!values.area) {
    errors.area = "Area is required!";
  }
  if (!values.floors) {
    errors.floors = "Floors is required!";
  } else if (!number.test(values.floors)) {
    errors.floors = "Number of floors must be in single digits!";
  }
  if (!values.price) {
    errors.price = "Price is required!";
  }
  if (!values.ratepersqft) {
    errors.ratepersqft = "Rate per Sqft is required!";
  }
  if (!values.status) {
    errors.status = "status is required!";
  }
  if (!values.description) {
    errors.description = "Description is required!";
  }
  // if (!values.image) {
  //   errors.image = "Image is required!";
  // }

  return errors;
};
export default validate;
