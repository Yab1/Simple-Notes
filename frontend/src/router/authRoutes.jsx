import { SignUp, SignIn } from "@/components/auth/pages";

const authRoutes = [
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default authRoutes;
