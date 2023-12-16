import { Fragment } from "react";
import { Navbar, Drawer } from "@/components/user-notes/widgets";

function UserNotes() {
  return (
    <Fragment>
      <Navbar />
      <Drawer />
    </Fragment>
  );
}

export default UserNotes;
