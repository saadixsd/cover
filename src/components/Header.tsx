import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAV_LINKS, isMainNavActive } from "@/lib/nav";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const hash = location.hash ?? "";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-11 max-w-5xl items-center justify-between px-3 sm:h-12 sm:px-6">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex shrink-0 items-center gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            COVER
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {MAIN_NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isMainNavActive(location.pathname, hash, link.to) ? "text-primary" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#donate"
            className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Heart className="h-3.5 w-3.5" />
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden sm:px-6">
          {MAIN_NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block py-2.5 text-sm font-medium transition-colors hover:text-primary",
                isMainNavActive(location.pathname, hash, link.to) ? "text-primary" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#donate"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
          >
            <Heart className="h-4 w-4" />
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
