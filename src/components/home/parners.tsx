import Image from "next/image";
import useDarkMode from "../isDark";

const HomePartners = () => {
  const isDarkMode = useDarkMode();
  const partners = [
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/turkishairlines-EgTLpjNMTksMWtTsDLSL5SOSZKgNkX.svg",
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/turkishcargo-nt283m3aoPvAVU9VMbU6lbsRlZL7T6.svg",
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/aircanada-snFLnEdb2J9X13eL2wZHw2JGy9U7Kd.svg",
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/sunexpress-exYOZrotUPSi0izh5HkxowuPa0tIje.svg",
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/eurowings-7xsCr8i1JYrOOxACC6bBYK4LMWnBtc.svg",
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/ajet-17CFLKdVHLaLWJQAxZ2XdvqV7J4xiG.svg",
  ];

  const partners_w = [
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/turkishairlines_w-3QKQxIf7eDsIaowTl2GJcgH7vyQV8w.svg",
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/turkishcargo_w-WahHQQc5ISKIuzp5DP31ajhHLDQQZR.svg",
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/aircanada_w-q0poinB4IiGpz99mbEykma8c5agM6T.svg",
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/sunexpress_w-G5GEqhjTFmNmfFuyATsw9d2mUQNX1u.svg",
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/eurowings_w-6nnbYf8oJIyoduHRQciJUzpLYa1o0W.svg",
    "https://heeayulnhyor92wd.public.blob.vercel-storage.com/ajet_w-zKQaAWW9Wwv0c8jQjJOPopu8UnizwH.svg",
  ];

  return (
    <>
      <section className="flex items-center py-10 md:py-0 lg:py-10 h-full w-full dark:bg-[--accent-900] transition-all duration-1000 border-t dark:border-t-[--accent-900] gap-[64px] lg:gap-[96px] xl:gap-[196px] px-5 sm:px-20 2xl:pl-44">
        <div className="flex flex-col md:flex-row gap-10 py-10 w-full items-center justify-between ">
          <div className="flex w-full md:w-1/4 ">
            <h1 className="text-[--foreground] text-4xl md:text-2xl lg:text-3xl xl:text-5xl text-start sm:text-center md:text-start transition-all duration-1000">
              More than{" "}
              <span className="text-[--accent] dark:text-[--foreground] transition-all duration-1000">
                50+ Partners & Clients
              </span>{" "}
              work with Us.
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:w-2/3 pointer-events-none">
            {isDarkMode === "light" ? (
              <>
                {partners.map((partner, i) => (
                  <Image
                    key={i}
                    src={partner}
                    alt="partner"
                    width={240}
                    height={240}
                    className="transition-all duration-1000"
                  />
                ))}
              </>
            ) : (
              <>
                {partners_w.map((partner, i) => (
                  <Image
                    key={i}
                    src={partner}
                    alt="partner"
                    width={240}
                    height={240}
                    className="transition-all duration-1000"
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePartners;
