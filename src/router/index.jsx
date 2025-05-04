import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/index";

const root = createBrowserRouter([
  {
    index: "/",
    element: <Home />,
  },
]);

export default root;
