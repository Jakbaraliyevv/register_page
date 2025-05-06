import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/register";
import HomePage from "../pages/home";
import SuccsesComponents from "../components/succses";
import StudentTable from "../components/information";

const root = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/succses",
    element: <SuccsesComponents />,
  },
  {
    path: "/register",
    element: <Home />,
  },

  {
    path: "/information",
    element: <StudentTable />,
  },
]);

export default root;
