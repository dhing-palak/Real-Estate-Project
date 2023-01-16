/* eslint-disable no-undef */
import { render, screen, logRoles } from "@testing-library/react";
import Login from "../components/login/Login";
import React from "react";
import { BrowserRouter } from "react-router-dom";

// import userEvent from "@testing-library/user-event";

// eslint-disable-next-line no-undef
describe("Testing the login component", () => {
  test("Render the login form with button", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    logRoles(screen.getByTestId("buttondiv"));

    const buttonEle = await screen.getByRole("button", {
      name: "Log In",
      exact: false,
    });
    console.log(buttonEle);
    expect(buttonEle).toBeInTheDocument();
  });

  test("Header Rendering  in the document", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    const headerEle = screen.getByRole("heading", {
      name: "Things you Can Do with Real Estate Account",
    });
    expect(headerEle).toBeInTheDocument();
  });

  test("List item rendering", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    logRoles(screen.getByTestId("loginpage"));
    const listEle = screen.getAllByRole("listitem");
    expect(listEle).toHaveLength(7);
  });

  test("Render the email field in document", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const emailField = await screen.getByRole("textbox", {
      name: "",
      exact: false,
    });
    expect(emailField).toBeInTheDocument();
  });

  // test("Object check", () => {
  //   expect(wrapper.exists(".login_right")).toEqual(false);
  // });

  // test("State Check", () => {
  //   // let wrapper = shallow(
  //   //   <BrowserRouter>
  //   //     <Login />
  //   //   </BrowserRouter>,
  //   // );
  //   expect(wrapper.state()).toEqual({ email: "", password: "" });
  // });

  // test("should have an email field", () => {
  //   // eslint-disable-next-line quotes
  //   expect(wrapper.find('input[type="password"]')).to.have.lengthOf(1);
  // });

  test("Should have email and password field, also a submit button", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const emailField = screen.getByPlaceholderText("Email");
    const passwordField = screen.getByPlaceholderText("Password");
    const buttonEle = await screen.getByRole("button", {
      name: "Log In",
      exact: false,
    });

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(buttonEle).toBeInTheDocument();
  });

  // test("Should allow user to submit their credientials ", async () => {
  //   const loginUser = jest.fn();
  //   render(
  //     <BrowserRouter>
  //       <Login />
  //     </BrowserRouter>,
  //   );

  //   const emailField = screen.getByPlaceholderText("Email");
  //   const passwordField = screen.getByPlaceholderText("Password");
  //   const buttonEle = await screen.getByRole("button", {
  //     name: "Log In",
  //     exact: false,
  //   });

  //   userEvent.type(emailField, "test54@gmail.com");
  //   userEvent.type(passwordField, "test54");
  //   fireEvent.click(buttonEle);

  //   expect(loginUser).toHaveBeenCalledWith({
  //     email: "test54@gmail.com",
  //     password: "test54",
  //   });
  // });
});
