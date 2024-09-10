"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useState } from "react";

import AnimatedHamburger from "./hamburger";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import NextLink from "next/link";

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
      <SheetContent side={"top"}>
        <SheetHeader>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-start gap-5 text-xl">
              <NavigationMenuItem>
                <Link href="/corporate">Corporate</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/services">Services</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/hr">Human Resources</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/announcements"> Announcements</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideNavbar;
