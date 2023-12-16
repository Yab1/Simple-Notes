// React imports
import { useReducer, useEffect, useRef } from "react";

// React Router DOM imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Component imports
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";

// Material-UI imports
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

// Data import
import data from "./data/db.json";

// Reducer imports
import { ACTION_TYPES } from "./variables/ACTION_TYPES";
import { actionReducer } from "./reducers/notesReducer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
    },
    secondary: purple,
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  },
});

function App() {
  const [notes, dispatch] = useReducer(actionReducer, []);

  useEffect(() => {
    const root = document.querySelector("#root");
    const homepage = document.querySelector(".homepage-container");
    const layout = document.querySelector(".layout");
    layout.classList.add("prevent-scroll");
    setTimeout(() => {
      homepage.classList.remove("active");
      layout.classList.add("active");
    }, 4000);
    setTimeout(() => {
      homepage.classList.add("none");
      layout.classList.remove("hidden");
      layout.classList.remove("prevent-scroll");
      layout.classList.remove("active");
      homepage.classList.remove("hidden");
      root.classList.remove("prevent-scroll");
    }, 4500);
  }, []);

  useEffect(() => {
    const storage = localStorage.getItem("simple_notes");
    if (storage && JSON.parse(storage).length > 0) {
      handleUpdate(JSON.parse(storage));
    } else {
      handleUpdate(data.notes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("simple_notes", JSON.stringify(notes));
  }, [notes]);

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    dispatch({ type: ACTION_TYPES.UPDATE_NOTES, payload: newNotes });
  };

  const handleAdd = (newNote) => {
    dispatch({ type: ACTION_TYPES.ADD_NOTE, payload: newNote });
  };

  const handleUpdate = (newNote) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_NOTES,
      payload: newNote,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route>
          <Homepage />
          <Layout>
            <Switch>
              <Route exact path="/">
                <Notes notes={notes} handleDelete={handleDelete} />
              </Route>
              <Route path="/create">
                <Create handleAdd={handleAdd} />
              </Route>
            </Switch>
          </Layout>
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
