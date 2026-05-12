/** Primary site navigation — shared by header and footer. */
export const MAIN_NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/#our-story", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function isMainNavActive(pathname: string, hash: string, to: string): boolean {
  if (to === "/#our-story") return pathname === "/" && hash === "#our-story";
  if (to === "/") return pathname === "/" && hash !== "#our-story";
  return pathname === to;
}
