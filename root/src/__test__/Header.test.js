/* eslint-disable no-undef */
import { act,render, screen, logRoles } from "@testing-library/react";
import Header from "../components/Navbar/Header";
import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "../state/StateContext";
import { MemoryRouter } from "react-router-dom";

// import userEvent from "@testing-library/user-event";

// eslint-disable-next-line no-undef
describe("DisplayInfo", () => {
  describe("layout", () => {
  
   test("Render the logo ", async () => {
    render(
      <UserContextProvider>
      <Header />
     </UserContextProvider>,
     { wrapper: MemoryRouter }
      
    );
    logRoles(screen.getByTestId("nav-logo"));

    const buttonEle = await screen.getByRole("link", {
      name: "Real-Estate",
      exact: true,
    });
    console.log(buttonEle);
    expect(buttonEle).toBeInTheDocument();
  });
  test("Header Register Rendering  in the document", () => {
    render(
      <UserContextProvider>
      <Header />
     </UserContextProvider>,
     { wrapper: MemoryRouter }
    );
    logRoles(screen.getByTestId("nav-register"));
    const headerEle = screen.getByRole("link", {
      name: "Register",
    });
    
    expect(headerEle).toBeInTheDocument();
  });
  test("Header Login Rendering  in the document", () => {
    render(
      <UserContextProvider>
      <Header />
     </UserContextProvider>,
     { wrapper: MemoryRouter }
    );
    logRoles(screen.getByTestId("nav-login"));
    const headerEle = screen.getByRole("link", {
      name: "Login",
    });
    expect(headerEle).toBeInTheDocument();
  });
  test("Header PostProperty Rendering  in the document", () => {
    render(
      <UserContextProvider>
      <Header />
     </UserContextProvider>,
     { wrapper: MemoryRouter }
    );
    logRoles(screen.getByTestId("nav-post"));
    const headerEle = screen.getByRole("link", {
      name: "PostProperty",
    });
    expect(headerEle).toBeInTheDocument();
  });

  });
 });
// describe("Testing the Header Component", () => {
//   let container;
//   beforeEach(() => {
//     container = document.createElement('div');
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     document.body.removeChild(container);
//     container = null;
// });