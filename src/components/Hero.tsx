import Image from "next/image";
import HeroImage from "../../public/hero-img.png"
import { Button } from "./ui/Button";
import Deco1 from "../../public/deco-1.svg"
import Deco2 from "../../public/deoc-2.svg"

const Hero = () => {
  return (
    <>
      <section className="py-10 lg:py-15">
        <section className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-12 lg:col-span-6">
                <h1 className="">👋 Hi, I’m <span>Suraj Mahto</span> </h1>
                <p>I craft websites that don’t just look good — they work seamlessly across devices. As a frontend developer, I enjoy blending creativity with code to build engaging digital experiences.</p>
                <Button href="/contact" variant="primary">Contact me!!</Button>
              </div>
              <div className="col-span-12 sm:col-span-6 sm:col-start-4 lg:col-span-5 lg:col-start-8 text-center relative">
              <div className="absolute -z-10 left-0 top-[50%] translate-y-[-50%]"><Image className="w-[100] h-[100]  sm:w-[180] sm:h-[180]" src={Deco1} alt=""/></div>
              <div className="absolute  right-0 bottom-[20%]"><Image src={Deco2} className="w-[60] h-[60] sm:w-[80] sm:h-[80]" alt=""/></div>
                 <Image src={HeroImage} style={{width:'100%', height:'100%', margin:'0 auto'}} alt="Hero-img" />
               <div className="border border-grey px-6 flex items-center gap-4 py-2 m-auto">
                <span className="block w-4 h-4 bg-primary"></span>
                 <p className="mb-0 text-xs xs:text-lg ">🌍 Focused on user-friendly design and smooth interactions — <strong className="text-white font-normal">one line of code at a time.</strong> </p>
              </div>
              </div>
            </div>
        </section>
      </section>
    </>
  )
};

export default Hero;
