import Video from "./video";
import Nav from "../nav/nav";
import HomeIntroduction from "./introduction";
import HomeAbout from "./about";

const HomeApp = () => {
  return (
    <>
      <div className="relative w-full h-full flex flex-col overflow-x-hidden font-geist">
        <Video />
        <Nav />
        <HomeIntroduction />
        <HomeAbout />
      </div>
    </>
  );
};

export default HomeApp;
