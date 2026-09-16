import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  // Identity & Status cluster
  { href: "/patlabor-the-case-files/", labels: { "en-US": "Overview" } },
  { href: "/patlabor-the-case-files/release-date/", labels: { "en-US": "Release Date" } },
  { href: "/patlabor-the-case-files/ps5-release-date/", labels: { "en-US": "PS5 Status" } },
  { href: "/patlabor-the-case-files/franchise/", labels: { "en-US": "Franchise" } },
  // Play & Buy cluster
  { href: "/patlabor-the-case-files/gameplay/", labels: { "en-US": "Gameplay" } },
  { href: "/patlabor-the-case-files/steam/", labels: { "en-US": "Steam" } },
  { href: "/patlabor-the-case-files/system-requirements/", labels: { "en-US": "System Requirements" } },
  { href: "/patlabor-the-case-files/trailer/", labels: { "en-US": "Trailer" } },
  { href: "/patlabor-the-case-files/reviews/", labels: { "en-US": "Reviews" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}