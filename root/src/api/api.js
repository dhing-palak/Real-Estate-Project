/* eslint-disable quotes */
//Login api
export const login = async (email, password) => {
  const res = await fetch("/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return res;
};

//Register api
export const register = async (name, phone, email, person, password, cpassword) => {
  const res = await fetch("/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      email,
      person,
      password,
      cpassword,
    }),
  });
  return res;
};

//postproperty api
export const postproperty = async (
  iam,
  name,
  email,
  phone,
  propertyfor,
  city,
  locality,
  rooms,
  propertytype,
  area,
  floors,
  price,
  status,
  description,
) => {
  const res = await fetch("/post/property", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      iam,
      name,
      email,
      phone,
      propertyfor,
      city,
      locality,
      rooms,
      propertytype,
      area,
      floors,
      price,
      status,
      description,
    }),
  });
  return res;
};

//Profile api
export const profile = async () => {
  const res = await fetch("/user/profile", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return res;
};

//Logout api
export const logout = async () => {
  const res = await fetch("/user/logout", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return res;
};

//Propertydetails Api
export const propertydetails = async (cityname) => {
  const res = await fetch(`/property/details/${cityname}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    params: cityname,
  });
  return res;
};

// search Api
export const searchProperty = async (city, propertytype, price) => {
  const res = await fetch(`/search/propertydetails?city=${city}&propertytype=${propertytype}&price=${price}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    params: {
      city,
      propertytype,
      price,
    },
    credentials: "include",
  });
  return res;
};

//Get City Name
export const request = async () => {
  try {
    const response = await fetch("/user/location");
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log("We have the error", e);
  }
};
