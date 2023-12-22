import { createBrowserRouter } from "react-router-dom";
import { childRoutes } from "@/components/notes/pages";
import { authChildRoutes } from "@/components/auth/pages";
import { Home, Auth, ErrorPage } from "@/layouts";

const authRoutes = [
  {
    path: "/",
    element: <Auth />,
    children: authChildRoutes,
    errorElement: <ErrorPage />,
  },
];

const routes = [
  {
    path: "/",
    element: <Home />,
    children: childRoutes,
    errorElement: <ErrorPage />,
  },
];

export const authRouter = createBrowserRouter(authRoutes, {
  basename: "/auth",
});

export const router = createBrowserRouter(routes, {
  basename: "/daisy-notes",
});
