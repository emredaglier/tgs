"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useState } from "react";
import AnimatedHamburger from "./hamburger";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavLanguage from "./language";
import NextLink from "next/link";
import margin from "../margin";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, ...props }: LinkProps) => {
  return <NextLink href={href} className="NavigationMenuLink" {...props} />;
};

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="block xl:hidden" onClick={toggleMenu}>
        <AnimatedHamburger isOpen={isOpen} />
      </SheetTrigger>
      <SheetContent side={"top"} className="bg-white/80 backdrop-blur-md">
        <SheetTitle>
          <SheetHeader>
            <SheetDescription></SheetDescription>
            <NavigationMenu className="pb-10 border-b border-b-gray-800">
              <NavigationMenuList className="flex flex-col  items-start gap-7 md:gap-5 text-3xl md:text-xl">
                <NavigationMenuItem className="hover:text-[--accent-500] transition-all">
                  <Link href="/corporate">Corporate</Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:text-[--accent-500] transition-all">
                  <Link href="/services">Services</Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:text-[--accent-500] transition-all">
                  <Link href="/hr">Human Resources</Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:text-[--accent-500] transition-all">
                  <Link href="/announcements"> Announcements</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <section className="flex flex-col pt-7 gap-10">
              <div className="w-min">
                <NavLanguage />
              </div>

              <Button variant="default" size={"lg"} className="md:w-min">
                Contact
              </Button>
            </section>
          </SheetHeader>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  );
};

export default SideNavbar;
