import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import StudentTable from "../components/information";
import Login from "../components/login";
import NotFound from "../components/not-found";

const root = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/information",
    element: <StudentTable />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default root;

// {
//   path: "/succses",
//   element: <SuccsesComponents />,
// },
// {
//   path: "/register",
//   element: <Home />,
// },
