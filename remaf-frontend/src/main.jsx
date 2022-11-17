import React from "react";
import ReactDOM from "react-dom/client";

import { Dashboard } from "./components/layouts/Dashboard";
import { Maps } from "./components/layouts/Maps";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
