import { Fragment } from "react";
import { Navbar, Drawer } from "@/notes/widgets/";

function Notes() {
  return (
    <Fragment>
      <Navbar />
      <Drawer />
    </Fragment>
  );
}

export default Notes;
