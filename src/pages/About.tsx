import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import hopePeace from "@/assets/hope-peace.jpg";
import coverLogo from "@/assets/cover-logo.jpg";

const About = () => (
  <Layout>
    {/* Hero banner */}
    <section className="relative overflow-hidden bg-soft-rose py-16 md:py-24">
      <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-peach/30 blur-3xl" />
      <div className="container relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">About Us</span>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            We are COVER
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground leading-relaxed">
            A Montreal-based Canadian nonprofit standing with survivors of domestic abuse, assault,
            and unsafe situations — providing real support that goes far beyond a phone call.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src={coverLogo} alt="COVER logo and team" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">Our Mission</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Our mission is to reduce the rate of domestic violence and empower survivors through
                access to education. We believe education is one of the strongest paths to independence,
                stability, and a future free from harm — and we work to make that path reachable for
                the people who need it most.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Today, COVER focuses on awareness, connection to trusted resources, and walking
                alongside survivors with compassion and confidentiality. As our community grows and
                we secure more funding, we plan to expand into direct tuition and educational
                support — but we are not offering financial assistance at this time.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We are based in Montreal and currently focused on supporting our local community,
                with the goal of expanding across Quebec and Canada over time.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="bg-cream py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <FadeIn>
          <h2 className="font-serif text-2xl font-semibold text-foreground text-center md:text-3xl">
            What Makes COVER Different
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {[
            {
               title: "Education as Empowerment",
               text: "Education is at the heart of our mission. We're building toward direct tuition and educational support for survivors as funding grows — because rebuilding your life shouldn't mean giving up on your future.",
             },
             {
               title: "Resource Connection",
               text: "We connect you to shelters, counsellors, legal aid, and community services across Montreal and Quebec — matched to your situation.",
             },
             {
               title: "Youth Support",
               text: "Dedicated programs for young people navigating abuse, difficult home situations, or relationship harm — because every young person deserves safety.",
             },
             {
               title: "Ongoing Care",
               text: "We don't disappear after the first call. We follow up, check in, and stay with you through the journey for as long as you need.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="rounded-xl bg-background p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Who We Support */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <FadeIn>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">Who We Support</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                If you're going through something difficult, you belong here. We currently support people in
                Montreal and the surrounding area:
              </p>
              <ul className="mt-4 ml-1 space-y-3">
                {[
                  "Survivors of domestic abuse and assault",
                  "Students living on or off campus",
                  "Newcomers to Canada",
                  "Youth in unsafe or difficult home environments",
                  "Anyone who needs someone in their corner",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={hopePeace}
                alt="Hope and peace — COVER community"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Values & Confidentiality */}
    <section className="bg-soft-rose py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
            Our Promise to You
          </h2>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-left">
            <div className="rounded-xl bg-background p-6 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-foreground">Confidentiality</h3>
              <p className="mt-2 text-sm">
                Your privacy matters deeply. All communications with COVER are handled with strict confidentiality,
                in accordance with Canadian privacy laws. We never share your information without your explicit consent.
              </p>
            </div>
            <div className="rounded-xl bg-background p-6 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-foreground">No Judgment</h3>
              <p className="mt-2 text-sm">
                Our approach is grounded in respect, safety, and support. We believe everyone deserves to
                feel safe, heard, and valued — regardless of their background or circumstances.
              </p>
            </div>
            <div className="rounded-xl bg-background p-6 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-foreground">Canadian Values</h3>
              <p className="mt-2 text-sm">
                COVER is a Canadian nonprofit based in Montreal. We operate with transparency, accountability,
                and a deep commitment to the local community we serve — with the goal of growing our reach over time.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
            You don't have to do this alone.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you need trusted resources, guidance, or just someone to talk to — we're here.
            Take the first step whenever you're ready.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full rounded-full px-8 sm:w-auto">
              <Link to="/contact">Reach Out</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full rounded-full px-8 sm:w-auto">
              <Link to="/#donate">Support COVER</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default About;
