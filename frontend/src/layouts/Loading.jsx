function Loading() {
  return (
    <div className="absolute inset-0 backdrop-blur-sm z-50 grid place-content-center">
      <div className="rounded-md w-16 aspect-square border-4 border-t-4 border-blue-500 animate-spin-slow"></div>
    </div>
  );
}

export default Loading;
