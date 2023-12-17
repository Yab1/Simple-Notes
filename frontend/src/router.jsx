import { createBrowserRouter } from "react-router-dom";
import { Auth, Dashboard } from "@/layouts";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/notes",
    element: <Dashboard />,
  },
]);

export default router;
