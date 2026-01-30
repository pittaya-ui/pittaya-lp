"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { OrbitImages } from "@/components/ui/orbit-images";
import {
  AnnouncementContainer,
  AnnouncementTitle,
} from "@/components/ui/announcement-badge";

export function HeroSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative overflow-hidden px-8">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="flex flex-col items-start gap-6 max-w-2xl"
        >
          <AnnouncementContainer variant="default">
            <AnnouncementTitle>
              New: AM I ON? is now live!{" "}
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </AnnouncementTitle>
          </AnnouncementContainer>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
            Refining Digital{" "}
            <span className="text-primary italic">Excellence</span>.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            We build tools that bridge functionality and luxury. Experience the
            next generation of development with Pittaya.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="#products">
                Explore Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full hover:bg-secondary/80"
            >
              <Link href="#team">Who We Are</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center"
        >
          {/* Using OrbitImages as a decorative element with shadow */}
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* Shadow div behind OrbitImages */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-pittaya rounded-full blur-[100px] opacity-40 z-0" />

            <div className="relative z-10">
              <OrbitImages
                title="Limitless"
                buttonText="Universe"
                images={[
                  "/PITTAYA-LOGO.PNG",
                  "/AMION.png",
                  "/UI.png",
                  "/UI-MIOBILE.png",
                  "/PITTAYA-LOGO.PNG",
                  "/UI.png",
                ]}
                classNameButton="bg-background text-foreground border border-border/50 shadow-md hover:scale-105 transition-all font-serif italic text-lg tracking-wide"
                autoPlay={true}
                outsideBorderColor="border-primary/10"
                middleBorderColor="border-primary/30"
                innerBorderColor="border-primary/50"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
