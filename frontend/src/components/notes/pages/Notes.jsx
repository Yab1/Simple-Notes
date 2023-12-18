import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Notes() {
  const notes = useSelector((state) => state.notes.notes);

  const renderNotes = notes.map(({ id, title, tag, detail, time, date }) => (
    <div
      key={id}
      className="card w-1/2 bg-pink-500 shadow-xl cursor-pointer text-white border border-white"
    >
      <div className="card-body grid grid-cols-4">
        <h2 className="card-title col-span-2">{title}</h2>
        <div className="card-actions justify-end col-start-4">
          <div className="badge badge-info py-5 rounded-lg font-bold text-white">
            {tag}
          </div>
        </div>
        <p className="text-sm py-2 col-span-full">{detail}</p>
        <p className="uppercase font-medium">{time}</p>
        <p className="uppercase col-span-2 col-start-3 ml-auto font-medium">
          {date}
        </p>
      </div>
    </div>
  ));

  return (
    <Link to={"/edit/1"} className="h-drawer py-5 flex flex-wrap gap-5">
      {renderNotes}
    </Link>
  );
}

export default Notes;
