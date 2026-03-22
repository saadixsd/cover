import { Link } from "react-router-dom";
import { Heart, Shield, GraduationCap, Leaf, Users, BookOpen, HandHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import ProvinceResources from "@/components/ProvinceResources";
import DonationSection from "@/components/DonationSection";
import peaceSign from "@/assets/peace-sign.jpg";
import whiteRibbon from "@/assets/white-ribbon.jpg";

const helpCards = [
  {
    icon: GraduationCap,
    title: "Tuition & Education",
    description:
      "We help cover tuition costs and connect survivors with educational opportunities so they can rebuild and thrive.",
  },
  {
    icon: Users,
    title: "Resource Connection",
    description:
      "We connect you with shelters, counsellors, legal aid, and community services tailored to your province.",
  },
  {
    icon: Shield,
    title: "Safety & Support",
    description:
      "From safety planning to emotional support, we walk alongside you — at your pace, on your terms.",
  },
  {
    icon: BookOpen,
    title: "Youth Programs",
    description:
      "Dedicated support for young people navigating difficult situations at home, school, or in relationships.",
  },
  {
    icon: Heart,
    title: "Survivor Advocacy",
    description:
      "We stand with survivors of domestic abuse and assault, amplifying their voices and fighting for change.",
  },
  {
    icon: HandHeart,
    title: "Ongoing Care",
    description:
      "We're not just a helpline. We stay with you through the journey — follow-ups, check-ins, and continued care.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-soft-rose py-14 sm:py-20 md:py-32 lg:py-40">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-peach/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />

        <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <FadeIn>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              You deserve to feel safe.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base md:text-lg leading-relaxed">
              COVER is more than a helpline — we're a Canadian nonprofit that supports survivors of
              domestic abuse and assault with education funding, resource connection, and ongoing care. 🍁
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button asChild size="lg" className="w-full rounded-full px-8 sm:w-auto">
                <Link to="/contact">Get Support</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full rounded-full px-8 sm:w-auto">
                <Link to="/about">
                  Learn About Us
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Welcome / Who We Are */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <FadeIn>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Welcome to COVER</span>
                <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground md:text-3xl leading-snug">
                  We're here for you — not just today, but through the journey.
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  COVER supports survivors of domestic abuse, assault, and unsafe living situations across Canada.
                  We cover tuition and education costs, connect youth and adults to the right resources,
                  and provide the kind of care that goes far beyond a phone call.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Whether you're a student, a newcomer, or someone who just needs to know they're not alone —
                  this is your safe space. No judgment. No pressure. Just real support.
                </p>
                <Button asChild variant="link" className="mt-4 px-0 text-primary">
                  <Link to="/about">
                    Read our full story <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={peaceSign}
                  alt="COVER community support"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">What We Do</span>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground md:text-3xl">
                More than a helpline — real, lasting support
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                From covering tuition to connecting you with local resources, here's how COVER helps survivors
                rebuild and move forward.
              </p>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {helpCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.08}>
                <Card className="group h-full border-none bg-background shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent transition-colors group-hover:bg-primary/10">
                      <card.icon className="h-5 w-5 text-primary" />
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

      {/* Impact / Reassurance Banner */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <FadeIn>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={whiteRibbon}
                  alt="White ribbon — standing against violence"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">You Belong Here</span>
                <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground md:text-3xl leading-snug">
                  Your story matters. Your safety matters.
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Every person who reaches out to COVER is met with compassion, confidentiality, and respect.
                  We understand how hard it can be to ask for help — and we want you to know that
                  taking this step is an act of incredible strength.
                </p>
                <div className="mt-6 rounded-xl bg-soft-rose p-5">
                  <p className="text-sm text-foreground leading-relaxed">
                    💛 "You don't have to have it all figured out. You just have to take the first step.
                    We'll walk with you from there."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Province Resources */}
      <ProvinceResources />

      {/* Donation */}
      <DonationSection />

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              When you're ready, we're here.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              There's no pressure and no timeline. Whether you need someone to talk to,
              help with tuition, or connection to resources — reach out whenever it feels right.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="w-full rounded-full px-8 sm:w-auto">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full rounded-full px-8 sm:w-auto">
                <a href="https://gofund.me/79a4084e5" target="_blank" rel="noopener noreferrer">
                  <Heart className="mr-1 h-4 w-4" />
                  Support Our Mission
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
