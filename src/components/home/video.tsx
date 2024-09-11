import BackgroundVideo from "next-video/background-video";

const HomeVideo = () => {
  return (
    <>
      <div className="relative w-screen h-screen flex flex-col">
        <div
          className="absolute w-full h-full bg-black opacity-50"
          style={{ zIndex: 1 }}
        ></div>
        <video
          src={
            "https://heeayulnhyor92wd.public.blob.vercel-storage.com/bg-video-cGpFc9yCN3yC1jwjfTQN6qozBCojU3.webm"
          }
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        ></video>
      </div>
    </>
  );
};

export default HomeVideo;
