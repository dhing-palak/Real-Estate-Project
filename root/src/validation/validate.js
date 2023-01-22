const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phoneno = /^[0-9]{10}\s*$/;
  const singlenumber = /^[0-9]{1}\s*$/;
  const floornumber = /^[1-4]{1}\s*$/;
  const numberstring = /^\d*\.?\d*\s*$/;

  if (!values.iam) {
    errors.iam = "Select any option";
  }
  if (!values.name) {
    errors.username = "Username is required!";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required!";
  }
  else if (!phoneno.test(values.phone)) {
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
  } else if (!singlenumber.test(values.rooms)) {
    errors.rooms = "Number of rooms must be in a single digit!";
  }
  if (!values.propertytype) {
    errors.propertytype = "Type of Property is required!";
  }
  if (!values.area) {
    errors.area = "Area is required!";
  }
  else if (!numberstring.test(values.area)) {
    errors.area = "Area must be in a valid numeric format!";
  }
  if (!values.floors) {
    errors.floors = "floors is required!";
  } else if (!floornumber.test(values.floors)) {
    errors.floors = "Number of floors must be smaller than 5!";
  }
  if (!values.price) {
    errors.price = "Price is required!";
  }
  if (!values.ratepersqft) {
    errors.ratepersqft = "Rate per Sqft is required!";
  }
  else if (!numberstring.test(values.ratepersqft)) {
    errors.ratepersqft = "Rate per Sqft must be in a valid numeric format!";
  }

  if (!values.status) {
    errors.status = "status is required!";
  }
  if (!values.description) {
    errors.description = "Description is required!";
  }

  return errors;
};
export default validate;
