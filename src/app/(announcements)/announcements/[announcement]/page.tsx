import type { Metadata } from "next";
import AnnouncementApp from "./app";

import { headers } from "next/headers";

type Props = {
  params: { announcement: string };
};
const fetchData = async (
  { params }: { params: { announcement: string } },
  url: string
) => {
  const response = await fetch(
    `${url}api/data/select?link=${params.announcement}`
  );
  const jsonData = await response.json();
  return jsonData;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const headersList = headers();
  const referer = headersList.get("referer");

  if (referer) {
    const url = new URL(referer);
    const baseUrl = `${url.protocol}//${url.host}/`;
    const data = await fetchData({ params }, baseUrl);
    return {
      title: `${data[0].title} | TGS`,
    };
  }

  return {
    title: "TGS | Turkish Ground Services",
  };
};

const Announcement = ({ params }: { params: { announcement: string } }) => {
  const link = params.announcement;
  console.log(link);
  return (
    <>
      <main>
        <AnnouncementApp />
      </main>
    </>
  );
};

export default Announcement;
