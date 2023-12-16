import { createBrowserRouter } from "react-router-dom";
import { Auth, UserNotes } from "@/layouts";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/notes",
    element: <UserNotes />,
  },
]);

export default router;
