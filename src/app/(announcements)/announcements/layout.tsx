export const metadata = {
  title: "Announcements | TGS",
  description: "TGS | Turkish Ground Services",
};

export default function AnnouncementsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="font-geist">{children}</main>;
}
