function EditNote() {
  const editting = false;
  return (
    <div className="px-5 flex flex-col gap-5 h-drawer mt-24">
      <div className="flex justify-between">
        <select className="select select-bordered">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <button className="btn btn-circle">
          {editting ? (
            <svg
              className="w-5 aspect-square text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5" />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      <h2 className="card-title col-span-2 text-4xl">Client Meeting Review </h2>
      <p className="text-md py-2 col-span-full">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
        accusamus quibusdam quasi blanditiis ipsam exercitationem optio, veniam
        atque amet consequuntur tempore, nihil provident esse quis itaque quia
        ad hic consequatur illo enim officiis! Explicabo rem, assumenda
        doloremque, repellat et unde iure rerum soluta cupiditate qui quibusdam
        eaque fuga ut laborum veritatis, at omnis. Facere, vel. Quis doloribus
        animi quidem ex quam repellat, aspernatur adipisci repudiandae fugiat
        dignissimos odit maiores assumenda numquam quibusdam vel similique magni
        ducimus suscipit, placeat sed fuga corrupti? Blanditiis pariatur vero
        deserunt debitis modi in eveniet nisi nesciunt asperiores laudantium
        repellendus, quibusdam eligendi porro, eum nulla veritatis illum
        repudiandae at earum reprehenderit, est assumenda facilis labore.
        Officia quibusdam dolores, dignissimos aliquid quam itaque sapiente
        atque? Temporibus ut deserunt obcaecati quidem vero suscipit quis
        distinctio, dolore magnam? Illum, mollitia tempore enim pariatur
        adipisci rem incidunt at repellat nesciunt iure voluptatibus
        necessitatibus facilis consequatur, fuga, veniam eos laborum dolorum?
      </p>
    </div>
  );
}

export default EditNote;
