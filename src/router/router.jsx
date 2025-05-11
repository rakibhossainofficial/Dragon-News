import { createBrowserRouter } from "react-router";
import About from "../Pages/About/About"
import Error from "../Pages/Error/Error";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/home",
        element:  <HomeLayout />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  },
]);


export default router

