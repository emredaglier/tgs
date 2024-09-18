import margin from "@/components/margin";
import AnnouncementsBlock from "./block";

const AnnouncementsContent = () => {
  return (
    <>
      <section
        className={`flex flex-col min-h-screen items-center justify-center ${margin}`}
      >
        <AnnouncementsBlock />
      </section>
    </>
  );
};

export default AnnouncementsContent;
