const Loading = () => {
  return (
    <>
      <div
        className="absolute flex w-screen h-screen bg-[--background] text-[--foreground] justify-center items-center"
        style={{ zIndex: 99 }}
      >
        <h1>Loading</h1>
      </div>
    </>
  );
};

export default Loading;
