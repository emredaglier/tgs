import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type AnnouncementsBlockProps = {
  link: string;
  title: string;
  shortContent: string;
  imageURL: string;
};

const AnnouncementsBlock = ({
  link,
  title,
  shortContent,
  imageURL,
}: AnnouncementsBlockProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full lg:w-[384px]">
        <Link
          href={`/announcements/${link}`}
          className="flex flex-col gap-2 w-full"
        >
          <Image src={imageURL} alt={title} width={1280} height={0} />
          <span className="font-medium text-2xl sm:text-5xl lg:text-2xl text-[--foreground] transition-colors duration-1000">
            {title}
          </span>
        </Link>

        <p className="opacity-75 text-[--foreground] font-light text-xl sm:text-2xl lg:text-base transition-colors duration-1000">
          {shortContent.substring(0, 200) + "..."}
        </p>
        <Link href={`/announcements/${link}`} className="w-min">
          <Button className="w-min gap-3" variant={"default"}>
            Read More
            <ArrowUpRight />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default AnnouncementsBlock;
