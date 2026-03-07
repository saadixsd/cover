import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const About = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <FadeIn>
          <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">About COVER</h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="font-serif text-xl font-semibold text-foreground">Our Mission</h2>
            <p>
              COVER is a registered Canadian nonprofit dedicated to helping students and individuals affected by
              domestic conflict, relationship harm, or situations that feel unsafe at home. We are committed to
              confidentiality, compassion, and dignity in every interaction.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10">Who We Support</h2>
            <p>We support people coast-to-coast, including:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Students living on or off campus</li>
              <li>Newcomers to Canada</li>
              <li>Individuals facing unsafe or difficult home environments</li>
              <li>Residents of all provinces and territories</li>
            </ul>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10">Our Values</h2>
            <p>
              Our approach is grounded in respect, safety, and support — not judgment. We believe everyone deserves to
              feel safe, heard, and supported. Wherever you are in Canada, we're here for you.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground mt-10">Confidentiality</h2>
            <p>
              Your privacy matters deeply to us. All communications with COVER are handled with strict confidentiality,
              in accordance with Canadian privacy laws. We never share your information without your explicit consent.
            </p>

            <div className="mt-10 rounded-xl bg-soft-rose p-6">
              <p className="text-sm text-foreground">
                COVER is a registered Canadian nonprofit organization. We operate with transparency, accountability, and
                a deep commitment to the people we serve.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default About;
