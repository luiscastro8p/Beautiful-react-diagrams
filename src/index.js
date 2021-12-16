import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Diagram from "./Diagram";
import "beautiful-react-diagrams/styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Diagram />
  </StrictMode>,
  rootElement
);
