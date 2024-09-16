import { Building2, MapPinned, Users } from "lucide-react";
import ImageSection from "../ui/image-section";
import HomePartners from "./parners";

const Numbers = () => {
  return (
    <>
      <section className="flex flex-row w-full justify-between">
        <div
          className="flex flex-col rounded-tl-3xl hover:cursor-default hover:-translate-y-3
        dark:hover:shadow-2xl dark:hover:shadow-[--accent-900] rounded-br-3xl py-2 justify-center items-center
        w-[96px] h-[96px] md:w-[84px] md:h-[84px] lg:w-[96px] lg:h-[96px] 2xl:w-[120px] 2xl:h-[120px] min-[2000px]:w-[160px] min-[2000px]:h-[160px]
        transition-all duration-1000 bg-[--accent] text-white"
        >
          <Building2 strokeWidth={1.25} color="white" size={48} />
          <span className="flex flex-col items-center">
            <h3 className="text-sm lg:text-lg 2xl:text-xl font-bold hover:pointer-events-none">
              200+
            </h3>
            <p className="text-sm hover:pointer-events-none">Companies</p>
          </span>
        </div>
        <div
          className="flex flex-col rounded-tl-3xl hover:cursor-default hover:-translate-y-3
        dark:hover:shadow-2xl dark:hover:shadow-[--accent-900] rounded-br-3xl py-2 justify-center items-center
        w-[96px] h-[96px] md:w-[84px] md:h-[84px] lg:w-[96px] lg:h-[96px] 2xl:w-[120px] 2xl:h-[120px] min-[2000px]:w-[160px] min-[2000px]:h-[160px]
        transition-all duration-1000 bg-[--accent] text-white"
        >
          <MapPinned strokeWidth={1.25} color="white" size={48} />
          <span className="flex flex-col items-center">
            <h3 className="text-sm lg:text-lg 2xl:text-xl font-bold hover:pointer-events-none">
              8B+
            </h3>
            <p className="text-sm hover:pointer-events-none">Flights</p>
          </span>
        </div>
        <div
          className="flex flex-col rounded-tl-3xl hover:cursor-default hover:-translate-y-3
        dark:hover:shadow-2xl dark:hover:shadow-[--accent-900] rounded-br-3xl py-2 justify-center items-center
        w-[96px] h-[96px] md:w-[84px] md:h-[84px] lg:w-[96px] lg:h-[96px] 2xl:w-[120px] 2xl:h-[120px] min-[2000px]:w-[160px] min-[2000px]:h-[160px]
        transition-all duration-1000 bg-[--accent] text-white"
        >
          <Users strokeWidth={1.25} size={48} color="white" />
          <span className="flex flex-col items-center">
            <h3 className="text-sm lg:text-lg 2xl:text-xl font-bold hover:pointer-events-none">
              17.000+
            </h3>
            <p className="text-sm hover:pointer-events-none">Employee</p>
          </span>
        </div>
      </section>
    </>
  );
};

const HomeAbout = () => {
  return (
    <>
      <section className="relative z-[2] overflow-hidden flex flex-col w-full h-min ">
        <div className="flex flex-col gap-40 sm:gap-20 xl:gap-40 min-[2000px]:gap-56 py-[196px] sm:py-[96px] lg:py-[196px] xl:py-[256px] 2xl:py-[384px] z-[1]">
          <ImageSection
            head="About"
            title="We’re Here for Customer Satisfaction"
            content="TGS, with an innovative and quality-driven service approach, proudly strengthens airline companies as one of the world's top ground handling firms."
            button=""
            buttonHref=""
            numbers={<Numbers />}
            imageUrl="https://heeayulnhyor92wd.public.blob.vercel-storage.com/phd-1as1IM2ZvJmXML9BJDQThpX2ZG0zTc.png"
            bgDark={false}
          />
          <HomePartners />
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
