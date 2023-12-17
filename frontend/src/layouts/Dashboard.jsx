import { Fragment } from "react";
import { Navbar, Drawer } from "@/components/notes/widgets";

function Dashboard() {
  return (
    <Fragment>
      <Navbar />
      <Drawer />
    </Fragment>
  );
}

export default Dashboard;
