const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
        src="/assets/videos/home.mp4"
      />
    </div>
  );
};

export default Video;
