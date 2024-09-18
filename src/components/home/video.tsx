const HomeVideo = () => {
  return (
    <>
      <div className="relative h-[100vh] w-screen flex flex-col z-[5] pointer-events-none">
        <div className="absolute w-full h-full bg-black opacity-50 z-[1]"></div>
        <video
          src={
            "https://heeayulnhyor92wd.public.blob.vercel-storage.com/bg-loop-yI06O2DcPQfELDruZE5X367Olabk20"
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
