import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { colorMapping } from "@/constants";
import { toggleEditing } from "@/redux/slices/uiSlice";
import { sagaActions } from "@/constants";

function ViewMode() {
  const { noteId } = useParams();
  const notes = useSelector((state) => state.notes.notes);
  const note = notes.filter((note) => note._id === noteId)[0];
  const dispatch = useDispatch();

  return (
    <div className="px-5 flex flex-col gap-5 mt-14">
      <div className="flex items-center mb-2 gap-3">
        <div
          className={`badge h-10 rounded-md ${
            colorMapping[note.tag.toUpperCase()].bgColor
          } border-none text-white font-semibold px-3`}
        >
          {note.tag}
        </div>
        <div
          className="tooltip tooltip-bottom ml-auto "
          data-tip="
        Delete note"
        >
          <button
            className="btn btn-circle"
            onClick={() => dispatch({ type: sagaActions.DELETE_NOTE, noteId })}
          >
            <svg
              className="w-5 aspect-square text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.3"
                d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
              />
            </svg>
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Edit note">
          <button
            className="btn btn-circle"
            onClick={() => dispatch(toggleEditing())}
          >
            <svg
              className="w-5 aspect-square text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
              />
            </svg>
          </button>
        </div>
      </div>

      <h2 className="card-title col-span-2 text-4xl">{note.title}</h2>
      <p className="text-md py-2 col-span-full">{note.detail}</p>
    </div>
  );
}

export default ViewMode;
