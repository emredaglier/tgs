import margin from "./margin";
import Image from "next/image";
import useDarkMode from "./isDark";
import Link from "next/link";

const SocialMedia = {
  instagram: "https://www.instagram.com/tgsaero/",
  x: "#",
  youtube: "#",
};

type FooterNavProps = {
  head: string;
  nav: Array<string>;
  link: Array<string>;
};

const FooterNav = ({ head, nav, link }: FooterNavProps) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-xl underline font-medium text-[--accent] dark:text-[--foreground] transition-colors duration-1000">
          {head}
        </span>
        <ul className="flex flex-col gap-2">
          {nav.map((item, index) => (
            <li key={index}>
              <Link
                href={`${link[index]}`}
                className="flex flex-row items-center text-lg font-light gap-3 hover:underline opacity-75 dark:opacity-50"
              >
                {item.replace(">", "")}
                {item.slice(0, 1) === ">" && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666626 9L8.66663 1M8.66663 1H0.666626M8.66663 1V9"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Youtube = () => {
  return (
    <Link href={SocialMedia.youtube}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>YouTube</title>
        <path
          fill="var(--foreground)"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        />
      </svg>
    </Link>
  );
};
const Twitter = () => {
  return (
    <Link href={SocialMedia.x}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>X</title>
        <path
          fill="var(--foreground)"
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        />
      </svg>
    </Link>
  );
};
const Instagram = () => {
  return (
    <Link href={SocialMedia.instagram}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Instagram</title>
        <path
          fill="var(--foreground)"
          d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
        />
      </svg>
    </Link>
  );
};

const Footer = () => {
  const isDarkMode = useDarkMode();
  return (
    <>
      <footer
        className={`flex flex-col bg-[--background] py-[90px] gap-16 ${margin} transition-colors duration-1000 border-t dark:border-t-white/10`}
      >
        <div className="flex lg:flex-row flex-col w-full gap-28">
          <div className="flex flex-col lg:min-h-[384px] lg:min-w-[384px] w-full lg:w-min lg:h-min gap-8">
            <Image
              src={
                isDarkMode === "dark"
                  ? "https://heeayulnhyor92wd.public.blob.vercel-storage.com/logo_white-FLtnw2hOw0cBLnUtcqODcqa9lat66x.svg"
                  : "https://heeayulnhyor92wd.public.blob.vercel-storage.com/logo_red-Bhejkt9GEdoychqdXmBaWLt3vYG9de.svg"
              }
              alt="logo"
              width={384}
              height={0}
              priority
              className="pointer-events-none object-fill"
            />
            <p className="text-[--foreground] opacity-75 font-light">
              The success story of TGS began on January 1, 2010, with the joint
              venture of Turkish Airlines Inc. and Airport Ground Services Inc.
              Always operating with a commitment to high-quality service, TGS
              works with the pride of being one of the leading ground handling
              companies in Turkey and the world, enhancing the strength of the
              world&apos;s largest airlines.
            </p>
            <div className="flex flex-row gap-6">
              <Instagram />
              <Twitter />
              <Youtube />
            </div>
          </div>
          <div className="grid grid-flow-row xl:grid-cols-4 min-[450px]:grid-cols-2 grid-cols-1 gap-10 place-items-stretch justify-between w-full">
            <FooterNav
              head="Corporate"
              nav={["Our Story", "Mission & Vision", "Certifications"]}
              link={["/about", "/mission", "/certifications"]}
            />
            <FooterNav
              head="Services"
              nav={[
                "Passenger Services",
                "Operation Services",
                "Ramp Services",
                "Business Jet Services",
                "Cargo Services",
              ]}
              link={["/pax", "/ops", "/ramp", "/business", "/cargo"]}
            />
            <FooterNav
              head="Human Resource"
              nav={["TGS Academy", ">Careers"]}
              link={["/academy", "/careers"]}
            />
            <FooterNav
              head="Contact"
              nav={["Contact", "Service Demand Form"]}
              link={["/contact", "/demand"]}
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-4 justify-between border-t border-t-slate-800 dark:border-t-slate-500 opacity-75 dark:opacity-50 pt-2 sm:text-sm text-[12px] font-light">
          <p>TGS Ground Services Inc. All rights reserved. © 2024</p>
          <div className="flex flex-row gap-8">
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="hover:underline">
              Sitemap
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
