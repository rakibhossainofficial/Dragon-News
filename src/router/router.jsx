import { createBrowserRouter } from "react-router";
import About from "../Pages/About/About";
import Error from "../Pages/Error/ErrorPage";
import HomeLayout from "../Layout/HomeLayout";
import Career from "../Pages/Career/Career";
import Home from "../Pages/Home/Home";
import CategorieNews from "../Components/Categories/CategorieNews";
import { Suspense } from "react";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Components/NewsDetails/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/categorie/:id",
        loader: () => fetch("/news.json"),
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <CategorieNews></CategorieNews>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/newsdetails/:id",
    loader: () => fetch("/news.json"),
    element: <NewsDetails></NewsDetails>,
  },
]);

export default router;
