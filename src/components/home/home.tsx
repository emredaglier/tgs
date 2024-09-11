import Video from "./video";
import Nav from "../nav/nav";
import HomeIntroduction from "./introduction";

const HomeApp = () => {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col">
        <Video />

        <Nav />
        <HomeIntroduction />
      </div>
    </>
  );
};

export default HomeApp;
