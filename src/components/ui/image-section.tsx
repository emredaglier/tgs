import TextBlock from "./text-block";
import Image from "next/image";

type ImageSectionProps = {
  head: string;
  title: string;
  content: string;
  button: string;
  buttonHref: string;
  numbers: React.ReactNode;
  imageUrl: string;
  bgDark: boolean;
  reverse: boolean;
  imgHide: boolean;
  wFull: boolean;
};

const ImageSection = (params: ImageSectionProps) => {
  return (
    <>
      <section
        className={`flex ${
          params.reverse
            ? ` ${
                params.imgHide
                  ? "flex-row-reverse"
                  : "flex-col-reverse md:flex-row-reverse"
              } sm:px-20 2xl:pr-44`
            : `${
                params.imgHide ? "flex-row" : "flex-col-reverse md:flex-row"
              } sm:px-20 2xl:pl-44`
        } items-center h-full w-full gap-[64px] lg:gap-[96px] xl:gap-[196px] px-5 `}
      >
        <TextBlock
          head={params.head}
          title={params.title}
          content={params.content}
          button={params.button}
          buttonHref={params.buttonHref}
          numbers={params.numbers}
          bgDark={params.bgDark}
          wFull={params.wFull}
        />
        <div
          className={`${
            params.imgHide ? "hidden md:flex" : "md:flex"
          }  md:w-4/5 lg:w-2/3 2xl:w-2/3`}
        >
          <Image
            src={params.imageUrl}
            alt={params.title}
            width={1920}
            height={1080}
            className="rounded-tl-[128px] rounded-br-[128px] object-cover pointer-events-none"
          />
        </div>
      </section>
    </>
  );
};

export default ImageSection;
