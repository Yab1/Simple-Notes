import { RouterProvider } from "react-router-dom";
import { router, authRouter } from "@/router";

function App() {
  const auth = false;
  return <RouterProvider router={auth ? router : authRouter} />;
}

export default App;
