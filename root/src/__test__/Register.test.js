/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render, screen, logRoles } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Register from "../components/register/Register";

// eslint-disable-next-line no-undef
describe("Testing the Register Component", () => {
  test("Header Rendering  in the document", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );
    const headerEle = screen.getByRole("heading", {
      name: "Things you Can Do with Real Estate Account",
    });
    expect(headerEle).toBeInTheDocument();
  });

  test("Render the Registration form with button", async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    const buttonEle = await screen.getByRole("button", {
      name: "Sign Up",
      exact: false,
    });
    console.log(buttonEle);
    expect(buttonEle).toBeInTheDocument();
  });

  test("List Item Rendering", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );
    logRoles(screen.getByTestId("registrationpage"));
    const listEle = screen.getAllByRole("listitem");
    expect(listEle).toHaveLength(7);
  });

  test("Radio Box Rendering", async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    const radioBtn = await screen.getByRole("radio", {
      name: "Buyer/Owner",
      exact: false,
    });

    expect(radioBtn).toBeInTheDocument();
  });
  test("Count of Radio Box Rendering", async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    const radioBtn = await screen.getAllByRole("radio");

    expect(radioBtn).toHaveLength(3);
  });

  test("Count of TextField in document", async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    const textField = await screen.getAllByRole("textbox", {
      name: "",
      exact: false,
    });
    expect(textField).toHaveLength(3);
  });

  test("Should have all the fields properly, also have submit button", async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    const nameField = screen.getByPlaceholderText("Name");
    const phoneField = screen.getByPlaceholderText("Phone");
    const emailField = screen.getByPlaceholderText("Email");
    const passwordField = screen.getByPlaceholderText("Password");
    const cpasswordField = screen.getByPlaceholderText("Confirm Password");
    const buttonEle = await screen.getByRole("button", {
      name: "Sign Up",
      exact: false,
    });

    expect(nameField).toBeInTheDocument();
    expect(phoneField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(cpasswordField).toBeInTheDocument();
    expect(buttonEle).toBeInTheDocument();
  });
});
