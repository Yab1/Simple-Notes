import { Fragment } from "react";

function Drawer() {
  const tags = [
    { name: "Assignment", background: "bg-info", badge: "badge-info" },
    { name: "Ideas", background: "bg-success", badge: "badge-success" },
    { name: "Meetings", background: "bg-primary", badge: "badge-primary" },
    { name: "Personal", background: "bg-secondary", badge: "badge-secondary" },
    { name: "Project", background: "bg-warning", badge: "badge-warning" },
    { name: "Shopping", background: "bg-info", badge: "badge-info" },
    { name: "Study", background: "bg-error", badge: "badge-error" },
    { name: "Wishlist", background: "bg-success", badge: "badge-success" },
    { name: "Work", background: "bg-primary", badge: "badge-primary" },
  ];

  const renderTags = tags.map((tag, index) => (
    <Fragment key={index}>
      <li className="mx-2">
        <a className="flex items-center">
          <div
            className={`w-3 aspect-square ${tag.background} rounded-full`}
          ></div>
          {tag.name}
          <div className={`badge ${tag.badge} ml-auto`}>07</div>
        </a>
      </li>
      <div className="divider my-1"></div>
    </Fragment>
  ));

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-5 pt-10 h-4">
        <div className="card w-1/2 bg-pink-100 shadow-xl">
          <div className="card-body grid grid-cols-4">
            <h2 className="card-title col-span-2">Financial Tips </h2>
            <div className="card-actions justify-end col-start-4">
              <button className="btn btn-sm btn-info">Assignment</button>
            </div>

            <p className="text-sm py-2 col-span-full">
              Learn essential financial tips for managing your budget and
              achieving your savings goals. Discover strategies to make the most
              of your hard-earned money.
            </p>
            <p className="uppercase">09:35PM</p>
            <p className="uppercase col-span-2 col-start-3 ml-auto">
              07 January 2023
            </p>
          </div>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side h-fit">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu py-4 px-0 w-72 h-drawer text-base-content border-r border-r-base-300">
          {renderTags}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
