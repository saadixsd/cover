import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
import { CONTACT_EMAIL } from "@/lib/contact";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this confidential?",
    a: "Yes. Everything you share through our form is kept confidential and protected under Canadian privacy laws (PIPEDA and applicable provincial legislation).",
  },
  {
    q: "Who can contact COVER?",
    a: "Anyone in Canada who needs support or someone to talk to — including students and non-students alike.",
  },
  {
    q: "Is there a cost?",
    a: "No — our services are completely free.",
  },
  {
    q: "What happens when I reach out?",
    a: "A member of our team will review your message and respond as soon as we can. We'll never pressure you or share your information without your consent.",
  },
  {
    q: "Can I remain anonymous?",
    a: `Your name is optional, but we ask for an email address on the contact form so our team can reply. If you need a safer option, use an email you're comfortable checking or email us directly at ${CONTACT_EMAIL} from an account that works for you.`,
  },
  {
    q: "Can I delete my messages?",
    a: "Yes. If you contact us and request that your messages be deleted, we will do so promptly.",
  },
  {
    q: "What if I'm in immediate danger?",
    a: "If you are in immediate danger, please call 911 in Canada. COVER is not a crisis hotline or emergency service. For crisis support, you can also contact Talk Suicide Canada at 1-833-456-4566 (24/7).",
  },
];

const FAQ = () => (
  <Layout>
    <PageHero
      eyebrow="FAQ"
      title="Questions,"
      highlight="answered."
      description="We want you to feel comfortable and informed. Here are answers to some common questions."
    />
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-background px-5 shadow-sm transition-all hover:shadow-md data-[state=open]:shadow-elegant"
              >
                <AccordionTrigger className="text-left font-sans text-base font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default FAQ;
