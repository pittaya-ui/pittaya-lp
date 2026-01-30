"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Twitter } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TEAM_MEMBERS = [
  {
    name: "Lucas Ribeiro",
    role: "Co-Founder & Most Beautiful Developer",
    src: "/lucas.jpeg",
    twitter: "https://x.com/lucasribeirodev",
    github: "https://github.com/lucasadsr",
  },
  {
    name: "Marcos Bueno",
    role: "Co-Founder & The best from Olinda",
    src: "/marcos.jpeg",
    twitter: "https://x.com/MarcosBuenoDev  ",
    github: "https://github.com/marcosvbueno",
  },
  {
    name: "Jarbas Gouveia",
    role: "Co-Founder & The best from Ibura",
    src: "/jarbas.jpeg",
    twitter: "https://x.com/jarbas_gouveia",
    github: "https://github.com/jjgouveia",
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 bg-secondary/20 border-t border-border/50"
    >
      <div className="container px-4 text-center lg:max-w-4xl mx-auto">
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24 justify-between">
          <div className="sm:w-3/5">
            <h2 className="text-3xl font-bold sm:text-4xl text-left">
              Who is Behind the business?
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p className="text-justify">
              During the working process, we perform regular fitting with the
              client because he is the only person who can feel whether a new
              suit fits or not.
            </p>
          </div>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 mt-12 md:mt-24">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="group overflow-hidden">
              <Image
                className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                src={member.src}
                alt="team member"
                width="826"
                height="1239"
              />
              <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                <div className="flex justify-between">
                  <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                    {member.name}
                  </h3>
                  <span className="text-xs">_0{index + 1}</span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-left">
                    {member.role}
                  </span>
                  <div className="flex gap-3 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 delay-75">
                    <Link
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
                    >
                      <Twitter className="w-4 h-4" />
                    </Link>
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
