import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const Terms = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <FadeIn>
          <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Terms of Use</h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              COVER provides information and referral support for individuals affected by unsafe or harmful home
              environments.
            </p>

            <div className="rounded-xl border border-border bg-soft-rose p-6">
              <p className="text-sm text-foreground font-medium">
                Important: COVER is not a crisis hotline. If you are in immediate danger, please call 911 or your local
                emergency number.
              </p>
            </div>

            <p>
              By using this website, you agree that COVER is not responsible for outcomes related to your use of
              information on this site. We strive for accuracy and safety, but we do not guarantee responses or services.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground">Use of Website</h2>
            <p>
              This website and its content are provided for informational purposes only. You may use this site for
              personal, non-commercial purposes in accordance with these terms.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground">Limitation of Liability</h2>
            <p>
              COVER, its volunteers, and affiliates shall not be liable for any direct, indirect, incidental, or
              consequential damages arising from the use of this website or the information provided herein.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground">Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the website constitutes acceptance of the
              updated terms.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Terms;
