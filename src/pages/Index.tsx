import { Link } from "react-router-dom";
import { Heart, Shield, GraduationCap, Users, BookOpen, HandHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import ProvinceResources from "@/components/ProvinceResources";
import DonationSection from "@/components/DonationSection";
import { GOFUNDME_CAMPAIGN_URL } from "@/lib/donate";
import peaceSign from "@/assets/peace-sign.jpg";
import whiteRibbon from "@/assets/white-ribbon.jpg";

const helpCards = [
  {
    icon: GraduationCap,
    title: "Tuition & education",
    description:
      "We help cover tuition costs and connect survivors with educational opportunities so they can rebuild and thrive.",
  },
  {
    icon: Users,
    title: "Resource connection",
    description:
      "We connect you with shelters, counsellors, legal aid, and community services tailored to your situation.",
  },
  {
    icon: Shield,
    title: "Safety & support",
    description:
      "From safety planning to emotional support, we walk alongside you — at your pace, on your terms.",
  },
  {
    icon: BookOpen,
    title: "Youth programs",
    description:
      "Dedicated support for young people navigating difficult situations at home, school, or in relationships.",
  },
  {
    icon: Heart,
    title: "Survivor advocacy",
    description:
      "We stand with survivors of domestic abuse and assault, amplifying their voices and fighting for change.",
  },
  {
    icon: HandHeart,
    title: "Ongoing care",
    description:
      "We stay with you through the journey — follow-ups, check-ins, and continued care when you want it.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero — calm nonprofit layout, white field */}
      <section className="border-b border-border bg-background py-16 sm:py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Canadian nonprofit</p>
            <p className="mt-5 font-serif text-lg font-medium leading-snug text-primary sm:text-xl md:text-2xl">
              Asking questions has never been this easy.
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Success within reach
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              COVER supports survivors of domestic abuse and assault with education funding, trusted referrals, and
              confidential follow-up — so no one has to figure it out alone.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button asChild size="lg" className="w-full rounded-md px-8 sm:w-auto">
                <Link to="/contact">Get support</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full rounded-md border-border px-8 sm:w-auto">
                <a href="#our-story">
                  About COVER
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our story — former About destination */}
      <section id="our-story" className="scroll-mt-24 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14">
            <FadeIn>
              <div>
                <h2 className="font-serif text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                  Who we are
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  COVER is a Montreal-based nonprofit working to reduce domestic violence and empower survivors through
                  access to education and care. We believe education is one of the strongest paths to independence —
                  and we help make that path reachable.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Whether you are a student, a newcomer, or someone who needs to know you are not alone, you can reach
                  out on your own terms. No judgment and no pressure — just clear information and real people.
                </p>
                <Button asChild variant="link" className="mt-2 h-auto px-0 text-primary">
                  <Link to="/contact">
                    Talk to our team <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <figure className="overflow-hidden rounded-md border border-border shadow-sm">
                <img src={peaceSign} alt="Community support at COVER" className="h-full w-full object-cover" loading="lazy" />
              </figure>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-cream py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">What we do</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From tuition support to local referrals, here is how we help survivors rebuild at a pace that feels
                safe.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {helpCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.06}>
                <Card className="h-full border border-border bg-background shadow-none transition-shadow hover:shadow-md">
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-muted/50 text-primary">
                      <card.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14">
            <FadeIn>
              <figure className="overflow-hidden rounded-md border border-border shadow-sm">
                <img
                  src={whiteRibbon}
                  alt="White ribbon — standing against violence"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div>
                <h2 className="font-serif text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                  Your story matters
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Everyone who reaches out is met with compassion, confidentiality, and respect. We know how hard it can
                  be to ask for help — and reaching out is already a brave step.
                </p>
                <blockquote className="mt-6 border-l-2 border-primary/40 pl-5 text-sm leading-relaxed text-foreground">
                  You do not have to have it all figured out. You only have to take the first step — we can walk with
                  you from there.
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ProvinceResources />

      <DonationSection />

      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">When you are ready</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              There is no timeline that fits everyone. Whether you need someone to listen, help with school costs, or a
              connection to services, you can reach out whenever it feels right.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="w-full rounded-md px-8 sm:w-auto">
                <Link to="/contact">Contact us</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full rounded-md border-border px-8 sm:w-auto" asChild>
                <a href={GOFUNDME_CAMPAIGN_URL} target="_blank" rel="noopener noreferrer">
                  <Heart className="mr-2 h-4 w-4" aria-hidden />
                  GoFundMe campaign
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
