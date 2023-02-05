import "./CalculatorApp.css";
import { useState } from "react";
import Calculator from "./Components/Calculator";
import Display from "./Components/Display";
import Actions from "./Components/Actions";
import Numpad from "./Components/Numpad";

function CalculatorApp() {
  const [operation, setOperation] = useState([]);
  const [currentNumbers, setCurrentNumbers] = useState([]);

  // If state is empty, display '0', otherwise - display string made from state array
  const displayOperation = operation.length > 0 ? operation.join("") : "0";
  const displayCurrentNumbers =
    currentNumbers.length > 0 ? currentNumbers.join("") : "0";

  // Keys
  const numpadKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const actionKeys = ["AC", "/", "*", "-", "+", "="];

  const handleKeyClick = function (e) {
    const key = e.target.textContent.toString();

    // Numpad keys
    if (numpadKeys.includes(key)) {
      setOperation([...operation, key]);
      setCurrentNumbers([...currentNumbers, key]);
    }

    // Action keys
    if (actionKeys.includes(key)) {
      // If operation array is empty, action keys do not work
      if (operation.length === 0) return;

      // If last key of the operation array is an action key, replace it with current action key
      if (actionKeys.includes(operation[operation.length - 1])) {
        setOperation(
          operation.map((keyEl, i, arr) => (i === arr.length - 1 ? key : keyEl))
        );
        setCurrentNumbers([key]);
      } else {
        setOperation([...operation, key]);
        setCurrentNumbers([key]);
      }
    }

    // AC key functionality
    if (key === "AC") {
      setOperation([]);
      setCurrentNumbers([]);
    }

    // EQUAL key functionality
    if (key === "=") {
      // Calculate the operation result
      const result = eval(displayOperation).toString();
      const validation = parseFloat(result);

      if (result === "Infinity" || isNaN(validation)) {
        alert("Error");
        setOperation([]);
        setCurrentNumbers([]);
        return;
      }

      if (result === "0") {
        // reset
        setOperation([]);
        setCurrentNumbers([]);
      } else {
        // display result
        setOperation([result]);
        setCurrentNumbers([result]);
      }
    }
  };

  return (
    <Calculator>
      <Display
        operation={displayOperation}
        currentNumbers={displayCurrentNumbers}
      />
      <Actions onClick={handleKeyClick} />
      <Numpad onClick={handleKeyClick} />
    </Calculator>
  );
}

export default CalculatorApp;
