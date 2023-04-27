import React from "react";
import Contact from "./Contact";
import "../styles/Calculator.scss";

const Calculator = () => {
  return (
    <>
      <div className="calculator-container">
        <div className="calculator-heading">Home Loan EMI Calculator</div>
      </div>
      <Contact />
    </>
  );
};

export default Calculator;
