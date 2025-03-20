import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Github, Link2, ListCollapse } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export default function Projects() {
  return (
    <section className="px-10 relative bg-background w-full sm:w-12/12 xl:max-w-6xl mx-auto z-1000 py-2">
      <section className="sm:px-12">
        <h2 className="text-4xl font-semibold self-start mb-6">
          Some of my recent work
        </h2>

        <p className="text-gray-400 text-md w-11/12">I've done a variety of work, from simple websites to complex web applications. Here are a few of my favorites. Contact me if you would like to work together!</p>

        <section className="grid grid-cols-3 gap-x-10 gap-y-10 mt-10">
  
          <Dialog>
            <DialogTrigger>
              <section className="w-full h-[34rem] flex flex-col items-start border-2 p-4 rounded-lg hover:bg-[#141418] transition-all duration-300 ease-in-out">
                <section className="flex-grow">
                  <Avatar className="w-full h-40 rounded-lg">
                    <AvatarImage src={"/pos_system_logo.jpg"} alt="Portfolio Personal Image" />
                    <AvatarFallback>POS</AvatarFallback>
                  </Avatar>
                  
                  <h3 className="mt-4 text-lg">Smart POS</h3>
                  <p className="text-gray-400 my-2 text-sm text-start">Designed and Developed Smart POS three operational layers: hall, cashier, and call center. The system streamlines restaurant and retail operations by providing real-time order status tracking, admin settings for managing personnel and user roles, and dynamic financial reporting.</p>
                  
                  <section className="flex items-center flex-wrap gap-x-2 gap-y-3 mt-5">
                    <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">React</Badge>
                    <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">JSX</Badge>
                    <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Tailwind CSS</Badge>
                    <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Java</Badge>
                    <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">MySQL</Badge>
                  </section>
                </section>

                <section className="flex justify-between gap-4 items-center w-full">
                  <span className="flex gap-2 items-center mt-4 text-[#ba68bb] hover:text-white"><ListCollapse color="#ba68bb" className="h-5" />Details</span>
                </section>
              </section>
            </DialogTrigger>
            <DialogContent className="w-12/12 max-w-6xl">
              <DialogHeader>
                <DialogTitle>Project Details</DialogTitle>
                <DialogDescription>
                  <section className="flex justify-between items-center">
                    <h3 className="mt-4 font-bold text-2xl text-[#ba68bb]">Smart POS</h3>

                    <section className="flex gap-4 items-center">
                      <Button variant={"outline"} className="text-[#ba68bb]">Locally Hosted</Button>
                    </section>
                  </section>

                  <Separator className="bg-[#ba68bb] w-9/12 xl:max-w-6xl mx-auto my-6" />

                  <p className="text-gray-400 mt-6">Designed and Developed Smart POS with three operational layers: hall, cashier, and call center. The system streamlines restaurant and retail operations by providing real-time order status tracking, admin settings for managing personnel and user roles, and dynamic financial reporting.</p>

                  <section className="flex items-center flex-wrap gap-2 mt-5">
                    <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">React</Badge>
                    <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">JSX</Badge>
                    <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Tailwind CSS</Badge>
                    <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Java</Badge>
                    <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">MySQL</Badge>
                  </section>

                  <section className="px-10 mt-5">
                    <Carousel className="w-full">
                      <CarouselContent className="">
                        {Array.from({ length: 45 }).map((_, index) => (
                          <CarouselItem key={index}>
                            <Card className="h-96">
                              <CardContent className="flex item-center justify-center p-0 h-full">
                                <img
                                  src={`/pos-system-images/pos_system_${index+1}.jpeg`}
                                  alt="project-images"
                                  className="w-full h-full object-contain rounded-md max-w-full"
                                />
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </section>

                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <section className="w-full h-[34rem] flex flex-col items-start border-2 p-4 rounded-lg hover:bg-[#141418] transition-all duration-300 ease-in-out cursor-pointer">
            <section className="flex-grow">
              <Avatar className="w-full h-40 rounded-lg">
                <AvatarImage src={"/mlc_logo.png"} alt="MyLoveCar logo Image" />
                <AvatarFallback>MyLoveCar</AvatarFallback>
              </Avatar>
              
              <h3 className="mt-4 text-lg">My Love Car</h3>
              <p className="text-gray-400 text-sm my-2 text-start">Designed and developed an automotive service platform that offers a range of services, including maintenance, parts replacement, licensing, appointment scheduling, and client messaging. It features a user-friendly dashboard for managing service requests and a detailed car parts list.</p>
              
              <section className="flex items-center flex-wrap gap-x-2 gap-y-3 mt-5">
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">React</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">JSX</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Tailwind</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Laravel</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">MySQL</Badge>
              </section>
            </section>

            <section className="flex justify-between gap-4 items-center w-full">
              <Link href={"https://mylovecar1886.com/"} target="_blank" className="flex gap-2 items-center mt-4 text-[#ba68bb] hover:text-white"><Link2 color="#ba68bb" className="h-5" />Live</Link>
            </section>
          </section> 
          
          <section className="w-full h-[34rem] flex flex-col items-start border-2 p-4 rounded-lg hover:bg-[#141418] transition-all duration-300 ease-in-out cursor-pointer">
            <section className="flex-grow">
              <Avatar className="w-full h-40 rounded-lg">
                <AvatarImage src={"/selflab_logo.png"} alt="Self Lab logo Image" />
                <AvatarFallback>Self Lab</AvatarFallback>
              </Avatar>
              
              <h3 className="mt-4 text-lg">Self Lab</h3>
              <p className="text-gray-400 text-sm my-2 text-start">Maintained an e-commerce website for ordering homemade meals, using HTML, CSS for the frontend, and Laravel for the backend. Customized the CSS to ensure a visually appealing and responsive design. The platform allows users to browse, order, and schedule delivery.</p>
              
              <section className="flex items-center flex-wrap gap-x-2 gap-y-3 mt-5">
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">HTML</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">CSS</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">SASS</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Bootstrap</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Laravel</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">MySQL</Badge>
              </section>
            </section>

            <section className="flex justify-between gap-4 items-center w-full">
              <Link href={"https://self-labsite.zauzat.com/"} target="_blank" className="flex gap-2 items-center mt-4 text-[#ba68bb] hover:text-white"><Link2 color="#ba68bb" className="h-5" />Live</Link>
            </section>
          </section>  

          <section className="w-full h-[34rem] flex flex-col items-start border-2 p-4 rounded-lg hover:bg-[#141418] transition-all duration-300 ease-in-out cursor-pointer">
            <section className="flex-grow">
              <Avatar className="w-full h-40 rounded-lg">
                <AvatarImage src={"/habittracker_logo.png"} alt="Habit Hustle logo Image" />
                <AvatarFallback>Habit Hustle</AvatarFallback>
              </Avatar>
              
              <h3 className="mt-4 text-lg">Habit Hustle</h3>
              <p className="text-gray-400 text-sm my-2 text-start">Habit Hustle is an app designed to help users build and track their habits over time. Inspired by the GitHub commit system, this app visualizes your daily progress by marking each day you successfully complete a habit. The app is built using React for the frontend and Appwrite for the backend.</p>
              
              <section className="flex items-center flex-wrap gap-x-2 gap-y-3 mt-5">
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">NextJS</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">React</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Typescript</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Tailwind CSS</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Appwrite</Badge>
              </section>
            </section>

            <section className="flex justify-between gap-4 items-center w-full">
              <Link href={"https://habit-tracker-react-appwrite.vercel.app/"} target="_blank" className="flex gap-2 items-center mt-4 text-[#ba68bb] hover:text-white"><Link2 color="#ba68bb" className="h-5" />Live</Link>
              <Link href={"https://github.com/AhmedHHamdy/habit-tracker-react-appwrite"} target="_blank" className="flex gap-2 items-center mt-4 text-[#ba68bb] hover:text-white"><Github color="#ba68bb" className="h-5" />GitHub</Link>
            </section>
          </section>          

          <section className="w-full h-[34rem] flex flex-col items-start border-2 p-4 rounded-lg hover:bg-[#141418] transition-all duration-300 ease-in-out cursor-pointer">
            <section className="flex-grow">
              <Avatar className="w-full h-40 rounded-lg">
                <AvatarImage src={"/cupcaked_logo.png"} alt="Cupcaked logo Image" />
                <AvatarFallback>Bake & Co.</AvatarFallback>
              </Avatar>
              
              <h3 className="mt-4 text-lg">Bake & Co.</h3>
              <p className="text-gray-400 text-sm my-2 text-start">Developed a visually appealing online shop for a bakery, a bakery specializing in making cupcakes. Built with Next.js, React, and TypeScript, and styled with Tailwind CSS, the website offers a seamless shopping experience with a focus on aesthetics and functionality.</p>
              
              <section className="flex items-center flex-wrap gap-x-2 gap-y-3 mt-5">
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">NextJS</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">React</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Typescript</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Tailwind CSS</Badge>
              </section>
            </section>

            <section className="flex justify-between gap-4 items-center w-full">
              <Link href={"https://bakery-shop-rouge.vercel.app/"} target="_blank" className="flex gap-2 items-center mt-4 text-[#ba68bb] hover:text-white"><Link2 color="#ba68bb" className="h-5" />Live</Link>
              <Link href={"https://github.com/AhmedHHamdy/bakery-shop"} target="_blank" className="flex gap-2 items-center mt-4 text-[#ba68bb] hover:text-white"><Github color="#ba68bb" className="h-5" />GitHub</Link>
            </section>
          </section>

          <section className="w-full h-[34rem] flex flex-col items-start border-2 p-4 rounded-lg hover:bg-[#141418] transition-all duration-300 ease-in-out cursor-pointer">
            <section className="flex-grow">
              <Avatar className="w-full h-40 rounded-lg">
                <AvatarImage src={"/lmarbeauty_logo.png"} alt="lmar beauty logo Image" />
                <AvatarFallback>Lmar Beauty</AvatarFallback>
              </Avatar>
              
              <h3 className="mt-4 text-lg">Lmar Beauty</h3>
              <p className="text-gray-400 text-sm my-2 text-start">Designed and developed a modern, visually appealing website for Lmar Clinic using Node.js and Express. The site features a seamless booking system, intuitive UI, and a great user experience, allowing clients to easily schedule laser hair removal, cosmetic injections, and skin treatments.</p>
              
              <section className="flex items-center flex-wrap gap-x-2 gap-y-3 mt-5">
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">HTML</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">CSS</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">NodeJS</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Express</Badge>
              </section>
            </section>

            <section className="flex justify-between gap-4 items-center w-full">
              <Link href={"https://lmarbeauty.onrender.com/"} target="_blank" className="flex gap-2 items-center mt-4 text-[#ba68bb] hover:text-white"><Link2 color="#ba68bb" className="h-5" />Live</Link>
              <Link href={"https://github.com/AhmedHHamdy/LmarBeauty"} target="_blank" className="flex gap-2 items-center mt-4 text-[#ba68bb] hover:text-white"><Github color="#ba68bb" className="h-5" />GitHub</Link>
            </section>
          </section>
  

        </section>
      </section>
    </section>
  );
}
