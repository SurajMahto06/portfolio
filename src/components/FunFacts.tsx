import Heading from "./ui/Heading";
import funFactDeco from "../../public/fun-fact-deco.png"
import Image from "next/image";

const FunFacts = () => {
const funFacts = [
  {
    id: 1,
    content: "Winter > Summer ❄️🔥",
  },
  {
    id: 2,
    content: "My favorite movie is Lost In Space 🚀",
  },
  {
    id: 3,
    content: "I enjoy experimenting with new recipes — cooking feels like coding in the kitchen 👨‍🍳",
  },
  {
    id: 4,
    content: "Hidden spots & offbeat trails? I can spend hours exploring them 🌍",
  },
  {
    id: 5,
    content: "Solving tricky frontend bugs is like solving a detective puzzle 🕵️‍♂️",
  },
  {
    id: 6,
    content: "Coffee before code, always. ☕💻",
  },
  {
    id: 7,
    content: "Sometimes, I sketch UI ideas on paper before writing a single line of code ✏️",
  },
  {
    id: 8,
    content: "Currently on a fitness journey — lifting weights, eating clean, and chasing strength 💪",
  },
];



  return (
    <>
      <section className="py-10 lg:py-15">
        <div className="max-w-7xl mx-auto px-6">
          <Heading title="My-fun-facts" />
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex flex-wrap gap-4">
                {funFacts?.map((funFact) => {
                  const { id, content } = funFact;
                  return (
                    <div key={id} className="w-fit">
                      <div key={id} className="border border-grey p-3">
                        <p className="mb-0">{content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
                <Image src={funFactDeco} className="w-[200px] h-[200px] m-auto" alt=""/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FunFacts;
