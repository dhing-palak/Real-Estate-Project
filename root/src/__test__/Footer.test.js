/* eslint-disable no-undef */
import { render, screen, logRoles } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/footer/Footer";

describe("Testing the Footer Component", () => {
  test("Header Rendering  in the document", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const headerElement = screen.getByRole("heading", {
      name: "About Us",
    });
    expect(headerElement).toBeInTheDocument();
  });
  test("Header Rendering  in the document", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const headerElement = screen.getByRole("heading", {
      name: "Properties in India",
    });
    expect(headerElement).toBeInTheDocument();
  });
  test("Header Rendering  in the document", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const headerElement = screen.getByRole("heading", {
      name: "New Projects in India",
    });
    expect(headerElement).toBeInTheDocument();
  });
  test("Count of Link Item Rendering", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    logRoles(screen.getByTestId("footerpage"));
    const linkElement = screen.getAllByRole("link");
    expect(linkElement).toHaveLength(15);
  });
  test("Link Item Rendering", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const linkElement1 = screen.getByRole("link", {
      name: "Help center",
      exact: false,
    });
    const linkElement2 = screen.getByRole("link", {
      name: "Terms & Condition",
      exact: false,
    });
    const linkElement3 = screen.getByRole("link", {
      name: "Privacy Policy",
      exact: false,
    });
    const linkElement4 = screen.getByRole("link", {
      name: "Property in New Delhi |",
      exact: false,
    });
    const linkElement5 = screen.getByRole("link", {
      name: "Property in Mumbai |",
      exact: false,
    });
    const linkElement6 = screen.getByRole("link", {
      name: "Property in Chennai |",
      exact: false,
    });
    const linkElement7 = screen.getByRole("link", {
      name: "Property in Pune |",
      exact: false,
    });
    const linkElement8 = screen.getByRole("link", {
      name: "Property in Noida |",
      exact: false,
    });
    const linkElement9 = screen.getByRole("link", {
      name: "Property in Gurgaon |",
      exact: false,
    });
    const linkElement10 = screen.getByRole("link", {
      name: "Property in Bangalore |",
      exact: false,
    });
    const linkElement11 = screen.getByRole("link", {
      name: "Property in Ahmedabad |",
      exact: false,
    });
    const linkElement12 = screen.getByTestId("facebook");
    const linkElement13 = screen.getByTestId("instagram");
    const linkElement14 = screen.getByTestId("youtube");
    const linkElement15 = screen.getByTestId("twitter");
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
    expect(linkElement3).toBeInTheDocument();
    expect(linkElement4).toBeInTheDocument();
    expect(linkElement5).toBeInTheDocument();
    expect(linkElement6).toBeInTheDocument();
    expect(linkElement7).toBeInTheDocument();
    expect(linkElement8).toBeInTheDocument();
    expect(linkElement9).toBeInTheDocument();
    expect(linkElement10).toBeInTheDocument();  
    expect(linkElement11).toBeInTheDocument();
    expect(linkElement12).toBeInTheDocument();
    expect(linkElement13).toBeInTheDocument();
    expect(linkElement14).toBeInTheDocument();
    expect(linkElement15).toBeInTheDocument();
  });
});
