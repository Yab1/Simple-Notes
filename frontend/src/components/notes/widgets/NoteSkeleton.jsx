function NoteSkeleton() {
  const skeletons = Array(4).fill(0);

  const renderSkeletons = skeletons.map(() => (
    <div
      key={crypto.randomUUID()}
      className="card-body grid grid-cols-4 grid-rows-5 p-0"
    >
      <h2 className="skeleton col-span-2"></h2>
      <div className="skeleton card-actions justify-end col-start-4 rounded-lg py-5"></div>
      <p className="skeleton col-span-full row-start-2 row-span-4 pt-2"></p>
    </div>
  ));

  return renderSkeletons;
}

export default NoteSkeleton;
