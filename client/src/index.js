import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesApp from "./RoutesApp";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "products/:id",
//     element: <ProductDetails />,
//   },
//   {
//     path: "cartDetails",
//     element: <CartDetails />,
//     // children: cartProducts,
//   },

//   {
//     path: "*",
//     element: <NotFoundPage />,
//   },
// ]);

root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <RoutesApp />
  </React.StrictMode>
);
