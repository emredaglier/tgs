"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Loading from "../loading";

const Nav = dynamic(() => import("../nav/nav"), { ssr: false });
const HomeIntroduction = dynamic(() => import("./introduction"), {
  ssr: false,
});

const Video = dynamic(() => import("./video"), { ssr: false });
const HomeAbout = dynamic(() => import("./about"), { ssr: false });

const HomeEntry = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <>
          <Video />
          <Nav />
          <HomeIntroduction />
          <HomeAbout />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default HomeEntry;
