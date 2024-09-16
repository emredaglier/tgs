import HomeAbout from "./about";
import HomeServices from "./services/services";

const HomeContent = () => {
  return (
    <>
      <main className="relative w-full h-full flex flex-col ">
        <div
          className="absolute flex w-[300px] h-[300px]
        min-[2000px]:translate-y-[150%] xl:translate-y-[100%] translate-y-[50%] translate-x-[150px]
        xl:opacity-50 opacity-10
        bg-transparent dark:bg-[--accent-900] dark:blur-[200px] z-[1] transition-all duration-1000"
        ></div>

        <div
          className="absolute right-0 flex w-[600px]
        h-[600px] min-[2000px]:translate-y-[-100%] xl:translate-y-[-50%] translate-y-[50%] translate-x-[150px]
        xl:opacity-50 opacity-10
        bg-transparent dark:bg-[--accent-900] dark:blur-[200px] z-[1] transition-all duration-1000"
        ></div>

        <div
          className="absolute bottom-0 flex w-[1200px]
        h-[1200px] min-[2000px]:translate-y-[-150%] min-[1500px]:translate-y-[-120%] xl:translate-y-[-70%]  translate-y-[-50%] min-[2000px]:translate-x-[50%] xl:translate-x-[25%] lg:translate-x-[10%]
        xl:opacity-30 opacity-20
        bg-transparent dark:bg-[--accent-900] dark:blur-[200px] z-[1] transition-all duration-1000"
        ></div>

        <div
          className="absolute bottom-0 flex w-[600px] h-[600px]
        min-[2000px]:translate-y-[-100%] xl:translate-y-[-100%] translate-y-[-5%] translate-x-[150px]
        xl:opacity-50 opacity-10
        bg-transparent dark:bg-[--accent-900] dark:blur-[200px] z-[1] transition-all duration-1000"
        ></div>

        <HomeAbout />
        <HomeServices />
      </main>
    </>
  );
};

export default HomeContent;
