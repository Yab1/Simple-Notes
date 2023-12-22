import { useFormik } from "formik";
import { noteSchema } from "../schema";
import { colorMapping } from "@/constants";

function CreateNote() {
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
      title: "",
      detail: "",
      tag: "",
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
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-3 grid-rows-6 gap-3 mt-5"
      >
        <div>
          <input
            id="title"
            type="text"
            placeholder="Title"
            className={`input input-bordered w-full ${
              formik.errors.title ? "input-error" : ""
            }`}
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.title && (
            <p className="text-red-500 text-sm self-start ml-3 mt-px">
              {formik.errors.title}
            </p>
          )}
        </div>

        <div className="col-start-2 col-span-2 row-span-full flex flex-col">
          <textarea
            type="text"
            id="detail"
            rows="10"
            placeholder="Detail"
            className={`textarea textarea-bordered h-full ${
              formik.errors.detail ? "textarea-error" : ""
            }`}
            value={formik.values.detail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.detail && (
            <p className="text-red-500 text-sm ml-3 mt-px">
              {formik.errors.detail}
            </p>
          )}
        </div>
        <div className="col-start-1 row-start-2">
          <select
            id="tag"
            name="tag"
            className={`select select-bordered max-w-lg w-full ${
              formik.errors.tag ? "select-error" : ""
            }`}
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
        </div>

        <button
          type="submit"
          className="btn text-white bg-blue-600 hover:border-blue-600 hover:border hover:text-blue-600 px-7 col-start-1 row-start-3"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
