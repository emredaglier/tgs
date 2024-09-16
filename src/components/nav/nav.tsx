"use client";

// Components
import margin from "../margin";
import SideNavbar from "./navbar";
import Contact from "./contact";
import NavLogo from "./logo";
import NavMenu from "./menu";

import { useEffect, useState } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed w-screen z-50 transition-all duration-1000 bg-white/90 backdrop-blur-md dark:bg-[--background] border-b dark:border-b-gray-800 text-[--foreground] ${margin} ${
          isScrolled ? "py-[20px] xl:py-[10px] hover:py-[20px]" : "py-[20px]"
        } `}
      >
        <header className="flex flex-row items-center justify-between">
          <NavLogo isScrolled={isScrolled} isHover={isHovered} />
          <NavMenu />
          <Contact />
          <SideNavbar />
        </header>
      </div>
    </>
  );
};

export default Nav;
