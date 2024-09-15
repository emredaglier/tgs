import { Building2, MapPinned, Users } from "lucide-react";
import ImageSection from "../ui/image-section";

const Numbers = () => {
  return (
    <>
      <section className="flex flex-row w-full justify-between">
        <div
          className="flex flex-col rounded-tl-3xl hover:cursor-default hover:-translate-y-3
         rounded-br-3xl py-2 justify-center items-center
        w-[84px] h-[84px] lg:w-[96px] lg:h-[96px] 2xl:w-[120px] 2xl:h-[120px] min-[2000px]:w-[160px] min-[2000px]:h-[160px]
        transition-all duration-1000 bg-[--accent] text-white"
        >
          <Building2 strokeWidth={1.25} color="white" size={48} />
          <span className="flex flex-col items-center">
            <h3 className="text-sm lg:text-lg 2xl:text-xl font-bold">200+</h3>
            <p className="text-sm">Companies</p>
          </span>
        </div>
        <div
          className="flex flex-col rounded-tl-3xl hover:cursor-default hover:-translate-y-3
         rounded-br-3xl py-2 justify-center items-center
         w-[84px] h-[84px] lg:w-[96px] lg:h-[96px] 2xl:w-[120px] 2xl:h-[120px] min-[2000px]:w-[160px] min-[2000px]:h-[160px]
        transition-all duration-1000 bg-[--accent] text-white"
        >
          <MapPinned strokeWidth={1.25} color="white" size={48} />
          <span className="flex flex-col items-center">
            <h3 className="text-sm lg:text-lg 2xl:text-xl font-bold">8B+</h3>
            <p className="text-sm">Flights</p>
          </span>
        </div>
        <div
          className="flex flex-col rounded-tl-3xl hover:cursor-default hover:-translate-y-3
         rounded-br-3xl py-2 justify-center items-center
         w-[84px] h-[84px] lg:w-[96px] lg:h-[96px] 2xl:w-[120px] 2xl:h-[120px] min-[2000px]:w-[160px] min-[2000px]:h-[160px]
        transition-all duration-1000 bg-[--accent] text-white"
        >
          <Users strokeWidth={1.25} size={48} color="white" />
          <span className="flex flex-col items-center">
            <h3 className="text-sm lg:text-lg 2xl:text-xl font-bold">
              17.000+
            </h3>
            <p className="text-sm">Employee</p>
          </span>
        </div>
      </section>
    </>
  );
};

const HomeAbout = () => {
  return (
    <>
      <section className="relative z-[2] overflow-hidden flex w-full h-min rounded-t-3xl bg-[--background]">
        <div className="absolute  flex w-[300px] h-[300px] translate-y-[500px] translate-x-[150px] bg-transparent dark:bg-[--accent-900] dark:blur-[200px] z-[1] transition-all duration-1000"></div>

        <div className="flex md:py-[96px] lg:py-[196px] xl:py-[256px] 2xl:py-[384px] z-[1]">
          <ImageSection
            head="About"
            title="We’re Here for Customer Satisfaction"
            content="TGS, with an innovative and quality-driven service approach, proudly strengthens airline companies as one of the world's top ground handling firms."
            button=""
            buttonHref=""
            numbers={<Numbers />}
            imageUrl="https://heeayulnhyor92wd.public.blob.vercel-storage.com/phd-1as1IM2ZvJmXML9BJDQThpX2ZG0zTc.png"
          />
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
