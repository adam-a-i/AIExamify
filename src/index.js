import React from "react";
import ReactDOM from "react-dom/client";
import "./css/general.css";
import "./css/header.css";
import "./css/info.css";
import "./css/upload.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);