import { Building2, MapPinned, Send, Users } from "lucide-react";
import ImageSection from "../ui/image-section";

const Vector = () => {
  return (
    <>
      <svg
        className="absolute w-screen top-0 -translate-y-20"
        width="1920"
        height="162"
        viewBox="0 0 1920 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2254 0H-334V161.354H2254V0.000228882V0ZM2254 0.000228882C1394.06 74.3919 525.958 74.1996 -334 2.30346e-05L2254 0.000228882Z"
          fill="white"
          className="w-screen"
        />
      </svg>
    </>
  );
};

const Numbers = () => {
  return (
    <>
      <section className="flex flex-row w-full justify-between">
        <div className="flex flex-col rounded-tl-3xl rounded-br-3xl py-2 justify-center items-center w-[96px] h-[96px] 2xl:w-[120px] 2xl:h-[120px] bg-[--accent] text-white">
          <Building2 strokeWidth={1.25} color="white" size={48} />
          <span className="flex flex-col items-center">
            <h3 className="text-lg 2xl:text-xl font-bold">200+</h3>
            <p className="text-sm">Companies</p>
          </span>
        </div>
        <div className="flex flex-col rounded-tl-3xl rounded-br-3xl py-2 justify-center items-center w-[96px] h-[96px] 2xl:w-[120px] 2xl:h-[120px] bg-[--accent] text-white">
          <MapPinned strokeWidth={1.25} color="white" size={48} />
          <span className="flex flex-col items-center">
            <h3 className="text-lg 2xl:text-xl font-bold">8B+</h3>
            <p className="text-sm">Flights</p>
          </span>
        </div>
        <div className="flex flex-col rounded-tl-3xl rounded-br-3xl py-2 justify-center items-center w-[96px] h-[96px] 2xl:w-[120px] 2xl:h-[120px] bg-[--accent] text-white">
          <Users strokeWidth={1.25} size={48} color="white" />
          <span className="flex flex-col items-center">
            <h3 className="text-lg 2xl:text-xl font-bold">17.000+</h3>
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
      <section
        className="relative flex w-full lg:py-[196px] xl:py-[256px] 2xl:py-[384px] bg-[--background]"
        style={{ zIndex: 2 }}
      >
        <Vector />
        <ImageSection
          head="About"
          title="We’re Here for Customer Satisfaction"
          content="TGS, with an innovative and quality-driven service approach, proudly strengthens airline companies as one of the world's top ground handling firms."
          button=""
          buttonHref=""
          numbers={<Numbers />}
          imageUrl="https://heeayulnhyor92wd.public.blob.vercel-storage.com/phd-1as1IM2ZvJmXML9BJDQThpX2ZG0zTc.png"
        />
      </section>
    </>
  );
};

export default HomeAbout;
