import { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  highlight?: string;
  description?: ReactNode;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, highlight, description, children }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-gradient-hero animate-shimmer py-16 md:py-24">
    <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-blob" />
    <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-warm-red/30 blur-3xl animate-blob-slow" />
    <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-peach/40 blur-3xl animate-float" />

    <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center">
      <FadeIn>
        {eyebrow && (
          <span className="inline-block rounded-full bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm shadow-sm">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
          {title}
          {highlight && <> <span className="text-gradient italic">{highlight}</span></>}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-base text-foreground/80 leading-relaxed md:text-lg">
            {description}
          </p>
        )}
        {children}
      </FadeIn>
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-warm opacity-60" />
  </section>
);

export default PageHero;