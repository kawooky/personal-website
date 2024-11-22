import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client"; // Ensure ReactDOM is imported correctly
import App from "./App"; // Ensure App is imported correctly
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
