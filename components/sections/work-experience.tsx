"use client"

import { BriefcaseBusiness, Cpu,  FileUser, FolderGit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import Link from "next/link";

export default function WorkExperience() {
  const router = useRouter()
  router.prefetch("/projects")

  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 gap-10 mt-10 px-10">
      <section className="flex flex-col border-4 rounded-xl p-6 h-full sm:h-[35rem]">
        <section className="flex-grow">
          <h2 className="flex gap-2 items-center"><BriefcaseBusiness color="#ba68bb" /> Work Experience</h2>

          <section className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between sm:items-center mt-6">
            <section className="flex items-center gap-6">
              <Avatar className="w-12 h-12 rounded-3xl">
                <AvatarImage src={"/mess.jfif"} alt="Portfolio Personal Image" />
                <AvatarFallback>MESS</AvatarFallback>
              </Avatar>

              <section>
                <h3>Middle East Enterprise Solutions</h3>
                <h4>Front-End Developer</h4>
              </section>
            </section>

            <section className="self-end">
              <h4>2023 - Present</h4>
            </section>
          </section>

          <section className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between sm:items-center mt-6">
            <section className="flex items-center gap-6">
              <Avatar className="w-12 h-12 rounded-3xl">
                <AvatarImage src={"/100devs.jfif"} alt="Portfolio Personal Image" />
                <AvatarFallback>Ah</AvatarFallback>
              </Avatar>

              <section className="text-start">
                <h3>100Devs</h3>
                <h4>Software Engineer</h4>
              </section>
            </section>


            <section className="self-end">
              <h4>2022 - 2023</h4>
            </section>
          </section>

          <section className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between sm:items-center mt-6">
            <section className="flex items-center gap-6">
              <Avatar className="w-12 h-12 rounded-3xl">
                <AvatarImage src={"/deltaco.jfif"} alt="Portfolio Personal Image" />
                <AvatarFallback>Ah</AvatarFallback>
              </Avatar>

              <section className="text-start">
                <h3>Delta Co. for Engineering Training</h3>
                <h4>Electrical Engineer as Trainee</h4>
              </section>
            </section>


            <section className="self-end">
              <h4>2021 - 2021</h4>
            </section>
          </section>

          <section className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between sm:items-center mt-6">
            <section className="flex items-center gap-6">
              <Avatar className="w-12 h-12 rounded-3xl">
                <AvatarImage src={"/hamdyco.jpg"} alt="Portfolio Personal Image" />
                <AvatarFallback>Ah</AvatarFallback>
              </Avatar>

              <section className="text-start">
                <h3>Freelance Graphic Designer</h3>
                <h4>Graphic Designer</h4>
              </section>
            </section>


            <section className="self-end">
              <h4>2017 - 2019</h4>
            </section>
          </section>
        </section>
          

        <Link
          href={"https://drive.google.com/file/d/1gn81okfh-otCwjhOoCRQAH5W35drKfBY/view"}
          target="_blank"
          className="mt-10 w-full bg-secondary rounded-[0.3rem] px-4 py-2 justify-center flex items-center gap-2 hover:bg-secondary/80"
          >
          Download Resume <FileUser color="#ba68bb" className="h-6" />
        </Link>
      </section>

      <section className="flex flex-col border-4 rounded-xl p-6">
        <section className="flex-grow">
          <h2 className="flex gap-2 items-center"><Cpu color="#ba68bb" />Toolkit</h2>

          <section className="flex flex-col justify-between mt-6">

            <section>
              <h3 className="mb-2">Frontend Development</h3>
              <div className="flex flex-wrap gap-x-2 gap-y-3">
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">HTML</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">CSS</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">JavaScript</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">TypeScript</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">React</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">NextJS</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Tailwind CSS</Badge>
              </div>
            </section>

            <section className="my-6">
              <h3 className="mb-2">Backend Development</h3>
              <div className="flex flex-wrap gap-x-2 gap-y-3">
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Node.js</Badge>

                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Express</Badge>

                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">MongoDB</Badge>

                {/* <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">MySQL</Badge>

                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">PostgreSQL</Badge>

                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Python</Badge>

                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Go</Badge>

                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Django</Badge>

                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Laravel</Badge>

                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Java</Badge> */}
              </div>
            </section>

            <section>
              <h3 className="mb-2">Design & Tools</h3>
              <div className="flex flex-wrap gap-x-2 gap-y-3">
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Figma</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Postman</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Git</Badge>
                <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">GitHub</Badge>
                {/* <Badge className="text-[#7E22CE] bg-[#E9D5FF] h-6">Docker</Badge> */}
              </div>
            </section>
          </section>
        </section>

        <Button onClick={() => router.push("/projects")} variant="secondary" className="mt-10 w-full rounded-[0.3rem] flex items-center gap-2">
          View Projects <FolderGit color="#ba68bb" className="h-6" />
        </Button>
      </section>
    </section>
  )
}