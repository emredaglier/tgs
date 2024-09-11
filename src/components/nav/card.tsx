import NextLink from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

type CardProps = {
  title: string;
  content: string;
  href: string;
};

const Link = ({ href, ...props }: LinkProps) => {
  return <NextLink href={href} className="NavigationMenuLink" {...props} />;
};

const NavCard = (params: CardProps) => {
  return (
    <Link href={params.href}>
      <Card className="flex flex-col bg-white/70 backdrop-blur-md dark:bg-black/90 min-h-[200px]">
        <CardHeader>
          <CardTitle className="text-[--foreground]">
            <div className="flex items-center justify-between flex-row">
              <h1>{params.title}</h1>
              <ArrowRight size={48} strokeWidth={1.5} />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[--foreground] opacity-75 dark:opacity-100  font-light">
            {params.content}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NavCard;
