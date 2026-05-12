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
  <section className="border-b border-border bg-gradient-hero py-14 md:py-20">
    <div className="container mx-auto max-w-3xl px-6 text-center">
      <FadeIn>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
        )}
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.12] text-foreground md:text-5xl">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-primary">{highlight}</span>
            </>
          )}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
        {children}
      </FadeIn>
    </div>
  </section>
);

export default PageHero;
