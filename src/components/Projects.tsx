import Heading from "./ui/Heading";
import Cards from "./ui/Cards";
import Img from "../../public/tatvam-project-1.png";

const projects = [
  {
    id: 1,
    banner: Img,
    techs: "HTML CSS SCSS JQuery Bootstrap Php Wordpress SEO",
    title: "Tatvam",
    description:
      "More modern, target group-oriented, more powerful – a digital relaunch with measurable success through a strategically optimized website.",
  },
];

interface ProjectsProps {
  page?: string;
  view?: string;
}

const Projects = ({ page, view }: ProjectsProps) => {
  return (
    <>
      <section className="py-10 lg:py-15">
        <div className="max-w-7xl mx-auto px-6">
          <Heading title="Projects" page={page} link="View all" />
          <div className="grid grid-cols-12 gap-4 h-full">
            {(view === "all" ? projects : projects?.slice(0, 3))?.map(
              (card) => {
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
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
