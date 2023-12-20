import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { colorMapping } from "@/constants";

function Notes() {
  const notes = useSelector((state) => state.notes.notes);

  const renderNotes = notes.map(({ id, title, tag, detail, time, date }) => (
    <div
      key={id}
      className={
        "card shadow-xl cursor-pointer text-white " +
        colorMapping[tag.toUpperCase()].bgColor
      }
    >
      <div className="card-body grid grid-cols-4">
        <h2 className="card-title col-span-2">{title}</h2>
        <div className="card-actions justify-end col-start-4">
          <div
            className={
              "badge bg-white border-none py-5 rounded-lg font-bold " +
              colorMapping[tag.toUpperCase()].textColor
            }
          >
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
    <Link to={"/edit/1"} className="h-drawer py-5 grid grid-cols-2 gap-5">
      {renderNotes}
    </Link>
  );
}

export default Notes;
