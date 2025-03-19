import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";


export default function Designs() {
  return (
    <section className="px-10 relative bg-background w-full sm:w-11/12 md:w-9/12 xl:w-12/1 xl:max-w-6xl mx-auto z-1000 py-2">
      <section className="sm:px-12">
        <h2 className="text-4xl font-semibold self-start mb-6">
          Some of my designs
        </h2>

        <p className="text-gray-400 w-8/12">I specialize in creating clean, user-friendly designs for mobile apps and web platforms. From simple interfaces to complex systems, I focus on delivering solutions that are both functional and visually engaging. Let’s collaborate and bring your ideas to life!</p>

        <section className="grid grid-cols-3 gap-6 mt-10">
          <section className="w-full flex flex-col items-start border-2 p-4 rounded-lg">
            <Avatar className="w-full h-40 rounded-lg">
              <AvatarImage src={"/desgin_LoveCar.png"} alt="Portfolio Personal Image" />
              <AvatarFallback>Ah</AvatarFallback>
            </Avatar>
            
            <h3 className="mt-4">My Love Car</h3>
            <p className="text-gray-400 mt-4">Developed and maintained front end user interface designs, integrated website Tessitura CRM, and optimized the CMS user experience for a world famous arts organization and theater.</p>

            <Link href={"https://www.figma.com/design/jcuqsspdLnJVhH6rXRo2kb/Love-Car-v2.0?node-id=0-1&t=W0Ah7Vx0l8faZ7TV-1"} className="flex gap-2 items-center mt-4 text-[#ba68bb]">
              <span className="h-4 w-4 bg-[url('/tool_figma.svg')] bg-contain bg-no-repeat"></span>
              Figma
            </Link>
          </section>

          <section className="w-full flex flex-col items-start border-2 p-4 rounded-lg">
            <Avatar className="w-full h-40 rounded-lg">
              <AvatarImage src={"/selflab_design.png"} alt="Portfolio Personal Image" />
              <AvatarFallback>Ah</AvatarFallback>
            </Avatar>
            
            <h3 className="mt-4">Self Lab</h3>
            <p className="text-gray-400 mt-4">Developed and maintained front end user interface designs, integrated website Tessitura CRM, and optimized the CMS user experience for a world famous arts organization and theater.</p>

            <Link href={"https://www.figma.com/design/Nds0bdwuT5q3Pzm5YYDU2y/Self-Lab?node-id=0-1&t=zs9K85Vibl7z6Qx4-1"} className="flex gap-2 items-center mt-4 text-[#ba68bb]">
              <span className="h-4 w-4 bg-[url('/tool_figma.svg')] bg-contain bg-no-repeat"></span>
              Figma
            </Link>
          </section>
          

          
          
        </section>

      </section>
    </section>
  );
}
