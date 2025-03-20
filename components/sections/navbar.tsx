"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { Dancing_Script } from "next/font/google";

const dancingScriptFont = Dancing_Script({ subsets: ["latin"] })

export function NavHeader() {
  return (
    <section className="relative bg-background w-full sm:w-12/12 xl:w-12/12 xl:max-w-6xl mx-auto z-1000 p-10">
      <header className="flex justify-between items-center">
        <Link
          href={"/"}
          className={`text-gray-400 font-bold text-2xl md:text-2xl hover:transition-colors hover:duration-500 hover:text-[#ba68bb] ${dancingScriptFont.className}`}
        >
          AH
        </Link>
        <ul
          className="flex justify-between gap-6 items-center
        "
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

          <li className="hidden md:block">
            <Link href={"https://github.com/AhmedHHamdy"} target="_blank">
              <Github className="text-gray-400 hover:transition-colors hover:duration-500 hover:text-[#ba68bb]" />
            </Link>
          </li>

          <li className="hidden md:block">
            <Link href={"https://www.linkedin.com/in/ahmedhhamdy/"} target="_blank">
              <Linkedin className="text-gray-400 hover:transition-colors hover:duration-500 hover:text-[#ba68bb]" />
            </Link>
          </li>

          <li className="hidden md:block">
            <Link href={"https://twitter.com/AhmedHHamdyx"} target="_blank">
              <svg
                role="img"
                viewBox="0 0 24 24"
                id="twitter-svg"
                className="w-6 h-6 hover:transition-colors hover:duration-500 hover:text-[#ba68bb]"
                fill="#9ca3af"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </Link>
          </li>

          {/* <li className="hidden md:block"><ModeToggle /></li> */}

          <li className="md:hidden">
            <Drawer direction="right">
              <DrawerTrigger>
                <Menu />
              </DrawerTrigger>
              <DrawerContent className="flex flex-col h-full fixed bottem-0 left-0 px-6">
                <section className="flex justify-between py-6">
                  <h1 className="text-gray-400 text-2xl md:text-lg font-medium hover:transition-colors hover:duration-500 hover:text-[#ba68bb] ">
                    Ahmed Hamdy
                  </h1>
                  <DrawerClose>
                    <Button variant="ghost">
                      <X />
                    </Button>
                  </DrawerClose>
                </section>

                <ul>
                  <li>
                    <Link
                      href={"/"}
                      className="text-gray-400 text-lg font-medium hover:transition-colors hover:duration-500 hover:text-[#ba68bb]"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={"/projects"}
                      className="text-gray-400 text-lg font-medium hover:transition-colors hover:duration-500 hover:text-[#ba68bb]"
                    >
                      Projects
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={"/designs"}
                      className="text-gray-400 text-lg font-medium hover:transition-colors hover:duration-500 hover:text-[#ba68bb]"
                    >
                      Designs
                    </Link>
                  </li>
                </ul>

                <section className="flex justify-between gap-2 mt-4 items-center">
                  <section className="flex justify-between gap-2">
                    <Link href={"https://github.com/AhmedHHamdy"} target="_blank">
                      <Github className="text-gray-400 hover:transition-colors hover:duration-500 hover:text-[#ba68bb]" />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/ahmedhhamdy/"} target="_blank">
                      <Linkedin className="text-gray-400 hover:transition-colors hover:duration-500 hover:text-[#ba68bb]" />
                    </Link>
                    <Link href={"https://twitter.com/AhmedHHamdyx"} target="_blank">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 hover:transition-colors hover:duration-500"
                        fill="#9ca3af"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>X</title>
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                      </svg>
                    </Link>
                  </section>
                </section>
              </DrawerContent>
            </Drawer>
          </li>
        </ul>
      </header>
    </section>
  );
}
