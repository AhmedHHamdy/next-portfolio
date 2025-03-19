import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Projects() {
  return (
    <section className="px-10 relative bg-background w-full sm:w-11/12 md:w-9/12 xl:w-12/1 xl:max-w-6xl mx-auto z-1000 p-10">
      <section className="sm:px-12">
        <h2 className="text-4xl font-semibold self-start mb-6">
          Some of my recent work
        </h2>

        <p className="text-gray-400 w-8/12">I've done a variety of work, from simple websites to complex web applications. Here are a few of my favorites. Contact me if you would like to work together!</p>
        <section className="grid grid-cols-3 space-y-6 mt-10">
          
        <Dialog>
          <DialogTrigger>
            <section className="w-full flex flex-col items-start border-2 p-4 rounded-lg">
              <Avatar className="w-full h-52 rounded-lg">
                <AvatarImage src={""} alt="Portfolio Personal Image" />
                <AvatarFallback>Ah</AvatarFallback>
              </Avatar>
              
              <h3 className="mt-4">Project Name</h3>
              <p className="text-gray-400 mt-4 text-start">Developed and maintained front end user interface designs, integrated website Tessitura CRM, and optimized the CMS user experience for a world famous arts organization and theater.</p>

              <section>
                <span>React</span>
              </section>

            </section>
          </DialogTrigger>
          <DialogContent className="w-12/12">
            <DialogHeader>
              <DialogTitle>Project Details</DialogTitle>
              <DialogDescription>
                <section className="flex justify-between items-center">
                  <h3 className="mt-4">Project Name</h3>

                  <section className="flex gap-4 items-center">
                    <Button variant="secondary" className="flex gap-2 items-center mt-4"><Link color="#ba68bb" className="h-5" />Live</Button>
                    <Button variant="secondary" className="flex gap-2 items-center mt-4"><Github color="#ba68bb" className="h-5" />GitHub</Button>
                  </section>
                </section>

                <p className="text-gray-400 mt-6">Developed and maintained front end user interface designs, integrated website Tessitura CRM, and optimized the CMS user experience for a world famous arts organization and theater.</p>

                <section>
                  <span>React</span>
                </section>

                <section>
                  <Avatar className="w-full h-52 rounded-lg mt-4">
                    <AvatarImage src={""} alt="Portfolio Personal Image" />
                    <AvatarFallback>Ah</AvatarFallback>
                  </Avatar>
                </section>

              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

          {/* <section className="w-full flex flex-col items-start border-2 p-4 rounded-lg">
            <Avatar className="w-full h-52 rounded-lg">
              <AvatarImage src={""} alt="Portfolio Personal Image" />
              <AvatarFallback>Ah</AvatarFallback>
            </Avatar>
            
            <h3 className="mt-4">Project Name</h3>
            <p className="text-gray-400 mt-4">Developed and maintained front end user interface designs, integrated website Tessitura CRM, and optimized the CMS user experience for a world famous arts organization and theater.</p>

            <section>
              <span>React</span>
            </section>

            <Button variant="secondary" className="flex gap-2 items-center mt-4"><Link color="#ba68bb" className="h-5" />Live</Button>
          </section> */}

          
        </section>

      </section>
    </section>
  );
}
