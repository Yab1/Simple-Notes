function Navbar() {
  return (
    <header className="navbar bg-base-300">
      <div className="dropdown dropdown-bottom navbar-start">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>

      {/* <a className="btn btn-ghost hover:bg-transparent text-xl font-semibold font-playpen">
        daisy notes
      </a> */}

      <div className="navbar-end">
        <a className="btn bg-blue-300">Add New Note</a>
      </div>
    </header>
  );
}

export default Navbar;
