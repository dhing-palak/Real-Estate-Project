/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render, screen, logRoles } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Postproperty from "../components/postproperty/Postproperty";

// eslint-disable-next-line no-undef
describe("Testing the Postproperty Component", () => {
  test("Header Rendering  in the document", () => {
    render(
      <BrowserRouter>
        <Postproperty />
      </BrowserRouter>,
    );
    const headerElement = screen.getByRole("heading", {
      name: "Sell or Rent your Property",
    });
    expect(headerElement).toBeInTheDocument();
  });
  test("Render the Postproperty Form with button", async () => {
    render(
      <BrowserRouter>
        <Postproperty />
      </BrowserRouter>,
    );

    const buttonElement = await screen.getByRole("button", {
      name: "Add Property",
      exact: false,
    });
    console.log(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });

  test("Count of Radio Box Rendering", async () => {
    render(
      <BrowserRouter>
        <Postproperty />
      </BrowserRouter>,
    );

    const radioBtn = await screen.getAllByRole("radio");
    expect(radioBtn).toHaveLength(6);
  });

  test("Radio Box Rendering", async () => {
    render(
      <BrowserRouter>
        <Postproperty />
      </BrowserRouter>,
    );

    const radioBtn1 = await screen.getByRole("radio", {
      name: "Owner",
      exact: false,
    });
    const radioBtn2 = await screen.getByRole("radio", {
      name: "Agent",
      exact: false,
    });
    const radioBtn3 = await screen.getByRole("radio", {
      name: "Builder",
      exact: false,
    });
    const radioBtn4 = await screen.getByRole("radio", {
      name: "Sale",
      exact: false,
    });
    const radioBtn5 = await screen.getByRole("radio", {
      name: "Rent",
      exact: false,
    });
    const radioBtn6 = await screen.getByRole("radio", {
      name: "Hostel",
      exact: false,
    });
    
    expect(radioBtn1).toBeInTheDocument();
    expect(radioBtn2).toBeInTheDocument();
    expect(radioBtn3).toBeInTheDocument();
    expect(radioBtn4).toBeInTheDocument();
    expect(radioBtn5).toBeInTheDocument();
    expect(radioBtn6).toBeInTheDocument();
  });

  test("Count of TextField in document", async () => {
    render(
      <BrowserRouter>
        <Postproperty />
      </BrowserRouter>,
    );

    const textField = await screen.getAllByRole("textbox", {
      name: "",
      exact: false,
    });
    expect(textField).toHaveLength(12);
  });

  test("Should have all the text fields properly, also have submit button", async () => {
    render(
      <BrowserRouter>
        <Postproperty />
      </BrowserRouter>,
    );

    const nameField = screen.getByPlaceholderText("Enter your Name");
    const emailField = screen.getByPlaceholderText("Enter your email-id");
    const phoneField = screen.getByPlaceholderText("Enter your phone Number");
    const localityField = screen.getByPlaceholderText("Enter your locality");
    const roomField = screen.getByPlaceholderText("Enter the number of BHK Rooms");
    const propertytypeField = screen.getByPlaceholderText("Enter your type of property");
    const areaField = screen.getByPlaceholderText("Enter the area in Sqft");
    const floorField = screen.getByPlaceholderText("Enter number of floors");
    const priceField = screen.getByPlaceholderText("Enter the price");
    const rateField = screen.getByPlaceholderText("Enter rate per sqft");
    const statusField = screen.getByPlaceholderText("Enter status");
    const descriptionField = screen.getByPlaceholderText("Enter description");
    const buttonElement = await screen.getByRole("button", {
      name: "Add Property",
      exact: false,
    });

    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(phoneField).toBeInTheDocument();
    expect(localityField).toBeInTheDocument();
    expect(roomField).toBeInTheDocument();
    expect(propertytypeField).toBeInTheDocument();
    expect(areaField).toBeInTheDocument();
    expect(floorField).toBeInTheDocument();
    expect(priceField).toBeInTheDocument();
    expect(rateField).toBeInTheDocument();
    expect(statusField).toBeInTheDocument();
    expect(descriptionField).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

 
});

