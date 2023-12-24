import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Drawer } from "@/components/notes/widgets";
import { sagaActions } from "@/constants";
import { getTags } from "@/functions";
import { setTags } from "@/redux/slices";

function Home() {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.READ_NOTES });
  }, [dispatch]);

  useEffect(() => {
    if (notes.length > 0) {
      const tags = getTags(notes);
      dispatch(setTags(tags));
    }
  }, [dispatch, notes]);

  return (
    <Fragment>
      <Navbar />
      <Drawer />
    </Fragment>
  );
}

export default Home;
