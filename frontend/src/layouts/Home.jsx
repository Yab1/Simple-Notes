import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navbar, Drawer } from "@/components/notes/widgets";
import { sagaActions } from "@/constants";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.READ_NOTES });
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />
      <Drawer />
    </Fragment>
  );
}

export default Home;
