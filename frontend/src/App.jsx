import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { status } from "@/constants";
import { getRouter } from "@/router";
import { authSucceeded } from "@/redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.authStatus);
  const router = getRouter(Boolean(authStatus === status.SUCCEEDED));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("daisy-notes-user"));
    if (user) dispatch(authSucceeded(user));
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
