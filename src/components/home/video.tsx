const Video = () => {
  return (
    <div className="h-screen w-screen">
      <div className="absolute bg-black opacity-50"></div>
      <video
        autoPlay
        muted
        loop
        className="h-screen w-screen  object-cover"
        src="/assets/videos/bg-video.mp4"
      />
    </div>
  );
};

export default Video;
