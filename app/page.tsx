import Intro from "@/components/sections/intro";
import WorkExperience from "@/components/sections/work-experience";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <section className="relative bg-background w-full sm:w-11/12 md:w-9/12 xl:w-12/1 xl:max-w-6xl mx-auto z-1000">
      <Intro />

      <Separator className="bg-[#ba68bb] w-full sm:w-11/12 md:w-9/12 xl:w-12/1 xl:max-w-6xl mx-auto mt-10" />

      <WorkExperience />

      <Separator className="bg-[#ba68bb] w-full sm:w-11/12 md:w-9/12 xl:w-12/1 xl:max-w-6xl mx-auto mt-10" />

    </section>
  );
}
