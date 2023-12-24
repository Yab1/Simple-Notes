import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { colorMapping } from "@/constants";
import { formatDate } from "@/functions";
import { NoteSkeleton } from "../widgets";
import { status } from "@/constants";

function Notes() {
  const { notes, dbStatus } = useSelector((state) => state.notes);

  const renderNotes = notes.map(({ _id, title, tag, detail, updatedAt }) => {
    const { time, date } = formatDate(updatedAt);
    return (
      <Link
        key={_id}
        to={`/note/${_id}`}
        className={
          "card text-white shadow-xl p-5 h-56 " +
          colorMapping[tag.toUpperCase()].bgColor
        }
      >
        <div className="card-body grid grid-cols-4 grid-rows-4 p-0">
          <h2 className="card-title col-span-2">{title}</h2>
          <div className="card-actions justify-end col-start-4">
            <div
              className={
                "badge bg-white border-none rounded-lg font-bold py-5 " +
                colorMapping[tag.toUpperCase()].textColor
              }
            >
              {tag}
            </div>
          </div>
          <p className="text-sm col-span-full row-start-2 row-span-2 pt-2">
            {detail.slice(0, 200)}
            {detail.length > 200 ? "..." : null}
          </p>
          <p className="uppercase font-medium justify-self-start place-self-end">
            {time}
          </p>
          <p className="uppercase col-span-2 col-start-3 font-medium justify-self-end place-self-end">
            {date}
          </p>
        </div>
      </Link>
    );
  });

  return (
    <div className="grid grid-cols-2 gap-5">
      {dbStatus === status.LOADING ? <NoteSkeleton /> : renderNotes}
    </div>
  );
}

export default Notes;
