import { useMemo, useState } from "react";
import { Search, MapPin, Phone, Mail, ExternalLink, X, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { organizations } from "@/data/organizations";

const Resources = () => {
  const [query, setQuery] = useState("");
  const [activeLocations, setActiveLocations] = useState<string[]>([]);
  const [activeTypes, setActiveTypes] = useState<string[]>([]);

  const groupLocation = (loc: string) => {
    if (loc.startsWith("Montreal") || loc === "Rivière-des-Prairies") return "Montreal area";
    if (loc === "Laval") return "Laval";
    if (loc === "Longueuil") return "Longueuil";
    return "Quebec (province-wide)";
  };

  const groupType = (type: string) => {
    const t = type.toLowerCase();
    if (t.includes("shelter") || t.includes("housing")) return "Shelter & Housing";
    if (t.includes("legal")) return "Legal support";
    if (t.includes("help line") || t.includes("referral")) return "Helpline & Referral";
    if (t.includes("sexual") || t.includes("abuse")) return "Sexual violence support";
    if (t.includes("educat") || t.includes("training")) return "Education & Training";
    return "Support services";
  };

  const allLocations = useMemo(
    () => Array.from(new Set(organizations.map((o) => groupLocation(o.location)))).sort(),
    [],
  );
  const allTypes = useMemo(
    () => Array.from(new Set(organizations.map((o) => groupType(o.type)))).sort(),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return organizations.filter((o) => {
      if (activeLocations.length && !activeLocations.includes(groupLocation(o.location))) return false;
      if (activeTypes.length && !activeTypes.includes(groupType(o.type))) return false;
      if (!q) return true;
      const haystack = [o.name, o.type, o.location, ...o.tags].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query, activeLocations, activeTypes]);

  const toggle = (list: string[], setter: (v: string[]) => void, value: string) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const clearAll = () => {
    setQuery("");
    setActiveLocations([]);
    setActiveTypes([]);
  };

  const hasFilters = query || activeLocations.length || activeTypes.length;

  return (
    <Layout>
      <section className="bg-cream py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="text-center">
              <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Find Support
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                A directory of Quebec-based organizations offering shelter, support, legal help, and safe spaces. Search or filter to find what fits your situation.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mx-auto mt-6 flex items-start gap-3 rounded-xl border border-border bg-background/60 p-4 text-sm text-muted-foreground md:max-w-2xl">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p>
                If you are in immediate danger, call <strong className="text-foreground">911</strong>. This directory is informational and is not a crisis hotline.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, type, tag, or location..."
                  className="rounded-xl border-border bg-background pl-10 text-base"
                  aria-label="Search organizations"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 space-y-3">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Location</p>
                <div className="flex flex-wrap gap-2">
                  {allLocations.map((loc) => {
                    const active = activeLocations.includes(loc);
                    return (
                      <button
                        key={loc}
                        onClick={() => toggle(activeLocations, setActiveLocations, loc)}
                        className={
                          "rounded-full border px-3 py-1 text-xs font-medium transition-colors " +
                          (active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary")
                        }
                      >
                        {loc}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Type of support</p>
                <div className="flex flex-wrap gap-2">
                  {allTypes.map((t) => {
                    const active = activeTypes.includes(t);
                    return (
                      <button
                        key={t}
                        onClick={() => toggle(activeTypes, setActiveTypes, t)}
                        className={
                          "rounded-full border px-3 py-1 text-xs font-medium transition-colors " +
                          (active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary")
                        }
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {organizations.length} organizations
            </p>
            {hasFilters && (
              <button
                onClick={clearAll}
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                <X className="h-3 w-3" /> Clear filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <FadeIn>
              <div className="mt-10 rounded-xl border border-dashed border-border bg-background/60 p-10 text-center">
                <p className="text-sm text-muted-foreground">
                  No organizations match your search. Try clearing filters or using a different term.
                </p>
              </div>
            </FadeIn>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {filtered.map((o, i) => (
                <FadeIn key={o.name} delay={Math.min(i * 0.02, 0.2)}>
                  <Card className="h-full border-none bg-background shadow-sm transition-shadow hover:shadow-md">
                    <CardContent className="flex h-full flex-col gap-3 p-6">
                      <div>
                        <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
                          {o.name}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground">{o.type}</p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        <span>{o.location}</span>
                      </div>

                      {o.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {o.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-accent text-[11px] font-normal text-foreground/80"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto space-y-1.5 pt-2">
                        {o.phone && (
                          <a
                            href={`tel:${o.phone.replace(/[^\d+]/g, "")}`}
                            className="flex items-start gap-2 text-xs text-primary hover:underline"
                          >
                            <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            <span>{o.phone}</span>
                          </a>
                        )}
                        {o.email && (
                          <a
                            href={`mailto:${o.email}`}
                            className="flex items-center gap-2 text-xs text-primary hover:underline"
                          >
                            <Mail className="h-3.5 w-3.5 shrink-0" />
                            <span className="truncate">{o.email}</span>
                          </a>
                        )}
                      </div>

                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-2 rounded-full"
                      >
                        <a href={o.website} target="_blank" rel="noopener noreferrer">
                          Visit website
                          <ExternalLink className="ml-1.5 h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Resources;