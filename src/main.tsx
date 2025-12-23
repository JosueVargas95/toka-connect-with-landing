import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { TokaConnectApp } from "./TokaConnectApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TokaConnectApp />
  </StrictMode>
);
