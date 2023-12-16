// Material-UI imports
import Container from "@mui/material/Container";

// Component imports
import NoteCard from "../components/NoteCard";

// Other imports
import Masonry from "react-masonry-css";

export default function Notes({ notes, handleDelete }) {
  const breakpoints = {
    default: 4,
    1100: 2,
    700: 2,
    500: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
