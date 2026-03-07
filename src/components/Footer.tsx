import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">COVER 🍁</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Confidential support for students and individuals across Canada.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              A registered Canadian nonprofit organization.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Navigate</h4>
            <ul className="mt-2 space-y-1.5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-2 space-y-1.5">
              {[
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms of Use" },
                { to: "/accessibility", label: "Accessibility" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="mt-4 text-sm font-semibold text-foreground">Government Resources</h4>
            <ul className="mt-2 space-y-1.5">
              <li>
                <a href="https://www.canada.ca/en/public-health/services/health-promotion/stop-family-violence.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                  Stop Family Violence <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://www.justice.gc.ca/eng/cj-jp/fv-vf/index.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dept. of Justice <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Safety</h4>
            <a
              href="https://weather.gc.ca"
              className="mt-2 inline-block rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Quick Exit
            </a>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              For your safety, clear your browser history after visiting. Press{" "}
              <kbd className="rounded bg-muted px-1 py-0.5 font-mono text-xs">Ctrl+H</kbd> (or{" "}
              <kbd className="rounded bg-muted px-1 py-0.5 font-mono text-xs">⌘+Y</kbd> on Mac).
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} COVER. All rights reserved. Based in Canada 🍁
        </div>
      </div>
    </footer>
  );
};

export default Footer;
