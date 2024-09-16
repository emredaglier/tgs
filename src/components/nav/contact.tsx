import NavLanguage from "./language";
import { Button } from "../ui/button";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="hidden xl:flex gap-10">
        <NavLanguage />
        <Link href="/contact">
          <Button variant="default" size={"lg"} className="md:w-min">
            Contact
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Contact;
