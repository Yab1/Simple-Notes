function Notes() {
  return (
    <div className="card w-1/2 bg-pink-100 shadow-xl">
      <div className="card-body grid grid-cols-4">
        <h2 className="card-title col-span-2">Financial Tips </h2>
        <div className="card-actions justify-end col-start-4">
          <button className="btn btn-sm btn-info">Assignment</button>
        </div>

        <p className="text-sm py-2 col-span-full">
          Learn essential financial tips for managing your budget and achieving
          your savings goals. Discover strategies to make the most of your
          hard-earned money.
        </p>
        <p className="uppercase">09:35PM</p>
        <p className="uppercase col-span-2 col-start-3 ml-auto">
          07 January 2023
        </p>
      </div>
    </div>
  );
}

export default Notes;
