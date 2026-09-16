import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "media-hero" },
  h1: "PATLABOR the Case Files",
  seoTitle:
    "PATLABOR the Case Files: Steam Hub for the New Mecha Game",
  metaDescription:
    "PATLABOR the Case Files hub covers the Steam launch, Windows-only platform, PS5 status, gameplay modes, official trailer, and franchise context for en-US players.",
  summary:
    "Launch-day reference hub for PATLABOR the Case Files (Steam AppID 3275400): release date, PS5 status, gameplay, trailer, reviews, Steam page, system requirements, and franchise context.",
  hero: {
    eyebrow: "Launch-day reference",
    subtitle: site.tagline,
    ctas: [
      { label: "View on Steam", href: "https://store.steampowered.com/app/3275400/PATLABOR_the_Case_Files/" },
      { label: "Read the overview", href: "/patlabor-the-case-files/" },
    ],
  },
  quickAnswer:
    "PATLABOR the Case Files is a 3D mecha action game developed by Chime Corporation and published by GOOD SMILE COMPANY. It launched on Steam on 2026-09-16 for Windows 64-bit, with full controller support, single-player Main Missions, Another Side Missions, Simulator Mode and over 20 playable Labors. This hub collects the launch-day pages en-US players most often search for.",
  keyFacts: [
    { label: "Release date", value: "2026-09-16 (Steam AppID 3275400)" },
    { label: "Developer", value: "Chime Corporation" },
    { label: "Publisher", value: "GOOD SMILE COMPANY" },
    { label: "Platform", value: "Windows 64-bit only" },
  ],
  modules: [
    {
      id: "identity-status",
      type: "entity-grid",
      heading: "Identity & Status",
      items: [
        {
          title: "Overview",
          summary: "Developer, publisher, platform, languages, and franchise context.",
          href: "/patlabor-the-case-files/",
        },
        {
          title: "Release date",
          summary: "Steam release date 2026-09-16 with sources.",
          href: "/patlabor-the-case-files/release-date/",
        },
        {
          title: "PS5 status",
          summary: "Not confirmed by the publisher as of 2026-09-16.",
          href: "/patlabor-the-case-files/ps5-release-date/",
        },
        {
          title: "Franchise context",
          summary: "How the new game fits the Mobile Police Patlabor franchise.",
          href: "/patlabor-the-case-files/franchise/",
        },
      ],
    },
    {
      id: "play-buy",
      type: "entity-grid",
      heading: "Play & Buy",
      items: [
        {
          title: "Gameplay",
          summary: "Main Missions, Another Side, Simulator Mode, and 20+ Labors.",
          href: "/patlabor-the-case-files/gameplay/",
        },
        {
          title: "Trailer",
          summary: "Official GOOD SMILE COMPANY trailer and Steam embed.",
          href: "/patlabor-the-case-files/trailer/",
        },
        {
          title: "Reviews",
          summary: "Launch-day reviews and Steam Community Hub user ratings.",
          href: "/patlabor-the-case-files/reviews/",
        },
        {
          title: "Steam",
          summary: "AppID 3275400, languages, edition, and price snapshot.",
          href: "/patlabor-the-case-files/steam/",
        },
        {
          title: "System requirements",
          summary: "Minimum and recommended PC specs for Windows 64-bit.",
          href: "/patlabor-the-case-files/system-requirements/",
        },
      ],
    },
  ],
  faqIds: ["what-is-patlabor-the-case-files", "when-did-it-release", "is-it-on-ps5", "modes-and-labors"],
  relatedPageIds: [
    "fixed-patlabor-overview-en-US",
    "fixed-patlabor-release-date-en-US",
    "fixed-patlabor-ps5-status-en-US",
    "fixed-patlabor-gameplay-en-US",
    "fixed-patlabor-steam-en-US",
    "fixed-patlabor-system-requirements-en-US",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-16",
};