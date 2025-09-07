import { createBrowserRouter } from "react-router";
import About from "../Pages/About/About"
import Error from "../Pages/Error/ErrorPage";
import HomeLayout from "../Layout/HomeLayout";
import Career from "../Pages/Career/Career"
import Home from "../Pages/Home/Home";
import CategorieNews from "../Components/Categories/CategorieNews";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element:  <Home></Home>
      },
      {
        path: "/about",
        element: <About />
      }, 
      {
        path: "/career",
        element: <Career/>
      }, 
      {
        path: "/categorie/:id",
        loader:()=> fetch("/news.json"),
        element: <CategorieNews></CategorieNews>
      }
    ]
  },
]);


export default router

