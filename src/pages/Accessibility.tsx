import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const Accessibility = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <FadeIn>
          <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Accessibility Statement</h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              COVER is committed to making this website accessible to all users, including those with disabilities. We
              strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground">Our Commitment</h2>
            <p>We continuously work to improve the accessibility of our website by:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Using semantic HTML for clear structure and navigation</li>
              <li>Ensuring sufficient colour contrast throughout the site</li>
              <li>Providing text alternatives for meaningful images</li>
              <li>Making all interactive elements keyboard-accessible</li>
              <li>Designing responsive layouts for all screen sizes</li>
            </ul>

            <h2 className="font-serif text-xl font-semibold text-foreground">Need Help?</h2>
            <p>
              If you have difficulty accessing any part of this site or require alternative formats of content, please
              contact us at <span className="text-foreground">support@covercanada.org</span> and we will assist you.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Accessibility;
