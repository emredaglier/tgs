import { ArrowUpRight } from "lucide-react";
import margin from "../margin";
import { Button } from "../ui/button";

const HomeIntroduction = () => {
  return (
    <>
      <div
        className={`absolute flex flex-col lg:w-2/3 xl:w-1/2 h-screen justify-center ${margin}`}
        style={{ zIndex: 3 }}
      >
        <div className="flex flex-col max-w gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              We make a difference with our professional team.
            </h1>
            <h3 className="text-white tracking-wide font-light">
              Professionalism, respect, teamwork, dynamism, and innovation are
              our core values. While using resources efficiently, we adhere to
              the highest security standards in confidentiality. We act with the
              principle of excellence and reliability at every step.
            </h3>
          </div>

          <Button variant="default" size={"lg"} className="w-min gap-5">
            Services
            <ArrowUpRight size={28} strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomeIntroduction;
