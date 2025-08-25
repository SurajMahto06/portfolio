import Heading from "./ui/Heading";
import Cards from "./ui/Cards";
import Img from "../../public/img-1.jpg";

const projects = [
  {
    id: 1,
    banner: Img,
    techs: "HTML SCSS Python Flask",
    title: "ChertNodes",
    description: "Minecraft servers hosting",
  },
  {
    id: 2,
    banner: Img,
    techs: "HTML SCSS Python Flask",
    title: "ChertNodes",
    description: "Minecraft servers hosting",
  },
  {
    id: 3,
    banner: Img,
    techs: "HTML SCSS Python Flask",
    title: "ChertNodes",
    description: "Minecraft servers hosting",
  },
];

interface SmallProjectsProps {
  page?: string
}

const SmallProjects = ({page}:SmallProjectsProps) => {
  return (
    <>
      <section className="py-10 lg:py-15">
        <div className="max-w-7xl mx-auto px-6">
          <Heading title="Small Projects" />
          <div className="grid grid-cols-12 gap-4 h-full">
            {projects?.map((card) => {
              const { id, banner, techs, title, description } = card;
              return (
                  <Cards
                    key={id}
                    title={title}
                    banner={banner}
                    techs={techs}
                    description={description}
                  />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SmallProjects;
