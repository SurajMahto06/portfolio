import Link from "next/link";
import { Button } from "./Button";
import { routes } from "@/routes/routes";

interface HeadingProps {
  title?: string;
  link?: string;
  page?: string;
}

const Heading = ({ title, link, page }: HeadingProps) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 items-center mb-16">
        <div className="col-span-8">
          <div className="flex items-center gap-4 flex-1">
            <h2>
              <span>#</span>
              {title}
            </h2>
            <span className="w-[50%] h-0.5 bg-primary"></span>
          </div>
        </div>
        {
          page !== "projects" && 
          <div className="col-span-4 text-end">
          <Button href={ routes.homepage.projects || "/"} variant="link">
            {link}
          </Button>
        </div>
        }
        
      </div>
    </>
  );
};

export default Heading;
