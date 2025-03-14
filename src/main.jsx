import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/dynamic_web/render/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
