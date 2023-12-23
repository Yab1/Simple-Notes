import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loading } from "@/layouts";
import { status } from "@/constants";
import { getRouter } from "@/router";

function App() {
  const authStatus = useSelector((state) => state.auth.authStatus);
  const router = getRouter(Boolean(authStatus === status.SUCCEEDED));

  return (
    <Fragment>
      {authStatus === status.LOADING ? <Loading /> : null}
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
