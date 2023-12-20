import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { noteSchema } from "../schema";

function CreateNote() {
  const tags = useSelector((state) => state.ui.tags);
  // const dispatch = useDispatch();
  // console.log(dispatch);

  const renderTags = tags.map((tag, index) => (
    <option key={index} value={tag.name}>
      {tag.name}
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
    <form onSubmit={formik.handleSubmit} className="flex flex-col w-[420px]">
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

      <select
        id="tag"
        name="tag"
        className="select select-bordered w-full max-w-lg mt-3"
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

      <button
        type="submit"
        className="btn bg-blue-600 hover:border-blue-600 hover:border hover:text-blue-600 px-7 mt-5"
      >
        Add Note
      </button>
    </form>
  );
}

export default CreateNote;
