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

      /* TODO Low priority : clearing actionKey from currentNumbers when adding a number on top of it

      // Checking if currentNumbers includes action key
      if (currentNumbers.some((key) => actionKeys.indexOf(key) >= 0)) {
        // If it does, clear it from the currentNumbers
        setCurrentNumbers([]);
      } else {
        console.log("Does not include an action key");
      } */
    }

    // Action keys
    if (actionKeys.includes(key)) {
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
      // eval the operation
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
