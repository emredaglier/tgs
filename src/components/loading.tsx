const Loading = () => {
  return (
    <>
      <div className="flex bg-[--background] w-screen h-svh items-center justify-center">
        <div className="flex space-x-2 justify-center items-center bg-[--background] h-svh">
          <div className="h-8 w-8 bg-[--accent] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-[--accent] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-[--accent] rounded-full animate-bounce"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
