const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.username = "Username is required!";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.city) {
    errors.city = "city is required!";
  }
  if (!values.locality) {
    errors.locality = "locality is required!";
  }
  if (!values.rooms) {
    errors.rooms = "rooms is required!";
  }
  if (!values.propertytype) {
    errors.propertytype = "propertytype is required!";
  }
  if (!values.area) {
    errors.area = "area is required!";
  }
  if (!values.floors) {
    errors.floors = "floors is required!";
  }
  if (!values.price) {
    errors.price = "price is required!";
  }
  if (!values.status) {
    errors.status = "status is required!";
  }
  if (!values.description) {
    errors.description = "description is required!";
  }

  return errors;
};
export default validate;
