import MainApp from "../components/app";
import type { Metadata } from "next";

export const metadata = {
  title: "TGS | Turkish Ground Services",
  description:
    "Handling Services. Profesyonel ekip gerektiren ve bir uzmanlık alanı olan Business Jet Hizmeti kapsamında TGS, yeni ekipman ve iş gücü avantajlarına da sahip...",
};

export default function Home() {
  return (
    <>
      <MainApp />
    </>
  );
}
