import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { colorMapping } from "@/constants";
import { useSelector } from "react-redux";
import { status } from "@/constants";
import DrawerSkeleton from "./DrawerSkeleton";

function Drawer() {
  const { tags, dbStatus } = useSelector((state) => state.notes);

  const renderTags =
    Object.keys(tags).length > 0
      ? Object.entries(tags).map(([key, value]) => (
          <Fragment key={key}>
            <li className="mx-2">
              <Link
                to={`/notes/${key}`}
                className="flex items-center text-white font-medium"
              >
                <div
                  className={`w-3 aspect-square ${
                    colorMapping[key.toUpperCase()].bgColor
                  } rounded-full`}
                ></div>
                {key}
                <div
                  className={`badge ${
                    colorMapping[key.toUpperCase()].bgColor
                  } border-none ml-auto text-white`}
                >
                  {value}
                </div>
              </Link>
            </li>
            <div className="divider my-1"></div>
          </Fragment>
        ))
      : null;

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content h-main overflow-auto">
        <Outlet />
      </div>
      <div className="drawer-side h-main">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu py-4 px-0 w-72 text-base-content border-r border-r-base-300 flex h-full">
          {dbStatus === status.LOADING ? <DrawerSkeleton /> : renderTags}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
