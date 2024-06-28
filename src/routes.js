
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Residences from "./pages/Residences";
import Neighborhoood from "./pages/Neighborhood";
import Availabilities from "./pages/Availabilities";
import GlobalLayout from "./layout";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Building from "./pages/Building";


const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/residences",
        element: <Residences />,
    },
    {
        path: "/building",
        element: <Building />,
    },
    {
        path: "/neighborhood",
        element: <Neighborhoood />,
    },
    {
        path: "/availabilities",
        element: <Availabilities />,
    },
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <GlobalLayout />,
        errorElement: <ErrorPage />,
        children: routes 
    },
   
]);


export default router;

