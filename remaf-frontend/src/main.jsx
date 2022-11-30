import React from "react";
import ReactDOM from "react-dom/client";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";

import "./style.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>
);
