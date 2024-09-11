"use client";

import Image from "next/image";
import margin from "../margin";
import NextLink from "next/link";
import useDarkMode from "../isDark";

import { Button } from "../ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import NavCard from "./card";
import SideNavbar from "./navbar";

import { ArrowRight, ChevronDown, Sidebar } from "lucide-react";
import NavLanguage from "./language";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, ...props }: LinkProps) => {
  return <NextLink href={href} className="NavigationMenuLink" {...props} />;
};

const Nav = () => {
  const isDarkMode = useDarkMode();

  return (
    <>
      <div
        className={`fixed w-full bg-white/80 dark:bg-[--background] border-b dark:border-b-gray-800 text-[--foreground] ${margin} py-[20px] backdrop-blur-md`}
      >
        <header className="flex flex-row items-center justify-between">
          <div className="flex w-[157px] xl:w-[237px]">
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
          </div>

          <NavigationMenu className="hidden xl:block">
            <NavigationMenuList>
              <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                <Link href="/corporate">Corporate</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="relative bg-transparent w-screen">
                  <section className=" flex flex-row justify-between w-full">
                    <div className="flex">
                      <Link href="/services">
                        <div className="relative bg-[--accent] h-full min-w-[400px]">
                          <div className="absolute w-full h-full bg-[url('/assets/images/nav/phd.png')] bg-cover bg-[center_bottom] bg-no-repeat opacity-50 rounded "></div>
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

                    <div className="w-full">
                      <NavCard
                        title="Passenger Services"
                        content="We offer seamless ground support for skies without limits. We provide excellent service at all served airports."
                        href="/pax"
                      ></NavCard>
                      <NavCard
                        title="Operations Services"
                        content="In order to provide an excellent service, Operation Services it at the heart of all operations."
                        href="/ops"
                      ></NavCard>
                      <NavCard
                        title="Ramp Services"
                        content="Our experienced and skilled employees consistently provide essential maintenance and security for our advanced ground handling equipment."
                        href="/pax-services"
                      ></NavCard>
                    </div>
                    <div className="w-full">
                      <NavCard
                        title="Cargo Services"
                        content="Staff that are experienced, IATA certified, and knowledgeable with customs legislation provide uninterrupted service , in all airports served, with an understanding of high performance."
                        href="/pax"
                      ></NavCard>
                      <NavCard
                        title="Business Jets"
                        content="Aligned with our global vision, we bring TGS quality to Business Jet Handling, offering exceptional comfort."
                        href="/ops"
                      ></NavCard>
                      <NavCard
                        title="Representation, Surveillance, Management"
                        content="We follow all transactions related to the airlines we serve."
                        href="/pax-services"
                      ></NavCard>
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
            <NavLanguage />
            <Button variant="default" size={"lg"} className="md:w-min">
              Contact
            </Button>
          </div>

          <SideNavbar />
        </header>
      </div>
    </>
  );
};

export default Nav;
