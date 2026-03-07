import { Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const DonationSection = () => {
  return (
    <section className="bg-soft-rose py-20">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
            Help Us Help Others
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Your generosity makes it possible for COVER to continue providing free, confidential support
            to those who need it most. Every contribution, no matter the size, makes a difference.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 gap-2"
              onClick={() => {
                // Stripe donation — placeholder until connected
                // Will be replaced with Stripe Checkout redirect
                window.open("#donate", "_self");
              }}
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 gap-2"
              onClick={() => {
                window.open("https://gofund.me/8355b5b82", "_blank");
              }}
            >
              <ExternalLink className="h-4 w-4" />
              GoFundMe Campaign
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
