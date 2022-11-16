import React from "react";
import ReactDOM from "react-dom/client";
import { Graphic } from "./components/Graphic";

import { Dashboard } from "./components/layouts/Dashboard";
import { Maps } from "./components/layouts/Maps";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Maps /> */}
    <iframe
      width="500"
      height="500"
      src="http://192.168.224.186:8080/mapstore/#/context/remaf_contexto/59"
    ></iframe>
  </React.StrictMode>
);
