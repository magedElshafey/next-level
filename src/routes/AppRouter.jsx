import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ScrollToTopAfterChangePage from "../components/common/ScrollToTopAfterChangePage";
// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Work from "../pages/Work";
import Services from "../pages/Services";
import Service from "../pages/Service";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Jobs from "../pages/Jobs";
import ErrorPage from "../pages/ErrorPage";
// data
import { navLinks, services, steps } from "../data/data.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout navLinks={navLinks} />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home services={services} steps={steps} />,
        index: true,
        path: "/",
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/works/:id",
        element: <Work />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id/:slig?",
        element: <Service />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id/:slug?",
        element: <Blog />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
    ],
  },
]);
const AppRouter = () => {
  return (
    <RouterProvider router={router}>
      <ScrollToTopAfterChangePage />
    </RouterProvider>
  );
};

export default AppRouter;
