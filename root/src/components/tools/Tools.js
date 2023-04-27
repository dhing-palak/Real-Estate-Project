import React from "react";
import "../../styles/Tools.scss";
import Card from "../card/Card";
import { BsFillCalculatorFill } from "react-icons/bs";
import { SiConvertio } from "react-icons/si";
import { HiClipboardDocumentList } from "react-icons/hi2";

const Tools = () => {
  return (
    <>
      <div className="tools-container">
        <h2 className="tools-heading">Advice & Tools</h2>
        <div className="tools-card-container">
          <Card
            location="/tools/advice"
            icon={<HiClipboardDocumentList />}
            heading="Legal Title Check"
            title="Get property checked for clean title and no legal claim/bank attachment"
          />
          <Card
            location="/tools/convertor"
            icon={<SiConvertio />}
            heading="Unit Convertor"
            title="Expresses the same property as a different unit of measurement"
          />
          <Card
            location="/tools/calculator"
            icon={<BsFillCalculatorFill />}
            heading="EMI Calculator"
            title="Know how much you'll have to pay every month on the loan"
          />
        </div>
      </div>
    </>
  );
};

export default Tools;
