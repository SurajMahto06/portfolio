import Heading from "./ui/Heading";
import AboutImg from "../../public/about-img.png";
import Image from "next/image";
import { Button } from "./ui/Button";
import Deco1 from "../../public/deoc-2.svg";

interface AboutProps {
  page?: string;
}

const About = ({ page }: AboutProps) => {
  return (
    <>
      <section className="py-10 lg:py-15">
        <div className="max-w-7xl mx-auto px-6">
          <Heading title="About-me" />
          <div className="grid grid-cols-12 items-center gap-4">
            {page === "about" ? (
              <div className="col-span-12 md:col-span-6">
                <p>Hello, i’m Suraj!</p>
                <p>
                  I’m a self-taught front-end developer based in Jamshedpur,
                  India. I can develop responsive websites from scratch and
                  raise them into modern user-friendly web experiences.I
                  specialize in turning design concepts into seamless digital
                  experiences using technologies like{" "}
                  <span className="text-white">
                    {" "}
                    HTML, CSS, SASS/SCSS, JavaScript, TypeScript, React,
                    Next.js, Redux, MUI, Tailwind CSS{" "}
                  </span>
                  .
                </p>
                <p>
                  Over the past <span className="text-white">3+ years</span> ,
                  I’ve worked on a variety of projects that helped businesses
                  and individuals establish their online presence. My goal is to
                  combine clean code with creative design to deliver websites
                  that are both visually appealing and highly functional.
                </p>
                <p>
                  I’m passionate about continuous learning and always exploring
                  new frameworks, tools, and best practices to stay ahead in the
                  ever-evolving world of web development.
                </p>
                {page !== "about" && (
                  <Button variant="primary" href="/about">
                    About
                  </Button>
                )}
              </div>
            ) : (
              <div className="col-span-12 md:col-span-6">
                <p>Hello, I’m Suraj!</p>
                <p>
                  I’m a self-taught frontend developer from Jamshedpur, India,
                  specializing in building responsive and modern web
                  applications. I work with <span className="text-white"> HTML, CSS, SASS/SCSS, JavaScript, TypeScript,
                  React, Next.js, Redux, MUI, and Tailwind CSS </span>to create
                  seamless digital experiences. .
                </p>
                <p>
                  Over the past <span className="text-white">3+ years</span> ,
                  I’ve worked on a variety of projects that helped businesses
                  and individuals establish their online presence. My goal is to
                  combine clean code with creative design to deliver websites
                  that are both visually appealing and highly functional.
                </p>

                {page !== "about" && (
                  <Button variant="primary" href="/about">
                    About
                  </Button>
                )}
              </div>
            )}

            <div className="col-span-12 sm:col-span-6 md:col-span-4 sm:col-start-4 md:col-start-9 relative">
              <div className="absolute -z-10 left-0 top-[20%]">
                <Image
                  className="w-[50] h-[50]  sm:w-[100] sm:h-[100]"
                  src={Deco1}
                  alt=""
                />
              </div>
              <div className="absolute -z-10 right-0 bottom-[10%]">
                <Image
                  className="w-[50] h-[50]  sm:w-[100] sm:h-[100]"
                  src={Deco1}
                  alt=""
                />
              </div>
              <Image src={AboutImg} className="w-full h-full" alt="" />
              <div className="border border-grey px-6 flex items-center gap-4 py-2 m-auto">
                <span className="block w-4 h-4 bg-primary"></span>
                <p className="mb-0 text-xs xs:text-lg ">
                 Passionate frontend developer with 
                  <strong className="text-white font-normal"> 3+ years of experience in web development.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
