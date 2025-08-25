import Heading from "./ui/Heading";
import Img from "../../public/img-2.png";
import Image from "next/image";

interface SkillsProps {
  page?: string;
}

const Skills = ({ page }: SkillsProps) => {
  const skills = [
    {
      id: 1,
      title: "Languages",
      techs: "JavaScript TypeScript",
    },
    {
      id: 2,
      title: "Frontend",
      techs: "HTML CSS SASS/SCSS Bootstrap Tailwind MUI Redux Toolkit JQuery Gulp GSAP Animation",
    },
    {
      id: 3,
      title: "Frameworks",
      techs: "React NextJs",
    },
    {
      id: 4,
      title: "Tools",
      techs: "VS Code Git Figma Adobe XD Postman",
    },
    {
      id: 6,
      title: "Other Skills",
      techs: "Accessibility(WCAG 2.2) Cross-Browser Compatibility",
    },
  ];

  return (
    <>
      <section className="py-10 lg:py-15">
        <div className="max-w-7xl mx-auto px-6">
          <Heading title="Skills" />
          {page === "about" ? (
            <div className="col-span-12 sm:col-span-8 md:col-span-7 lg:col-span-6 md:col-start-6 lg:col-start-7">
                <div>
                  <div className="columns-1 sm:columns-3 lg:columns-4 gap-4">
                    {skills?.map((skill) => {
                      const { id, title, techs } = skill;
                      return (
                        <div
                          key={id}
                          className="mb-4 break-inside-avoid border border-grey"
                        >
                          <div className="p-2">
                            <h6>{title}</h6>
                          </div>
                          <div className="border-t border-grey p-2">
                            <p className="mb-0">{techs}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
          ) : (
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8 sm:col-span-4">
                <Image
                  src={Img}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
              <div className="col-span-12 sm:col-span-8 md:col-span-7 lg:col-span-6 md:col-start-6 lg:col-start-7">
                <div>
                  <div className="columns-1 sm:columns-3 gap-4">
                    {skills?.map((skill) => {
                      const { id, title, techs } = skill;
                      return (
                        <div
                          key={id}
                          className="mb-4 break-inside-avoid border border-grey"
                        >
                          <div className="p-2">
                            <h6>{title}</h6>
                          </div>
                          <div className="border-t border-grey p-2">
                            <p className="mb-0">{techs}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Skills;
