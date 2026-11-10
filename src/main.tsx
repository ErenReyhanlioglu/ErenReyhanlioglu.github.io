import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
