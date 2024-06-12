import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.jsx";
import Home from "./Components/Home/Home.jsx";
import Store from "./Components/Store/Store.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/**
 * TODO:
 * Incorporate fetch loader to get items from the store
 */
