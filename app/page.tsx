import { MoveUpRight, Sparkle } from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "mongodb",
  "Express.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <div className="bg-gray-900 flex gap-2">

      <div className="w-[15%] text-7xl uppercase font-extrabold">
        <span>skills</span>
        <div>
          <span className="text-lime-200">i use</span>
        </div>
      </div>

      <div className="w-full px-2 flex gap-4 flex-wrap items-center justify-center uppercase font-bold">
        {skills.map((skill) => (
          <div key={skill} className="text-2xl text-gray-300 border-2 border-lime-400 rounded-lg py-2 px-4 flex gap-2 items-center">
            <div className="bg-lime-400 w-2 h-2 rounded-full"/>
            <span>{skill}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div>
        {/* nav bar */}
        <div className="flex gap-2 items-center">
          <Sparkle className="text-lime-200" />
          <div className="text-2xl">FULL STACK DEVELOPER</div>
        </div>

        <div className="flex items-center w-full justify-between">
          <div className="text-[300px] tracking-tighter w-fit">portfolio</div>
          <div className="text-1xl w-[20%]">Welcome to my portfolio!</div>
          <div />
        </div>

        <div className="bg-blue-500 w-fit h-fit absolute top-2 right-4">
          <MoveUpRight size={120} />
        </div>
      </div>

      <Skills />
    </div>
  );
}
