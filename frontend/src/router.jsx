import { createBrowserRouter } from "react-router-dom";
import { Auth, Notes } from "@/layouts";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/notes",
    element: <Notes />,
  },
]);

export default router;
