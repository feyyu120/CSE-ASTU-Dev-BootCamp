import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

// Create a React root and render the App component inside it
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* The main application component is rendered here */}
    </BrowserRouter>
  </React.StrictMode>
);
