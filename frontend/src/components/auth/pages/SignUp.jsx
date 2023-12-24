import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupSchema } from "../schema";
import { sagaActions } from "@/constants";
import { generateAvatar } from "@/functions";

function SignUp() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      avatar: generateAvatar(),
    },
    validationSchema: signupSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      dispatch({
        type: sagaActions.SIGNUP_USER,
        credentials: values,
      });
    },
  });

  return (
    <div className="card bg-neutral text-neutral-content">
      <div className="card-body grid grid-cols-2">
        <h1 className="text-white text-2xl font-bold col-span-full justify-self-start">
          Join us
        </h1>
        <button className="btn btn-ghost border border-neutral-500">
          <svg
            className="w-5 aspect-square text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
          </svg>
          <span>Sign up with Google</span>
        </button>

        <button className="btn btn-ghost border border-neutral-500">
          <svg
            className="w-5 aspect-square text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
          </svg>
          <span>Sign up with Github</span>
        </button>

        <div className="divider col-span-full">or</div>

        <form
          onSubmit={formik.handleSubmit}
          className="col-span-full flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <input
              id="username"
              type="text"
              placeholder="Username"
              className={`input input-bordered w-full ${
                formik.errors.username ? "input-error" : ""
              }`}
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && (
              <p className="text-red-500 text-sm self-start ml-3 mt-px">
                {formik.errors.username}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className={`input input-bordered w-full ${
                formik.errors.email ? "input-error" : ""
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && (
              <p className="text-red-500 text-sm self-start ml-3 mt-px">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              id="password"
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              className={`input input-bordered w-full ${
                formik.errors.password ? "input-error" : ""
              }`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && (
              <p className="text-red-500 text-sm self-start ml-3 mt-px">
                {formik.errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn bg-gray-800 hover:bg-gray-700 px-7 col-start-1 row-start-3"
          >
            Sign up to your account
          </button>
          <p>
            Already have an account?
            <button
              type="button"
              className="btn btn-active btn-link !no-underline p-0 ml-1"
            >
              <Link to={"/auth/sign-in"}>Sign in here</Link>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
