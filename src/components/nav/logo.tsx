import NextLink from "next/link";
import Image from "next/image";
import useDarkMode from "../isDark";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

type isScrolledProps = {
  isScrolled: boolean;
};

const Link = ({ href, ...props }: LinkProps) => {
  return <NextLink href={href} className="NavigationMenuLink" {...props} />;
};

const NavLogo: React.FC<isScrolledProps> = ({ isScrolled }) => {
  const isDarkMode = useDarkMode();
  return (
    <>
      <div
        className={`flex transition-all duration-1000 ${
          isScrolled ? "w-[157px]" : "w-[157px] xl:w-[237px]"
        }`}
      >
        <Link href="/">
          <Image
            src={
              isDarkMode === "dark"
                ? "https://heeayulnhyor92wd.public.blob.vercel-storage.com/logo_white-FLtnw2hOw0cBLnUtcqODcqa9lat66x.svg"
                : "https://heeayulnhyor92wd.public.blob.vercel-storage.com/logo_red-Bhejkt9GEdoychqdXmBaWLt3vYG9de.svg"
            }
            alt="logo"
            width={237}
            height={56}
            priority
            className="pointer-events-none"
          />
        </Link>
      </div>
    </>
  );
};

export default NavLogo;
