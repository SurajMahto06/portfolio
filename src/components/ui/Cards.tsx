import Image, { StaticImageData } from "next/image";
import { Button } from "./Button";

interface CardsProps {
  banner: string | StaticImageData;
  techs: string;
  title: string;
  description: string;
  live?: string
}

const Cards = ({ banner, techs, title, description,live }: CardsProps) => {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
      <div className="border border-grey flex flex-col h-full">
        <Image
          src={banner}
          className="w-full max-h-[300px] object-cover"
          alt={title}
        />
        <div className="p-3 border border-l-0 border-r-0 border-grey">
          <p className="mb-0">{techs}</p>
        </div>

        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button href={live} variant="primary" target="_blank">
              Live
            </Button>
            <Button href="/" variant="secondary" target="_blank">
              Cached
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
