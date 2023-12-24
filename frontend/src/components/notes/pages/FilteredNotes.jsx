import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { colorMapping } from "@/constants";
import { NoteSkeleton } from "../widgets";
import { status } from "@/constants";

function FilteredNotes() {
  const { tag } = useParams();
  const { notes, dbStatus } = useSelector((state) => state.notes);
  const filteredNotes = notes.filter((note) => note.tag === tag);

  const renderNotes = filteredNotes.map(
    ({ _id, title, tag, detail, updatedAt }) => (
      <Link
        key={crypto.randomUUID()}
        to={`/note/${_id}`}
        className={
          "card text-white shadow-xl p-5 h-60 " +
          colorMapping[tag.toUpperCase()].bgColor
        }
      >
        <div className="card-body grid grid-cols-4 grid-rows-3 p-0">
          <h2 className="card-title col-span-2 h-fit">{title}</h2>
          <div className="card-actions justify-end col-start-4 h-fit">
            <div
              className={
                "badge bg-white border-none rounded-lg font-bold py-5 " +
                colorMapping[tag.toUpperCase()].textColor
              }
            >
              {tag}
            </div>
          </div>
          <p className="text-sm col-span-full row-start-2 h-fit">
            {detail.slice(0, 200)}
            {detail.length > 200 ? "..." : null}
          </p>
          <p className=" justify-self-start place-self-end col-span-full text-gray-300 h-fit">
            {formatDistanceToNow(new Date(updatedAt), { addSuffix: true })}
          </p>
        </div>
      </Link>
    )
  );
  return (
    <div className="grid grid-cols-2 gap-5 p-5">
      {dbStatus === status.LOADING ? <NoteSkeleton /> : renderNotes}
    </div>
  );
}

export default FilteredNotes;
