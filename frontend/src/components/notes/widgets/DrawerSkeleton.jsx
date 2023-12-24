function DrawerSkeleton() {
  const skeletons = Array(11).fill(0);

  const renderSkeletons = skeletons.map(() => (
    <div key={crypto.randomUUID()} className="flex flex-col">
      <p className="skeleton pt-8 rounded-none mx-5"></p>
      <p className="skeleton pt-px my-2"></p>
    </div>
  ));

  return renderSkeletons;
}

export default DrawerSkeleton;
