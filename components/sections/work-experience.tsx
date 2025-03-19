"use client"

import { BriefcaseBusiness, Cpu,  FileUser, FolderGit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'

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
          

        <Button variant="secondary" className="mt-10 w-full rounded-[0.3rem] flex items-center gap-2" 
          onClick={() => window.open("https://drive.google.com/file/d/1gn81okfh-otCwjhOoCRQAH5W35drKfBY/view", "_blank", "noopener,noreferrer")}
        >
          Download Resume <FileUser color="#ba68bb" className="h-6" />
        </Button>
      </section>

      <section className="flex flex-col border-4 rounded-xl p-6">
        <section className="flex-grow">
          <h2 className="flex gap-2 items-center"><Cpu color="#ba68bb" />Toolkit</h2>

          <section className="flex flex-col justify-between mt-6">

            <section>
              <h3 className="mb-2">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="border-2 border-[#e34c26] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_html5.svg')] bg-contain bg-no-repeat"></span> HTML 
                </span>
                <span className="border-2 border-[#264de4] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_css3.svg')] bg-contain bg-no-repeat"></span> CSS
                </span>
                <span className="border-2 border-[#f7df1e] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_js.svg')] bg-contain bg-no-repeat"></span> JavaScript
                </span>
                <span className="border-2 border-[#007ACC] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_ts.svg')] bg-contain bg-no-repeat"></span> TypeScript
                </span>
                <span className="border-2 border-[#61dafb] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_react.svg')] bg-contain bg-no-repeat"></span> React
                </span>
                <span className="border-2 border-white p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_nextjs.svg')] bg-contain bg-no-repeat"></span> NextJS
                </span>
                <span className="border-2 border-[#00BCFF] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_tailwind.svg')] bg-contain bg-no-repeat"></span> Tailwind CSS
                </span>
                {/* <span className="border-2 border-[#ff9500] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_graphql.svg')] bg-contain bg-no-repeat"></span> GraphQL
                </span> */}
              </div>
            </section>

            <section className="my-6">
              <h3 className="mb-2">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="border-2 border-[#6cc24a] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_node.svg')] bg-contain bg-no-repeat"></span> Node.js
                </span>
                <span className="border-2 border-white p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_express.svg')] bg-contain bg-no-repeat"></span> Express
                </span>
                {/* <span className="border-2 border-[#4479a1] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_mysql.svg')] bg-contain bg-no-repeat"></span> MySQL
                </span>
                <span className="border-2 border-[#336791] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_postgresql.svg')] bg-contain bg-no-repeat"></span> PostgreSQL
                </span> */}
                <span className="border-2 border-[#4db33d] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_mongodb.svg')] bg-contain bg-no-repeat"></span> MongoDB
                </span>
                {/* <span className="border-2 border-[#3572A5] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_python.svg')] bg-contain bg-no-repeat"></span> Python
                </span> */}
                {/* <span className="border-2 border-[#0074a6] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_django.svg')] bg-contain bg-no-repeat"></span> Django
                </span>
                <span className="border-2 border-[#ff2d20] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_laravel.svg')] bg-contain bg-no-repeat"></span> Laravel
                </span> */}
                {/* <span className="border-2 border-[#777bb4] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_php.svg')] bg-contain bg-no-repeat"></span> PHP
                </span>
                <span className="border-2 border-[#007396] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_java.svg')] bg-contain bg-no-repeat"></span> Java
                </span>
                <span className="border-2 border-[#00ADD8] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_golang.svg')] bg-contain bg-no-repeat"></span> Go
                </span> */}
              </div>
            </section>

            <section>
              <h3 className="mb-2">Design & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="border-2 border-[#0acf83] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_figma.svg')] bg-contain bg-no-repeat"></span> Figma
                </span>
                <span className="border-2 border-[#ff6c37] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_postman.svg')] bg-contain bg-no-repeat"></span> Postman
                </span>
                <span className="border-2 border-[#f05032] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_git.svg')] bg-contain bg-no-repeat"></span> Git
                </span>
                <span className="border-2 border-white p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_github.svg')] bg-contain bg-no-repeat"></span> GitHub
                </span>
                {/* <span className="border-2 border-[#007ee5] p-1 rounded-sm flex items-center gap-1 bg-secondary">
                  <span className="h-4 w-4 bg-[url('/tool_docker.svg')] bg-contain bg-no-repeat"></span> Docker
                </span> */}
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