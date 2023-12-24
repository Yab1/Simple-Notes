import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authIdle } from "@/redux/slices/authSlice";

function Avater() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  function logout() {
    localStorage.removeItem("daisy-notes-user");
    dispatch(authIdle());
  }

  return (
    <Fragment>
      <div>
        <div tabIndex={0} className="avatar btn btn-ghost btn-circle ml-3">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img alt="Tailwind CSS Navbar component" src={user.avatar} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to={`profile`}>Profile</Link>
          </li>
          <li>
            <Link to={`about`}>About</Link>
          </li>
          <li onClick={logout}>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <p className="font-semibold">{user.username}</p>
    </Fragment>
  );
}

export default Avater;
