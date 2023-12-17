import { createBrowserRouter } from "react-router-dom";
import { childRoutes } from "@/components/notes/pages";
import { Home, ErrorPage } from "@/layouts";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: childRoutes,
    errorElement: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes, {
  basename: "/quick-notes",
});

export default router;
