import { ArrowUpRight } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

type TextBlockProps = {
  head: string;
  title: string;
  content: string;
  button: string;
  buttonHref: string;
  numbers: React.ReactNode;
  bgDark: boolean;
};

const TextBlockContent = (params: { content: string; bgDark: boolean }) => {
  return (
    <>
      <p
        className={`text-[--foreground] ${
          !params.bgDark ? "text-[--foreground]" : "text-white"
        } transition-all duration-1000 opacity-90 md:text-sm lg:text-lg dark:opacity-100 text-xl min-[2000px]:text-3xl font-light`}
      >
        {params.content}
      </p>
    </>
  );
};

const TextBlockTitle = (params: { title: string; bgDark: boolean }) => {
  return (
    <>
      <h1
        className={` ${
          !params.bgDark ? "text-[--foreground]" : "text-white"
        } transition-all duration-1000 font-medium text-4xl md:text-2xl lg:text-4xl xl:text-5xl  2xl:text-7xl min-[2000px]:text-8xl`}
      >
        {params.title}
      </h1>
    </>
  );
};

const TextBlockHead = (params: { head: string; bgDark: boolean }) => {
  return (
    <>
      <Link href={params.head.toLowerCase()} className="w-min">
        <h5
          className={`${
            !params.bgDark
              ? "text-[--accent] dark:text-[--accent-600]"
              : "text-white"
          } text- font-normal text-3xl md:text-xl xl:text-3xl underline transition-all duration-1000`}
          style={{ fontVariant: "small-caps" }}
        >
          <span className="font-light">{params.head[0]}</span>
          {params.head.substring(1)}
        </h5>
      </Link>
    </>
  );
};

const TextBlock = (params: TextBlockProps) => {
  return (
    <>
      <div className=" flex flex-col gap-4 xl:gap-7 md:w-3/4 lg:w-2/3 2xl:w-1/3">
        <div className="flex flex-col gap-6">
          <TextBlockHead head={params.head} bgDark={params.bgDark} />
          <TextBlockTitle title={params.title} bgDark={params.bgDark} />
        </div>

        <TextBlockContent content={params.content} bgDark={params.bgDark} />
        {params.numbers && params.numbers}
        {params.button && (
          <Link href={params.buttonHref}>
            <Button className="w-min" variant={"default"}>
              {params.button}
              <ArrowUpRight size={28} strokeWidth={1.5} />
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default TextBlock;
