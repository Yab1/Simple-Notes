import { Navigate, createBrowserRouter } from "react-router-dom";
import { Home, Auth } from "@/layouts";
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
        <Navigate to="/auth/sign-in" />
      ),
    },
    {
      path: "*",
      element: authenticated ? (
        <Navigate to="/notes" />
      ) : (
        <Navigate to="/auth/sign-in" />
      ),
    },
  ];

  return createBrowserRouter(baseRoutes, {
    basename: "/daisy-notes",
  });
};

export default getRouter;
