"use client"

import { ArrowUpRight, FileUser, FolderGit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import TextAnimation from "@/components/text-animation";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { useEffect } from "react";

export default function Intro() {

  const router = useRouter()

  useEffect(() => {
    router.prefetch("/projects");
  }, [router]); 

  return (
    <main className="relative z-10 flex flex-col items-center gap-10 bg-background px-12 sm:p-0">
      
      <section className="sm:px-12">
        <h1 className="text-4xl font-semibold self-start mb-6 uppercase text-gray-400">
          Ahmed Hamdy
        </h1>
        <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <section className="self-start text-lg text-gray-400 gap-8 flex flex-col w-full">
            <TextAnimation />
            <p>
              Passionate about designing and building for the web, I thrive on
              solving problems and building high quality, reliable applications
              across diverse industries.
            </p>

            <p>
              {" "}
              With a background in mechatronics and a strong foundation in
              Full-stack development, I specialize in creating responsive and
              engaging applications focused on user experience, maintainability,
              and performance.
            </p>
          </section>

          <section className="w-full flex justify-center items-center rotate-3 drop-shadow-[0_5px_12px_rgba(186,104,187,0.25)] mt-10 md:mt-10 lg:mt-0">
            <Avatar className="w-72 h-64 rounded-2xl hover:w-80 hover:h-72 transition-all duration-500 ease-in-out">
              <AvatarImage src={"/pic.jpg"} alt="Portfolio Personal Image" />
              <AvatarFallback>AH</AvatarFallback>
            </Avatar>
          </section>
        </section>

        <section className="self-start flex flex-col flex-wrap justify-center items-start gap-6 mt-10">
          <section className="flex item-center gap-4">
            <Button
              variant="secondary"
              className="rounded-[0.3rem] flex items-center gap-2"
              onClick={() => router.push("/projects")}
            >
              View Projects <FolderGit color="#ba68bb" className="h-6" />
            </Button>
            <Link
              href={"https://drive.google.com/file/d/1gn81okfh-otCwjhOoCRQAH5W35drKfBY/view"}
              target="_blank"
              className="bg-secondary rounded-[0.3rem] px-4 flex items-center gap-2 hover:bg-secondary/80"
              >
              Download Resume <FileUser color="#ba68bb" className="h-6" />
            </Link>
          </section>

          <section className="flex flex-wrap justify-start items-center gap-6 mt-4">
            <a
              className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:text-[#ba68bb] transition-colors duration-300"
              href="https://github.com/AhmedHHamdy"
              target="_blank"
            >
              Github
              <ArrowUpRight className="h-4 ml-1" />
            </a>
            <a
              className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:text-[#ba68bb] transition-colors duration-300"
              href="https://www.linkedin.com/in/ahmedhhamdy/"
              target="_blank"
            >
              Linkedin
              <ArrowUpRight className="h-4 ml-1" />
            </a>
            <a
              className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:text-[#ba68bb] transition-colors duration-300"
              href="https://twitter.com/AhmedHHamdyx"
              target="_blank"
            >
              Twitter
              <ArrowUpRight className="h-4 ml-1" />
            </a>
            <a
              className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:text-[#ba68bb] transition-colors duration-300"
              href="mailto:Thisisahmedhamdy@gmail.com"
            >
              Email
              <ArrowUpRight className="h-4 ml-1" />
            </a>
          </section>
        </section>
      </section>
    </main>
  );
}
