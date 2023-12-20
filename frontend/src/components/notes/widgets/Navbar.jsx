import { Link, useLocation } from "react-router-dom";
import { Avater, ThemeController } from "./atoms";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar bg-base-300">
      <div className="dropdown dropdown-bottom navbar-start w-72 flex gap-3">
        <Avater />
      </div>

      <div className="text-sm breadcrumbs navbar-center">
        <ul>
          <li>
            <Link to={"notes"}>Notes</Link>
          </li>
          <li className="capitalize">
            {location.pathname !== "/notes"
              ? location.pathname.replace(/^\/+/, "")
              : null}
          </li>
        </ul>
      </div>
      <div className="navbar-end flex-1 px-3">
        <ThemeController />

        <Link
          to={`create`}
          className="btn text-white bg-blue-600 hover:border-blue-600 hover:border hover:text-blue-600 ml-5"
        >
          Add New Note
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
