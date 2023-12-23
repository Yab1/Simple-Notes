import { Navigate, createBrowserRouter } from "react-router-dom";
import { Home, Auth, ErrorPage } from "@/layouts";
import authRoutes from "./authRoutes";
import noteRoutes from "./noteRoutes";

const getRouter = (authenticated) => {
  const baseRoutes = [
    {
      path: "/",
      element: authenticated ? <Home /> : <Auth />,
      children: authenticated ? noteRoutes : authRoutes,
      errorElement: authenticated ? (
        <Navigate to="/notes" />
      ) : (
        <Navigate to="/sign-in" />
      ),
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return createBrowserRouter(baseRoutes, {
    basename: authenticated ? "/daisy-notes" : "/auth",
  });
};

export default getRouter;
