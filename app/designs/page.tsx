import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";


export default function Designs() {
  return (
    <section className="px-10 relative bg-background w-full sm:w-12/12 xl:max-w-6xl mx-auto z-1000 py-2">
      <section className="sm:px-12">
        <h2 className="text-4xl font-semibold self-start mb-6">
          Some of my designs
        </h2>

        <p className="text-gray-400 text-md w-11/12">I design clean, user-friendly interfaces for mobile apps and web platforms ranging from simple layouts to complex systems. Focused on functionality and visual appeal.</p>

        <section className="flex flex-col lg:grid lg:grid-cols-3 gap-6 mt-10">

          <section className="w-full flex flex-col items-start border-2 p-4 rounded-lg">
            <section className="flex-grow">
              <Avatar className="w-full h-40 rounded-lg">
                <AvatarImage src={"/selflab_design.png"} alt="Portfolio Personal Image" />
                <AvatarFallback>SelfLab</AvatarFallback>
              </Avatar>
              
              <h3 className="mt-4">Self Lab App</h3>
              <p className="text-gray-400 text-sm mt-4">A food delivery app focused on homemade meals, connecting users with authentic, locally made dishes from specific regions in Saudi Arabia.</p>
            </section>
            
            <a target="_blank" href={"https://www.figma.com/design/Nds0bdwuT5q3Pzm5YYDU2y/Self-Lab?node-id=0-1&t=zs9K85Vibl7z6Qx4-1"} className="flex gap-2 items-center mt-4 text-[#ba68bb]">
              <span className="h-4 w-4 bg-[url('/tool_figma.svg')] bg-contain bg-no-repeat"></span>
              Figma
            </a>
          </section>

          <section className="w-full flex flex-col items-start border-2 p-4 rounded-lg">
            <section className="flex-grow">
              <Avatar className="w-full h-40 rounded-lg">
                <AvatarImage src={"/crm.png"} alt="Portfolio Personal Image" />
                <AvatarFallback>CRM APP</AvatarFallback>
              </Avatar>
              
              <h3 className="mt-4">CRM App</h3>
              <p className="text-gray-400 text-sm mt-4">Designed a CRM mobile app with an intuitive UI, enabling efficient customer data management and streamlined business workflows.</p>
            </section>
            
            <a target="_blank" href={"https://www.figma.com/design/DVT0P1Ud0N67AVQdaXMkrM/CRM-Mobile-App?node-id=0-1&t=m8HcISjPgapCe3s3-1"} className="flex gap-2 items-center mt-4 text-[#ba68bb]">
              <span className="h-4 w-4 bg-[url('/tool_figma.svg')] bg-contain bg-no-repeat"></span>
              Figma
            </a>
          </section>
          
          <section className="w-full flex flex-col items-start border-2 p-4 rounded-lg">
            <section className="flex-grow">
              <Avatar className="w-full h-40 rounded-lg">
                <AvatarImage src={"/desgin_LoveCar.png"} alt="Portfolio Personal Image" />
                <AvatarFallback>MLC App</AvatarFallback>
              </Avatar>
              
              <h3 className="mt-4">My Love Car App</h3>
              <p className="text-gray-400 text-sm mt-4">A comprehensive car marketplace app designed for buying and selling vehicles, exploring car exhibitions, and shopping for auto parts. The app features a user-friendly interface, seamless navigation, and a focus on showcasing listings from specific regions in Saudi Arabia.</p>
            </section>

            <a target="_blank" href={"https://www.figma.com/design/jcuqsspdLnJVhH6rXRo2kb/Love-Car-v2.0?node-id=0-1&t=W0Ah7Vx0l8faZ7TV-1"} className="flex gap-2 items-center mt-4 text-[#ba68bb]">
              <span className="h-4 w-4 bg-[url('/tool_figma.svg')] bg-contain bg-no-repeat"></span>
              Figma
            </a>
          </section>

          <section className="w-full flex flex-col items-start border-2 p-4 rounded-lg">
            <section className="flex-grow">
              <Avatar className="w-full h-40 rounded-lg">
                <AvatarImage src={"/hr_design.png"} alt="Portfolio Personal Image" />
                <AvatarFallback>HR App</AvatarFallback>
              </Avatar>
              
              <h3 className="mt-4">Human Recourses App</h3>
              <p className="text-gray-400 text-sm mt-4">An HR management app designed to streamline employee check-in/out, attendance tracking, and absence management. The app also includes features for submitting vacation requests, shift changes, and tracking salary details.</p>
            </section>
            <a target="_blank" href={"https://www.figma.com/design/4Bk3eOLqT444oBFvpOYHnZ/HR-System-design?node-id=314-1278&t=SfWW8oN8vdY5YZhU-1"} className="flex gap-2 items-center mt-4 text-[#ba68bb]">
              <span className="h-4 w-4 bg-[url('/tool_figma.svg')] bg-contain bg-no-repeat"></span>
              Figma
            </a>
          </section>
          
        </section>

      </section>
    </section>
  );
}
