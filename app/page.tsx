import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex  px-8 sm:px-0 w-full sm:w-11/12 md:w-9/12 xl:w-12/12 flex-col items-center gap-10 mx-auto pt-8 sm:pt-16 xl:max-w-4xl">
      <h1 className="text-4xl font-semibold self-start mt-10">Ahmed Hamdy</h1>
      <section className="self-start text-lg text-gray-400 gap-8 flex flex-col">
        <p>Hi, I'm Ahmed Hamdy, a fullstack software engineer.</p>

        <p>I have a passion for designing and love to create for web, committed to a lifetime of finding solutions, and learning new things. I strive to bring joy to those around me and live with passion.</p>

        <p>As a former Mechatronics engineer turned coding enthusiast, I have always had a passion for coding and bringing projects to life. I find joy in creating art that was once just a passion but has now evolved into more.</p>

        <p>My journey into coding started with curiosity, beginning as a graphic designer, but it quickly transformed into a full-blown pursuit when I discovered the power and potential of Web Development.</p>

        <h3>Find me on</h3>
      </section>
  
      <section className="self-start flex justify-between items-center gap-6">
          <a className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:transition-colors hover:duration-500 hover:text-white" href="#" target="_blank">Github<ArrowUpRight className="h-4" /></a>
          <a className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:transition-colors hover:duration-500 hover:text-white" href="#" target="_blank">Linkedin<ArrowUpRight className="h-4" /></a>
          <a className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:transition-colors hover:duration-500 hover:text-white" href="#" target="_blank">Twitter<ArrowUpRight className="h-4" /></a>
          <a className="flex items-center justify-start cursor-pointer text-gray-400 text-lg hover:transition-colors hover:duration-500 hover:text-white" href="#" target="_blank">Email<ArrowUpRight className="h-4" /></a>
      </section>
      
    </main>
  );
}
