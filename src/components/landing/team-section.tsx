"use client";

import { motion } from "framer-motion";
import { Github, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 bg-secondary/20 border-t border-border/50"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl font-bold mb-12">
          Who is Behind the Business
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "Lucas Ribeiro",
              role: "Founder & Most Beautiful Developer",
              src: "https://github.com/lucasadsr.png",
            },
            {
              name: "Pittaya Design",
              role: "Product Design",
              src: "/PITTAYA-LOGO.PNG",
            },
            {
              name: "Community",
              role: "Open Source Contributors",
              src: null,
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm"
            >
              <Avatar className="w-24 h-24 border-4 border-secondary shadow-inner">
                <AvatarImage src={member.src || ""} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-sans text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </div>
              <div className="flex gap-2 mt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <Twitter className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
