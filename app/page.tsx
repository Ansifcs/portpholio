import { Sparkle } from "lucide-react";
import Image from "next/image";

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
        <div/>
      </div>

    </div>
    </div>

    
  );
}
