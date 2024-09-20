import margin from "@/components/margin";
import AnnouncementsBlock from "./block";
import { useEffect, useState } from "react";

type AnnouncementsProps = {
  id: number;
  link: string;
  title: string;
  shortContent: string;
  image: string;
};

const AnnouncementsContent = async () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/data");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className={`flex pt-32 sm:pt-48 pb-16 ${margin}`}>
        <h1 className="text-3xl dark:text-[--accent-600] text-[--accent] underline">
          Announcements
        </h1>
      </div>
      <section
        className={`grid min-[2000px]:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2
          overflow-hidden gap-24 lg:gap-16 min-h-screen pb-32 ${margin}`}
      >
        {data.map((item: AnnouncementsProps) => (
          <AnnouncementsBlock
            key={item.id}
            link={item.link}
            title={item.title}
            shortContent={item.shortContent}
            imageURL={item.image}
          />
        ))}
      </section>
    </>
  );
};

export default AnnouncementsContent;
