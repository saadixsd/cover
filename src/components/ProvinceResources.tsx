import { useState } from "react";
import { MapPin, Phone, ExternalLink, Shield, Scale, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { provinces, nationalResources, type ProvinceResource } from "@/data/provinceResources";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/FadeIn";

const ProvinceResources = () => {
  const [selected, setSelected] = useState<ProvinceResource | null>(null);

  const handleSelect = (code: string) => {
    const province = provinces.find((p) => p.code === code) || null;
    setSelected(province);
  };

  return (
    <section className="bg-cream py-20">
      <div className="container mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Find Support Near You
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Select your Montreal area, borough, or neighbouring city to see local resources, helplines, and support nearby.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-8 max-w-sm">
            <Select onValueChange={handleSelect}>
              <SelectTrigger className="rounded-xl border-border bg-background text-base">
                <SelectValue placeholder="Choose your area or borough" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((p) => (
                  <SelectItem key={p.code} value={p.code}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </FadeIn>

        {selected && (
          <FadeIn key={selected.code}>
            <div className="mt-10 space-y-4">
              <h3 className="text-center font-serif text-xl font-semibold text-foreground">
                Resources in {selected.name}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Crisis Line */}
                <Card className="border-none bg-background shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{selected.crisis}</p>
                      <a href={`tel:${selected.crisisPhone.replace(/\D/g, "")}`} className="text-sm text-primary hover:underline">
                        {selected.crisisPhone}
                      </a>
                      <p className="mt-1 text-xs text-muted-foreground">24/7 Crisis Support</p>
                    </div>
                  </CardContent>
                </Card>

                {/* DV Helpline */}
                {selected.dvHelpline && (
                  <Card className="border-none bg-background shadow-sm">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{selected.dvHelpline}</p>
                        <a href={`tel:${selected.dvPhone?.replace(/\D/g, "")}`} className="text-sm text-primary hover:underline">
                          {selected.dvPhone}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Government Link */}
                <Card className="border-none bg-background shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{selected.govLabel}</p>
                      <a href={selected.govLink} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline break-all">
                        Visit Government Site →
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Legal Aid */}
                {selected.legalAid && selected.legalAidLink && (
                  <Card className="border-none bg-background shadow-sm">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                        <Scale className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{selected.legalAid}</p>
                        <a href={selected.legalAidLink} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          Get Legal Help →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Additional Resources */}
                {selected.additionalResources.map((r) => (
                  <Card key={r.label} className="border-none bg-background shadow-sm">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                        <Home className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{r.label}</p>
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          Learn More →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* National Resources */}
        <FadeIn delay={0.2}>
          <div className="mt-14">
            <h3 className="text-center font-serif text-lg font-semibold text-foreground">
              National Resources
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {nationalResources.map((r) => (
                <a
                  key={r.label}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{r.label}</p>
                    {"phone" in r && r.phone && (
                      <p className="text-xs text-muted-foreground">{r.phone}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/resources"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Browse our full directory of organizations →
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProvinceResources;
