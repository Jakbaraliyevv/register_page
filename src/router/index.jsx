import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/index";
import SuccsesComponents from "../components/succses";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/succses",
    element: <SuccsesComponents />,
  },
]);

export default root;
