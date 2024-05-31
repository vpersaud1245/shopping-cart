import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Components/Navigation/Navigation.jsx";
import Home from "./Components/Home/Home.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation />
    <Home />
  </React.StrictMode>
);
