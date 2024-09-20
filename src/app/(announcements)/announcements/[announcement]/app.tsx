"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Loading from "@/components/loading";

const Nav = dynamic(() => import("@/components/nav/nav"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"));

const Content = dynamic(
  () => import("@/app/(announcements)/announcements/[announcement]/content")
);

const AnnouncementApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadComponents = async () => {
      await Promise.all([
        import("@/components/nav/nav"),
        import("@/components/footer"),
        import("@/app/(announcements)/announcements/content"),
      ]);

      setIsLoading(false);
    };
    loadComponents();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <Content />
          <Footer />
        </>
      )}
    </>
  );
};

export default AnnouncementApp;
