import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/index";
import SuccsesComponents from "../components/succses";
import HomePage from "../pages/register";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/succses",
    element: <SuccsesComponents />,
  },
  {
    path: "/register",
    element: <HomePage />,
  },
]);

export default root;
