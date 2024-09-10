"use client";

import Image from "next/image";
import margin from "./margin";
import NextLink from "next/link";
import { useState } from "react";
import useDarkMode from "./isDark";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ArrowRight, ChevronDown } from "lucide-react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, ...props }: LinkProps) => {
  return <NextLink href={href} className="NavigationMenuLink" {...props} />;
};

const Nav = () => {
  const [language, setLanguage] = useState("english");
  const isDarkMode = useDarkMode();

  return (
    <>
      <div
        className={`w-full  h-[96px] bg-[--background] border-b text-[--foreground] ${margin} py-[20px]`}
      >
        <header className="flex flex-row items-center justify-between">
          <Image
            src={
              isDarkMode
                ? "/assets/images/logo_white.svg"
                : "/assets/images/logo_red.svg"
            }
            alt="logo"
            width={237}
            height={56}
            priority
          />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                <Link href="/corporate">Corporate</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <section className="flex flex-row p-4 w-screen">
                    <div className="flex w-full h-min">
                      <Link href="/services">
                        <div className="relative rounded bg-[--accent] h-[400px] w-[400px]">
                          <div className="absolute w-full h-full bg-[url('/assets/images/nav/phd.png')] bg-cover opacity-50 rounded "></div>
                          <div className="absolute flex flex-col justify-between w-full h-full p-4 text-white">
                            <div className="flex ">
                              <h1 className="text-4xl font-light ">
                                We Offer Seamless Ground Support for Skies
                                Without Limits.
                              </h1>
                            </div>
                            <div className="flex flex-row w-full justify-between items-center">
                              <h1 className="text-4xl font-bold">Services</h1>
                              <ArrowRight size={48} strokeWidth={1.5} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </section>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                <Link href="/hr">Human Resources</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                <Link href="/announcements">Announcements</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden xl:flex gap-10 ">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="language">
                    Language
                    <ChevronDown strokeWidth={1.5} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Language</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={language}
                    onValueChange={setLanguage}
                  >
                    <DropdownMenuRadioItem value="english">
                      English
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="turkish">
                      Turkish
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Button variant="default" size={"lg"}>
              Contact
            </Button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Nav;
