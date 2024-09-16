"use client";

// Components
import margin from "../margin";
import SideNavbar from "./navbar";
import Contact from "./contact";
import NavLogo from "./logo";
import NavMenu from "./menu";

const Nav = () => {
  return (
    <>
      <div
        className={`fixed w-screen z-50 bg-white/90 backdrop-blur-md dark:bg-[--background] border-b dark:border-b-gray-800 text-[--foreground] ${margin} py-[20px] `}
      >
        <header className="flex flex-row items-center justify-between">
          <NavLogo />
          <NavMenu />
          <Contact />
          <SideNavbar />
        </header>
      </div>
    </>
  );
};

export default Nav;
