import {
  Notes,
  CreateNote,
  NoteDetails,
  Profile,
  Settings,
  About,
} from "@/components/notes/pages";

const noteRoutes = [
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

export default noteRoutes;