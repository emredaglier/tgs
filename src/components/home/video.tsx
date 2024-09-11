const Video = () => {
  return (
    <>
      <div className="relative w-screen h-screen flex flex-col">
        <div
          className="absolute w-full h-full bg-black opacity-50"
          style={{ zIndex: 1 }}
        ></div>
        <video
          autoPlay
          muted
          loop
          className="absolute h-screen w-screen object-cover"
          style={{ zIndex: 0 }}
          src="/assets/videos/bg-video.mp4"
        />
      </div>
    </>
  );
};

export default Video;
