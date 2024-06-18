"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ModeToggle } from "./themeButton";
import { Github, Linkedin, Menu, X } from "lucide-react";

export function NavHeader() {
  return (
    <section className="w-full sm:w-11/12 md:w-9/12 xl:max-w-4xl mx-auto px-8 pt-10 sm:pt-10 sm:px-0">
      <header className="flex justify-between items-center">
        <Link href={"/"} className="text-gray-400 text-2xl md:text-lg font-medium hover:transition-colors hover:duration-500 hover:text-white ">Ahmed Hamdy</Link>
        <ul className="flex justify-between gap-6 items-center
        ">
          <li className="hidden md:block">
            <Link href={""} className="text-gray-400 text-lg font-medium hover:transition-colors hover:duration-500 hover:text-white">Projects</Link>
          </li>

          <li className="hidden md:block">
            <Link href={"/contact-me"} className="text-gray-400 text-lg font-medium hover:transition-colors hover:duration-500 hover:text-white">Contact Me</Link>
          </li>
        

          <li className="hidden md:block"><Link href={""}><Github className="text-gray-400 hover:transition-colors hover:duration-500 hover:text-white" /></Link></li>

          
          <li className="hidden md:block"><Link href={""}><Linkedin className="text-gray-400 hover:transition-colors hover:duration-500 hover:text-white" /></Link></li>

          <li className="hidden md:block"><Link href={""}><svg role="img" viewBox="0 0 24 24" id="twitter-svg"  className="w-6 h-6 hover:transition-colors hover:duration-500 hover:text-white" fill="#9ca3af" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></Link></li>

          <li className="hidden md:block"><ModeToggle /></li>

          <li className="md:hidden">
            <Drawer direction="right">
              <DrawerTrigger><Menu /></DrawerTrigger>
              <DrawerContent className="flex flex-col h-full fixed bottem-0 left-0 px-6">
    
                  <section className="flex justify-between py-6">
                    <h1 className="text-gray-400 text-2xl md:text-lg font-medium hover:transition-colors hover:duration-500 hover:text-white ">Ahmed Hamdy</h1>
                    <DrawerClose>
                      <Button variant="ghost"><X /></Button>
                    </DrawerClose>
                  </section>

                  <ul>
                    <li className="">
                      <Link href={""} className="text-gray-400 text-lg font-medium hover:transition-colors hover:duration-500 hover:text-white">Projects</Link>
                    </li>

                    <li className="">
                      <Link href={""} className="text-gray-400 text-lg font-medium hover:transition-colors hover:duration-500 hover:text-white">Contact Me</Link>
                    </li>
                  </ul>

                  <section className="flex justify-between gap-2 mt-4 items-center">        
                    <section className="flex justify-between gap-2">
                      <Link href={""}><Github className="text-gray-400 hover:transition-colors hover:duration-500 hover:text-white" /></Link>
                      <Link href={""}><Linkedin className="text-gray-400 hover:transition-colors hover:duration-500 hover:text-white" /></Link>
                      <Link href={""}><svg role="img" viewBox="0 0 24 24"  className="w-6 h-6 hover:transition-colors hover:duration-500 hover:text-white" fill="#9ca3af" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></Link>
                    </section>

                    <ModeToggle />
                  </section>
          
                  
              </DrawerContent>
            </Drawer>
          </li>
        </ul>
      </header>
    </section>
  );
}
