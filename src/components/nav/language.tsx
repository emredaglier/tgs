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

const NavLanguage = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="language" size={"lg"}>
            Language {}
            <ChevronDown strokeWidth={1.5} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full max-h md:w-56">
          <DropdownMenuLabel>Language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={""} className="flex flex-col ">
            <DropdownMenuRadioItem
              value="en"
              className="text-xl xl:text-sm py-5 xl:py-3"
              onClick={() => {}}
            >
              English
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="tr"
              className="text-xl xl:text-sm py-5 xl:py-3"
              onClick={() => {}}
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
