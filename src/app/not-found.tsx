import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function NotFound() {
  return (
    <div className="mt-20 min-h-screen bg-background text-foreground font-sans selection:bg-pittaya selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center relative overflow-hidden px-4 pb-10">
        {/* Background Decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

        <div className="text-center max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="flex items-center justify-center font-serif text-primary/20 font-bold select-none">
            <span className="text-7xl leading-none md:text-9xl lg:text-[230px] 2xl:text-[300px] -mr-2 md:-mr-4 lg:-mr-8">
              4
            </span>
            <div className="flex items-center justify-center z-10">
              <Image
                src="/PITTAYA-LOGO.PNG"
                alt="0"
                width={400}
                height={400}
                quality={100}
                className="h-[65px] w-auto md:h-[100px] lg:h-[180px] 2xl:h-[230px] object-contain drop-shadow-xl translate-y-3 md:translate-y-8 lg:translate-y-15"
                priority
              />
            </div>
            <span className="text-7xl leading-none md:text-9xl lg:text-[230px] 2xl:text-[300px] -ml-2 md:-ml-4 lg:-ml-8">
              4
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
            Page Not Found
          </h2>

          <p className="text-lg xl:text-xl text-muted-foreground leading-relaxed">
            Oops! It seems you&apos;ve wandered into uncharted territory. The
            page you are looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="pt-4">
            <Button asChild size="lg" className="rounded-full gap-2 px-8">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
