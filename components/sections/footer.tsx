import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="px-10 relative bg-background w-full xl:w-12/12 xl:max-w-6xl mx-auto z-1000 p-10">
      <footer className="flex flex-col sm:gap-4 lg:flex-row justify-between items-center">
        <ul
          className="flex justify-between gap-6 items-center"
        >
          <li className="hidden md:block">
            <Link
              href={"/"}
              className="text-gray-400 text-lg font-medium hover:transition-colors hover:duration-500 hover:text-[#ba68bb]"
            >
              Home
            </Link>
          </li>   

          <li className="hidden md:block">
            <Link
              href={"/projects"}
              className="text-gray-400 text-lg font-medium hover:transition-colors hover:duration-500 hover:text-[#ba68bb]"
            >
              Projects
            </Link>
          </li>

          <li className="hidden md:block">
            <Link
              href={"/designs"}
              className="text-gray-400 text-lg font-medium hover:transition-colors hover:duration-500 hover:text-[#ba68bb]"
            >
              Designs
            </Link>
          </li>
        </ul>

        <ul className="flex justify-between gap-6 items-center">
          <li className="hidden md:block">
              <Link href={"https://github.com/AhmedHHamdy"}>
                <Github className="text-[#ba68bb] hover:transition-colors hover:duration-500 hover:text-white" />
              </Link>
            </li>

            <li className="hidden md:block">
              <Link href={"https://www.linkedin.com/in/ahmedhhamdy/"}>
                <Linkedin className="text-[#ba68bb] hover:transition-colors hover:duration-500 hover:text-white" />
              </Link>
            </li>

            <li className="hidden md:block">
              <Link href={"https://twitter.com/AhmedHHamdyx"}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  id="twitter-svg"
                  className="w-6 h-6 hover:transition-colors hover:duration-500 hover:text-white"
                  fill="#ba68bb"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </Link>
            </li>
        </ul>

        <small className="text-gray-400">©{new Date().getFullYear()} Ahmed Hamdy. All rights reserved.</small>
      </footer>
    </section>
  );
}
