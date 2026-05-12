import { Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { GOFUNDME_CAMPAIGN_URL } from "@/lib/donate";

const DonationSection = () => {
  return (
    <section id="donate" className="border-t border-border bg-muted/40 py-20 md:py-24">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background">
            <Heart className="h-5 w-5 text-primary" aria-hidden />
          </div>
          <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">Support the campaign</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Donations fund tuition support, resource connections, and confidential care. Every contribution helps us
            reach more people.
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button size="lg" className="w-full gap-2 rounded-md px-8 sm:w-auto" asChild>
              <a href={GOFUNDME_CAMPAIGN_URL} target="_blank" rel="noopener noreferrer">
                <Heart className="h-4 w-4" aria-hidden />
                Donate on GoFundMe
              </a>
            </Button>

            <Button variant="outline" size="lg" className="w-full gap-2 rounded-md border-border px-8 sm:w-auto" asChild>
              <a href={GOFUNDME_CAMPAIGN_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" aria-hidden />
                View campaign page
              </a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Opens our verified GoFundMe campaign in a new tab. COVER is a registered Canadian nonprofit; receipts may
            be available per campaign terms.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default DonationSection;
