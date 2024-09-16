import ImageSection from "@/components/ui/image-section";
import Link from "next/link";

const HomeServices = () => {
  const Services = [
    {
      id: 1,
      title: "Passenger Services",
      content:
        "TGS, with an innovative and quality-driven service approach, proudly strengthens airline companies as one of the world's top ground handling firms.",
      button: "Passenger Services",
      buttonHref: "#",
      image:
        "https://heeayulnhyor92wd.public.blob.vercel-storage.com/pax-KzVpdw4NFfSwNk0cVXBQIg28H2Wj6P.png",
      bgDark: false,
      reverse: true,
    },
    {
      id: 2,
      title: "Operation Services",
      content:
        "TGS, with an innovative and quality-driven service approach, proudly strengthens airline companies as one of the world's top ground handling firms.",
      button: "Operation Services",
      buttonHref: "#",
      image:
        "https://heeayulnhyor92wd.public.blob.vercel-storage.com/ops-XfhJaHyG4D1V0rGOUXhYeYg0AMxxyL.png",
      bgDark: false,
      reverse: false,
    },
    {
      id: 3,
      title: "Ramp Services",
      content:
        "TGS, with an innovative and quality-driven service approach, proudly strengthens airline companies as one of the world's top ground handling firms.",
      button: "Ramp Services",
      buttonHref: "#",
      image:
        "https://heeayulnhyor92wd.public.blob.vercel-storage.com/ramp-QI37WwNisg1hL2txCHRA18H4dRmzTP.png",
      bgDark: false,
      reverse: true,
    },
    {
      id: 4,
      title: "Business Jet Services",
      content:
        "TGS, with an innovative and quality-driven service approach, proudly strengthens airline companies as one of the world's top ground handling firms.",
      button: "Business Jet Services",
      buttonHref: "#",
      image:
        "https://heeayulnhyor92wd.public.blob.vercel-storage.com/bj-aZFKknLQVzJBFmp30dEHRd2YtoV4Fp.png",
      bgDark: false,
      reverse: false,
    },
    {
      id: 5,
      title: "Cargo Services",
      content:
        "TGS, with an innovative and quality-driven service approach, proudly strengthens airline companies as one of the world's top ground handling firms.",
      button: "Cargo Services",
      buttonHref: "#",
      image:
        "https://heeayulnhyor92wd.public.blob.vercel-storage.com/cargo-EEyzz9zkoc791mcnZndzxERIkcIVIx.png",
      bgDark: false,
      reverse: true,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-40 sm:gap-40 xl:gap-60 min-[2000px]:gap-56 pb-[96px] xl:pb-[128px] 2xl:pb-[256px] z-[1]">
        {Services.map((service) => (
          <ImageSection
            key={service.id}
            head="Services"
            title={service.title}
            content={service.content}
            button={service.button}
            buttonHref={service.buttonHref}
            numbers=""
            imageUrl={service.image}
            bgDark={service.bgDark}
            reverse={service.reverse}
            imgHide={false}
          />
        ))}
      </div>
    </>
  );
};

export default HomeServices;
