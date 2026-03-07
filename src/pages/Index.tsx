import { Link } from "react-router-dom";
import { Heart, Shield, GraduationCap, Leaf, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import ProvinceResources from "@/components/ProvinceResources";
import DonationSection from "@/components/DonationSection";

const helpCards = [
  {
    icon: Heart,
    title: "Confidential Conversations",
    description: "Speak with someone who listens without judgment. Everything you share stays between us.",
  },
  {
    icon: Shield,
    title: "Safety Planning",
    description: "We help you think through your options and create a plan that works for your situation.",
  },
  {
    icon: GraduationCap,
    title: "Student Support Services",
    description: "Tailored resources for students navigating difficult circumstances on or off campus.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-soft-rose py-24 md:py-36 lg:py-44">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-peach/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />

        <div className="container relative mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              You're not alone.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Confidential support for students and individuals across Canada. 🍁
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button asChild size="lg" className="w-full rounded-full px-8 sm:w-auto">
                <Link to="/contact">Reach Out</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full rounded-full px-8 sm:w-auto">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Support when you need it most
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              COVER is a Canadian nonprofit organization that supports people navigating difficult or unsafe situations.
              We offer confidential, compassionate assistance — with no judgment and no cost. Whether you're a student,
              a newcomer, or anyone in need, we're here for you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="text-center font-serif text-2xl font-semibold text-foreground md:text-3xl">
              How We Help
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {helpCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <Card className="group h-full border-none bg-background shadow-sm transition-shadow hover:shadow-md">
                  <CardContent className="p-6 text-center sm:p-8">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent transition-colors group-hover:bg-primary/10">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Province Resources */}
      <ProvinceResources />

      {/* Donation */}
      <DonationSection />

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              When you're ready, we're here.
            </h2>
            <p className="mt-4 text-muted-foreground">
              There's no pressure and no timeline. Reach out whenever it feels right.
            </p>
            <Button asChild size="lg" className="mt-8 w-full rounded-full px-8 sm:w-auto">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
