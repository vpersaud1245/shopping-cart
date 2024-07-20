import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.jsx";
import Home from "./Components/Home/Home.jsx";
import { productsLoader, productLoader } from "./Loaders/productLoader.jsx";
import Carousel from "./Components/Carousel/Carousel.jsx";
import Store from "./Components/Store/Store.jsx";
import "./index.css";
import ProductPage from "./Components/Product/Product.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/Error/ErrorPage.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import CartPage from "./Components/CartPage/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "/", element: <Carousel />, loader: productsLoader },
        ],
      },
      {
        path: "/store",
        element: <Store />,
        loader: productsLoader,
        children: [
          { path: "/store", element: <Sidebar />, loader: productsLoader },
        ],
      },
      {
        path: "/products/:productID",
        element: <ProductPage />,
        loader: productLoader,
      },
      { path: "/cart", element: <CartPage /> },
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
 * Fix issue with removing from cart on cart page
 * Finish styling cart page
 * Add search
 * Add cart page
 * Add cart hover
 * Add cart checkout
 * media queries
 */
