import { useSelector } from "react-redux";
import { EditMode, ViewMode } from "./components";

function NoteDetails() {
  const editing = useSelector((state) => state.ui.editing);

  return <div>{editing ? <EditMode /> : <ViewMode />}</div>;
}

export default NoteDetails;
