import "./CalculatorApp.css";
import Calculator from "./Components/Calculator";
import Display from "./Components/Display";
import Actions from "./Components/Actions";
import Numpad from "./Components/Numpad";

function CalculatorApp() {
  return (
    <Calculator>
      <Display />
      <Actions />
      <Numpad />
    </Calculator>
  );
}

export default CalculatorApp;
