/**
 * TGS | Turkish Ground Services unofficial next.js version
 *
 * author => @emredaglier <daglier.com>
 *
 */

import MainApp from "../components/app";
//import { getData } from "@/drizzle/db";

export const metadata = {
  title: "TGS | Turkish Ground Services",
  description:
    "Handling Services. Profesyonel ekip gerektiren ve bir uzmanlık alanı olan Business Jet Hizmeti kapsamında TGS, yeni ekipman ve iş gücü avantajlarına da sahip...",
};

export default async function Home() {
  return (
    <>
      <MainApp />
    </>
  );
}
