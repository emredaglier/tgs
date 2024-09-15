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
};

const ImageSection = (params: ImageSectionProps) => {
  return (
    <>
      <section className="flex items-center h-full w-full gap-[64px] lg:gap-[96px] xl:gap-[196px] pl-5 sm:pl-20 2xl:pl-44">
        <TextBlock
          head={params.head}
          title={params.title}
          content={params.content}
          button={params.button}
          buttonHref={params.buttonHref}
          numbers={params.numbers}
        />
        <div className="flex h-full md:w-4/5 lg:w-2/3 2xl:w-2/3">
          <Image
            src={params.imageUrl}
            alt={params.title}
            width={1920}
            height={1080}
            className="rounded-tl-[128px] rounded-br-[128px] pointer-events-none"
          />
        </div>
      </section>
    </>
  );
};

export default ImageSection;
