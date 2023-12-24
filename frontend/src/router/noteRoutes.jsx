import {
  Notes,
  CreateNote,
  NoteDetails,
  Profile,
  Settings,
  About,
  FilteredNotes,
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
    path: "/notes/:tag",
    element: <FilteredNotes />,
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
