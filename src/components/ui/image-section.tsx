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
        <div className="flex w-1/3 lg:w-2/3 h-full ">
          <Image
            src={params.imageUrl}
            alt={params.title}
            width={1920}
            height={1080}
            layout="responsive"
            className="rounded-tl-[128px] rounded-br-[128px]"
          />
        </div>
      </section>
    </>
  );
};

export default ImageSection;
