import {
  Notes,
  CreateNote,
  NoteDetails,
  Profile,
  Settings,
  About,
} from "./index";

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
    path: "/note/:noteId",
    element: <NoteDetails />,
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
