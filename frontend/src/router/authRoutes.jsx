import { SignUp, SignIn } from "@/components/auth/pages";

const authRoutes = [
  {
    path: "/auth/sign-in",
    element: <SignIn />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUp />,
  },
];

export default authRoutes;
