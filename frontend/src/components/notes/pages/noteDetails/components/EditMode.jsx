import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { noteSchema } from "@/components/notes/schema";
import { colorMapping } from "@/constants";

function EditMode() {
  const { noteId } = useParams();
  const notes = useSelector((state) => state.notes.notes);
  const note = notes.filter((note) => note._id === noteId)[0];

  const renderTags = Object.entries(colorMapping).map(([key]) => (
    <option
      key={crypto.randomUUID()}
      value={key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
    >
      {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
    </option>
  ));

  const formik = useFormik({
    initialValues: {
      title: note.title,
      detail: note.detail,
      tag: note.tag,
    },
    validationSchema: noteSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleSelectChange = (event) => {
    formik.setFieldValue("tag", event.target.value);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="px-5 flex flex-col gap-5 mt-14"
    >
      <div className="flex justify-between items-center mb-2">
        <select
          id="tag"
          name="tag"
          className="select select-bordered w-fit mt-3"
          value={formik.values.tag}
          onChange={handleSelectChange}
          onBlur={formik.handleBlur}
        >
          <option value="Choose a tag" className="text-gray-400">
            Chooe a tag
          </option>
          {renderTags}
        </select>
        {formik.touched.tag && formik.errors.tag && (
          <p className="text-red-500 text-sm self-start ml-3 mt-px">
            {formik.errors.tag}
          </p>
        )}
        <button className="btn btn-circle" type="submit">
          <svg
            className="w-5 aspect-square text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5" />
          </svg>
        </button>
      </div>

      <input
        id="title"
        type="text"
        placeholder="Title"
        className="input input-bordered"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.title && (
        <p className="text-red-500 text-sm self-start ml-3 mt-px">
          {formik.errors.title}
        </p>
      )}

      <textarea
        type="text"
        id="detail"
        rows="10"
        placeholder="Detail"
        className="textarea textarea-bordered mt-3"
        value={formik.values.detail}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>
      {formik.errors.detail && (
        <p className="text-red-500 text-sm self-start ml-3 mt-px">
          {formik.errors.detail}
        </p>
      )}
    </form>
  );
}

export default EditMode;
