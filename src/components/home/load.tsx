"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Loading from "../loading";

const Nav = dynamic(() => import("../nav/nav"), { ssr: false });
const HomeIntroduction = dynamic(() => import("./introduction"));
const Video = dynamic(() => import("./video"));
const HomeAbout = dynamic(() => import("./about"));

const HomeEntry = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadComponents = async () => {
      await Promise.all([
        import("../nav/nav"),
        import("./introduction"),
        import("./video"),
        import("./about"),
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
          <Video />
          <Nav />
          <HomeIntroduction />
          <HomeAbout />
        </>
      )}
    </>
  );
};
export default HomeEntry;
