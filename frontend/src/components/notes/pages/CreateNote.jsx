function CreateNote() {
  return (
    <form
      action=""
      className="flex flex-col justify-center items-center h-full gap-5"
    >
      <input
        required
        type="text"
        placeholder="Note Title"
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        required
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Details"
      ></textarea>
      <select className="select select-bordered w-full max-w-lg">
        <option disabled selected>
          Select Note Category
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </form>
  );
}

export default CreateNote;
