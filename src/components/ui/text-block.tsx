import { Button } from "./button";
import Link from "next/link";

type TextBlockProps = {
  head: string;
  title: string;
  content: string;
  button: string;
  buttonHref: string;
  numbers: React.ReactNode;
};

const TextBlockContent = (params: { content: string }) => {
  return (
    <>
      <p className="text-[--foreground] opacity-90 lg:text-lg dark:opacity-100 text-xl font-light">
        {params.content}
      </p>
    </>
  );
};

const TextBlockTitle = (params: { title: string }) => {
  return (
    <>
      <h1 className="text-[--foreground] font-medium lg:text-4xl xl:text-6xl 2xl:text-8xl">
        {params.title}
      </h1>
    </>
  );
};

const TextBlockHead = (params: { head: string }) => {
  return (
    <>
      <h5
        className="text-[--accent] font-medium text-xl xl:text-3xl underline"
        style={{ fontVariant: "small-caps" }}
      >
        <span className="font-normal">{params.head[0]}</span>
        {params.head.substring(1)}
      </h5>
    </>
  );
};

const TextBlock = (params: TextBlockProps) => {
  return (
    <>
      <div className=" flex flex-col gap-9 w-1/2 xl:w-1/3">
        <div className="flex flex-col gap-6">
          <TextBlockHead head={params.head} />
          <TextBlockTitle title={params.title} />
        </div>

        <TextBlockContent content={params.content} />
        {params.numbers && params.numbers}
        {params.button && (
          <Link href={params.buttonHref}>
            <Button className="w-min" size={"lg"} variant={"default"}>
              {params.button}
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default TextBlock;
