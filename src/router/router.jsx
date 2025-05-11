import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import RootLayout from "../Layout/RootLayout";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  },
]);


export default router

