import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const Privacy = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <FadeIn>
          <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Effective as of January 2026</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="font-serif text-xl font-semibold text-foreground">Privacy & Personal Information</h2>
            <p>
              At COVER, your privacy and safety are our highest priority. We collect only the minimum information
              necessary to respond to your inquiries: your message, an email address so we can reply, and your name
              if you choose to share it.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground">What We Do Not Do</h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>Share your information with any third parties without your consent</li>
              <li>Store personal details longer than necessary</li>
              <li>Track or sell your data</li>
            </ul>

            <h2 className="font-serif text-xl font-semibold text-foreground">Data Storage & Security</h2>
            <p>
              Your information is stored securely on encrypted servers in Canada and protected in accordance with
              Canadian federal privacy laws (PIPEDA) and applicable provincial privacy laws, including Loi 25 in Quebec.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground">Data Deletion</h2>
            <p>
              If you submit a message and ask us to delete it, we will do so promptly upon request. Contact us at{" "}
              <span className="text-foreground">privacy@covercanada.org</span> for any privacy-related inquiries.
            </p>

            <h2 className="font-serif text-xl font-semibold text-foreground">Updates</h2>
            <p>This policy may be updated occasionally. We will note the effective date at the top of this page.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Privacy;
