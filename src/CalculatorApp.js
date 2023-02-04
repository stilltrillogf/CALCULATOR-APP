import "./CalculatorApp.css";
import { useState } from "react";
import Calculator from "./Components/Calculator";
import Display from "./Components/Display";
import Actions from "./Components/Actions";
import Numpad from "./Components/Numpad";

function CalculatorApp() {
  // State for mathematical operation, stored as a string
  const [operation, setOperation] = useState([]);
  const displayOperation = operation.join("");

  const handleNumpadClick = function (e) {
    const key = e.target.textContent;
    setOperation([...operation, key]);
  };

  return (
    <Calculator>
      <Display operation={displayOperation} currentNumbers="" />
      <Actions />
      <Numpad onClick={handleNumpadClick} />
    </Calculator>
  );
}

export default CalculatorApp;
