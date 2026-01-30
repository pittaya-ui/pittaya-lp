import Image from "next/image";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

import { teamMembers } from "@/data/team";

/**
 * Team section - Server Component (no client-side JS needed)
 * Optimized by removing "use client" and unused GSAP imports
 */
export function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 bg-secondary/20 border-t border-border/50"
      aria-labelledby="team-heading"
    >
      <div className="container px-4 text-center lg:max-w-4xl mx-auto">
        {/* Section Header */}
        <header className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24 justify-between">
          <div className="sm:w-3/5">
            <h2
              id="team-heading"
              className="text-3xl font-bold sm:text-4xl text-left"
            >
              Who is Behind the business?
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p className="text-justify text-muted-foreground">
              During the working process, we perform regular fitting with the
              client because he is the only person who can feel whether a new
              suit fits or not.
            </p>
          </div>
        </header>

        {/* Team Grid */}
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 mt-12 md:mt-24">
          {teamMembers.map((member, index) => (
            <article key={member.name} className="group overflow-hidden">
              <Image
                className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                src={member.src}
                alt={`${member.name} - ${member.role}`}
                width={826}
                height={1239}
                loading="lazy"
              />
              <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                <div className="flex justify-between">
                  <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                    {member.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    _0{index + 1}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-left">
                    {member.role}
                  </span>
                  <div className="flex gap-3 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 delay-75">
                    <Link
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter className="w-4 h-4" aria-hidden="true" />
                    </Link>
                    <Link
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
