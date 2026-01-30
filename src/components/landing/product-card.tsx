import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  icon: LucideIcon;
  iconStyle: {
    container: string;
    icon: string;
  };
  description: string;
  quote?: string;
  tags?: readonly string[];
  cta: {
    label: string;
    href: string;
    className?: string;
  };
  images: {
    desktop: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    mobile?: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  gradient: string;
  reversed?: boolean;
}

/**
 * Individual product card - Server Component for better performance
 */
export function ProductCard({
  title,
  icon: Icon,
  iconStyle,
  description,
  quote,
  tags,
  cta,
  images,
  gradient,
  reversed = false,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "product-section grid lg:grid-cols-2 gap-16 items-center",
        reversed && "lg:grid-flow-dense",
      )}
    >
      {/* Image Section */}
      <div className={cn("relative group", reversed && "lg:col-start-2")}>
        <div
          className={cn(
            "absolute -inset-4 rounded-[2.5rem] -z-10 blur-xl opacity-70 transition-opacity group-hover:opacity-100 duration-500 bg-gradient-to-tr",
            gradient,
            reversed && "bg-gradient-to-tl",
          )}
          aria-hidden="true"
        />

        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white transition-transform duration-700 group-hover:scale-[1.02]">
          <Image
            src={images.desktop.src}
            alt={images.desktop.alt}
            width={images.desktop.width}
            height={images.desktop.height}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Mobile Mockup */}
        {images.mobile && (
          <div className="absolute -bottom-10 -right-6 w-1/3 hidden md:block shadow-2xl rounded-xl border border-border/20 overflow-hidden bg-white z-20 transition-transform duration-500 group-hover:-translate-y-4">
            <Image
              src={images.mobile.src}
              alt={images.mobile.alt}
              width={images.mobile.width}
              height={images.mobile.height}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div
        className={cn(
          "flex flex-col gap-8",
          reversed ? "lg:pr-8 lg:col-start-1 lg:row-start-1" : "lg:pl-8",
        )}
      >
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "p-3 rounded-xl border shadow-sm",
              iconStyle.container,
            )}
          >
            <Icon className={cn("w-8 h-8", iconStyle.icon)} />
          </div>
          <h3 className="font-serif text-4xl font-bold text-foreground">
            {title}
          </h3>
        </div>

        {quote && (
          <div className="pl-6 border-l-4 border-pittaya/60 py-1">
            <p className="text-2xl font-serif italic text-foreground/80">
              &quot;{quote}&quot;
            </p>
          </div>
        )}

        <p className="text-xl text-muted-foreground leading-relaxed">
          {description.split("**").map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="text-foreground font-semibold">
                {part}
              </strong>
            ) : (
              part
            ),
          )}
        </p>

        <div className="space-y-6">
          {tags && (
            <div className="flex flex-wrap gap-2 text-sm">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-muted-foreground font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <Button
            size="lg"
            className={cn(
              "w-fit text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all group",
              cta.className,
            )}
            asChild
          >
            <Link href={cta.href} target="_blank" rel="noopener noreferrer">
              {cta.label}
              <ArrowRight
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
