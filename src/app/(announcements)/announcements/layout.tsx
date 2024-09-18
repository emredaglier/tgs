export default function AnnouncementsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="font-geist">{children}</main>;
}
