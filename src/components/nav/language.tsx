import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { ComponentProps, useState } from "react";

const NavLanguage = () => {
  const [language, setLanguage] = useState("en");

  const setLanguageHandler = () => {
    if (language === "en") {
      setLanguage("tr");
    } else {
      setLanguage("en");
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="language">
            Language {language === "en" ? "🇬🇧" : "🇹🇷"}
            <ChevronDown strokeWidth={1.5} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen max-h md:w-56">
          <DropdownMenuLabel>Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={language} className="flex flex-col ">
            <DropdownMenuRadioItem
              value="en"
              className="text-xl xl:text-sm py-5 xl:py-3"
              onClick={() => {
                setLanguage("en");
              }}
            >
              English
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="tr"
              className="text-xl xl:text-sm py-5 xl:py-3"
              onClick={() => {
                setLanguage("tr");
              }}
            >
              Turkish
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavLanguage;
