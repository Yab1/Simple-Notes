import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { colorMapping } from "@/constants";

function Drawer() {
  const renderTags = Object.entries(colorMapping).map(([key, values]) => (
    <Fragment key={crypto.randomUUID()}>
      <li className="mx-2">
        <a className="flex items-center text-white font-medium">
          <div
            className={`w-3 aspect-square ${values.bgColor} rounded-full`}
          ></div>
          {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
          <div
            className={`badge ${values.bgColor} border-none ml-auto text-white`}
          >
            07
          </div>
        </a>
      </li>
      <div className="divider my-1"></div>
    </Fragment>
  ));

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-5 ">
        <Outlet />
      </div>
      {/* <div className="drawer-content px-5 py-10 h-drawer grid place-content-center">
        <Outlet />
      </div> */}
      <div className="drawer-side h-fit">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu py-4 px-0 w-72 h-drawer text-base-content border-r border-r-base-300 grid">
          {renderTags}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
