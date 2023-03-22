const validate = (values) => {
  const errors = {};
  // const nameregex = /^[A-Z]{1}[a-z]{2,30}\s*/;
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  // const phoneno = /^[0-9]{10}\s*$/;
  // const singlenumber = /^[0-9]{1}\s*$/;
  // const floornumber = /^[1-4]{1}\s*$/;
  // const numberstring = /^\d*\.?\d*\s*$/;

  if (!values.iam) {
    errors.iam = "Select any option";
  }
  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (!/[A-Z][a-z]*(\s[A-Z][a-z]*)*/.test(values.name)) {
    errors.name =
      "Name should be in alphabets only and first letter of name should be in capital!";
  } else if (values.name.length < 3) {
    errors.name = "Name should be atleast 3 letters";
  } else if (values.name.length > 20) {
    errors.name = "Name should be less than 20 letters";
  }
  // if (!values.name) {
  //   errors.username = "Username is required!";
  // } else if (!nameregex.test(values.name)) {
  //   errors.username =
  //     "Name should be in letters only and first letter of name should be in capital!";
  // }
  if (!values.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (!/^[0-9]+$/.test(values.phone)) {
    errors.phone = "Invalid phone number";
  } else if (values.phone.length !== 10) {
    errors.phone = "Phone number should be 10 digits";
  }

  // if (!values.phone) {
  //   errors.phone = "Phone number is required!";
  // } else if (!phoneno.test(values.phone)) {
  //   errors.phone = "Phone number must be in 10 digits!";
  // }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // if (!values.email) {
  //   errors.email = "Email is required!";
  // } else if (!regex.test(values.email)) {
  //   errors.email = "This is not a valid email format!";
  // }
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
  } else if (!/^[0-9]{1}\s*$/.test(values.rooms)) {
    errors.rooms = "Number of rooms must be in a single digit!";
  }
  if (!values.propertytype) {
    errors.propertytype = "Type of Property is required!";
  }
  if (!values.area) {
    errors.area = "Area is required!";
  } else if (!/^\d*\.?\d*\s*$/.test(values.area)) {
    errors.area = "Area must be in a valid numeric format!";
  }
  if (!values.floors) {
    errors.floors = "floors is required!";
  } else if (!/^[1-4]{1}\s*$/.test(values.floors)) {
    errors.floors = "Number of floors must be smaller than 5!";
  }
  if (!values.price) {
    errors.price = "Price is required!";
  }
  if (!values.ratepersqft) {
    errors.ratepersqft = "Rate per Sqft is required!";
  } else if (!/^\d*\.?\d*\s*$/.test(values.ratepersqft)) {
    errors.ratepersqft = "Rate per Sqft must be in a valid numeric format!";
  }

  if (!values.status) {
    errors.status = "status is required!";
  }
  if (!values.description) {
    errors.description = "Description is required!";
  }
  if (!values.amenitiesData) {
    errors.amenitiesData = "Amenities is required!";
  }

  return errors;
};
export default validate;
