import { Fragment } from "react";
import { Navbar, Drawer } from "@/components/notes/widgets";

function Home() {
  return (
    <Fragment>
      <Navbar />
      <Drawer />
    </Fragment>
  );
}

export default Home;
