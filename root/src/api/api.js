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

export const property = async (
  iam,
  name,
  ownerName,
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
  pricePerSqft,
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
      ownerName,
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
      pricePerSqft,
      status,
      description,
    }),
  });

  return res;
};


export const propertydetails = async () => {
  const res = await fetch("get/propertydetails", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  return res;
}