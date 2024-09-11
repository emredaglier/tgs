import Video from "./video";
import Nav from "../nav/nav";

const HomeApp = () => {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col">
        <Video />
        <Nav />
      </div>
    </>
  );
};

export default HomeApp;
