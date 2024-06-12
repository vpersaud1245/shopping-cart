import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.jsx";
import Home from "./Components/Home/Home.jsx";
import productLoader from "./Loaders/productLoader.jsx";
import Store from "./Components/Store/Store.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/Error/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home />, loader: productLoader },
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
 * Work on carousel
 */
