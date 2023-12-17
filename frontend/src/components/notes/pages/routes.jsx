import { Notes, CreateNote, EditNote, Profile, Settings, About } from "./index";

const childRoutes = [
  {
    path: "/notes",
    element: <Notes />,
  },
  {
    path: "/create",
    element: <CreateNote />,
  },
  {
    path: "/edit/:id",
    element: <EditNote />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/setting",
    element: <Settings />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default childRoutes;
