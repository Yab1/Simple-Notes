import { Link } from "react-router-dom";

function Notes() {
  return (
    <Link to={"/edit/1"}>
      <div className="card w-1/2 bg-pink-100 shadow-xl cursor-pointer">
        <div className="card-body grid grid-cols-4">
          <h2 className="card-title col-span-2">Financial Tips </h2>
          <div className="card-actions justify-end col-start-4">
            <div className="badge badge-info py-5 rounded-lg font-bold text-white">
              Assignment
            </div>
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
    </Link>
  );
}

export default Notes;
