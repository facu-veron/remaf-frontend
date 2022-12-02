import React from "react";
import ReactDOM from "react-dom/client";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from 'react-redux';

import "./style.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store= {store}>
      <Dashboard />
    </Provider>
  </BrowserRouter>
);
