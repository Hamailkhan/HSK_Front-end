import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/error/Error";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import SingleProduct from "./pages/singleProduct/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
