import { Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const GOFUNDME_URL = "https://gofund.me/79a4084e5";

const DonationSection = () => {
  return (
    <section id="donate" className="bg-soft-rose py-20 md:py-24">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
            Help Us Help Others
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Your generosity helps COVER provide tuition support, connect survivors with resources,
            and offer free, confidential care to those who need it most. Every dollar makes a difference.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="w-full rounded-full px-8 gap-2 sm:w-auto" asChild>
              <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
                <Heart className="h-4 w-4" />
                Donate Now
              </a>
            </Button>

            <Button variant="outline" size="lg" className="w-full rounded-full px-8 gap-2 sm:w-auto" asChild>
              <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                GoFundMe Campaign
              </a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            COVER is a registered Canadian nonprofit. Donations may be eligible for a tax receipt.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default DonationSection;
