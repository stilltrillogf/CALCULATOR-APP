import "./CalculatorApp.css";
import Calculator from "./Components/Calculator";
import Display from "./Components/Display";
import { ActionsVertical, ActionsHorizontal } from "./Components/Actions";
import Numpad from "./Components/Numpad";

function CalculatorApp() {
  return (
    <Calculator>
      <Display />
      <ActionsHorizontal />
      <ActionsVertical />
      <Numpad />
    </Calculator>
  );
}

export default CalculatorApp;
