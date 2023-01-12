/* eslint-disable no-undef */
import { render, screen, logRoles } from "@testing-library/react";
import Login from "../components/login/Login";
import React from "react";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line no-undef
describe("Testing the login component", () => {
  test("render the login form with button", async () => {
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

  test("header render with react in the document", () => {
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
});
