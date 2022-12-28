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
export const register = async (
  name,
  phone,
  email,
  person,
  password,
  cpassword
) => {
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
//Get City Name
export const request = async () => {
  try {
    const response = await fetch('/user/location');
    const json = await response.json();
    console.log(json);
  }
  catch (e) {
    console.log('We have the error', e);
  }
}