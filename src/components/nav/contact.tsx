import NavLanguage from "./language";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <>
      <div className="hidden xl:flex gap-2">
        <NavLanguage />
        <Button variant="default" size={"lg"} className="md:w-min">
          Contact
        </Button>
      </div>
    </>
  );
};

export default Contact;
