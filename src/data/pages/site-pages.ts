import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About PATLABOR the Case Files Wiki: an unofficial fan reference built from the live Steam store page and SteamDB, with facts dated to the research date.",
    summary:
      "What PATLABOR the Case Files Wiki covers, how facts are sourced, and what readers should expect.",
    hero: {
      eyebrow: "About",
      subtitle:
        "An unofficial fan reference built from the Steam store page, SteamDB metadata, and GOOD SMILE COMPANY publisher announcements.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial fan reference hub for PATLABOR the Case Files (Steam AppID 3275400). Every fact is dated, sourced to the Steam store page or SteamDB, and re-verified against the live store at the research date.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Research date", value: "2026-09-16" },
      { label: "Source rule", value: "Steam store + SteamDB + GOOD SMILE COMPANY press" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help en-US players decide whether PATLABOR the Case Files is for them, when and where to play it on PC Steam, and how the new game fits the long-running Mobile Police Patlabor franchise. The hub collects launch-day pages players most often search for: release date, PS5 status, gameplay, trailer, reviews, Steam page, system requirements, and franchise context.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Use only the Steam store page for AppID 3275400, SteamDB metadata, and GOOD SMILE COMPANY publisher announcements to set current-game hard facts (release date, platform, modes, languages). Legacy franchise material (the 1988–1989 Mobile Police Patlabor anime, OVAs, films, manga, prior games) is treated as franchise context only and never used to set current-game facts. Any unannounced item (PS5 release, DLC plans, post-launch roadmap) is written as a dated not-confirmed statement rather than as a placeholder or TBD.",
      },
      {
        id: "editorial",
        type: "prose",
        heading: "Editorial rules",
        body:
          "All facts are dated to the research date 2026-09-16. No speculation, no fanfic conclusions, no copy from other fan sites. The site never uses the publisher wordmark, Headgear marks, GOOD SMILE COMPANY marks, or Chime Corporation marks; brand presentation relies on the text brand mark and the approved theme palette only.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["fixed-patlabor-overview-en-US", "contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact PATLABOR the Case Files Wiki for corrections, official source updates, and editorial feedback.",
    summary:
      "How to send corrections, official source links, and editorial feedback to the PATLABOR the Case Files Wiki.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Send corrections, official source links, and editorial feedback to the maintainers of PATLABOR the Case Files Wiki.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Send corrections and source updates to support@patlaborthecasefiles.wiki. Include the official source URL and the page that needs to be updated.",
    keyFacts: [
      { label: "Email", value: "support@patlaborthecasefiles.wiki" },
      { label: "Primary use", value: "Corrections and source links" },
      { label: "Response window", value: "Best-effort, no SLA" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Email",
        body:
          "Email support@patlaborthecasefiles.wiki for corrections, source links, or editorial feedback. The address is also published as a Cloudflare Email Routing forwarder under the same domain.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "If you spot an out-of-date fact, include the page URL, the official source (Steam store page link, SteamDB snapshot link, or publisher press release), and the corrected value. Do not send private account information or game account credentials.",
      },
      {
        id: "no-guarantees",
        type: "prose",
        heading: "Response expectations",
        body:
          "The maintainers respond on a best-effort basis. There is no formal SLA, and not every message receives a one-to-one reply. Confirmed corrections are folded into the next content refresh, dated to the refresh date, and visible in the GROWTH_LOG.md of the site repository.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for PATLABOR the Case Files Wiki: Google Analytics 4 measurement data, Cloudflare Email Routing, and the trust-page contact method.",
    summary:
      "What data PATLABOR the Case Files Wiki collects, why it is used, and how visitors can reach the maintainers.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "What data this site collects, why it is used, and how to reach the maintainers.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "PATLABOR the Case Files Wiki uses Google Analytics 4 for aggregate traffic measurement and Cloudflare Email Routing for the support@patlaborthecasefiles.wiki forwarder. The site does not run user accounts, comments, payments, or third-party tracking beyond the analytics measurement.",
    keyFacts: [
      { label: "Analytics", value: "Google Analytics 4 (aggregate, no PII)" },
      { label: "Email", value: "Cloudflare Email Routing forwarder" },
      { label: "Ads", value: "Not enabled at launch" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "Google Analytics 4 measures aggregate traffic patterns for the launch-day reference pages (release date, PS5 status, gameplay, trailer, reviews, Steam, system requirements, franchise). GA4 is configured without advertising features and without Personally Identifiable Information tracking. The Cloudflare static-asset layer records standard request metadata for abuse mitigation.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "Messages sent to support@patlaborthecasefiles.wiki are received by the maintainers via Cloudflare Email Routing. Do not include sensitive personal information in contact messages; only the details required to verify the source are needed for a correction.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "This policy is reviewed whenever the analytics configuration, hosting provider, or contact method changes. The last-reviewed date at the top of the page reflects the most recent review.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for PATLABOR the Case Files Wiki: unofficial status, informational use, and acceptable use.",
    summary:
      "Unofficial-status disclaimer, informational-use scope, and acceptable-use rules for PATLABOR the Case Files Wiki.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Unofficial status, informational use, and acceptable-use rules for the launch-day reference.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "PATLABOR the Case Files Wiki is an unofficial fan reference. Information may change as official sources update; always verify on the Steam store page or SteamDB before purchase.",
    keyFacts: [
      { label: "Use", value: "Informational reference content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Last reviewed", value: "2026-09-16" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "PATLABOR the Case Files Wiki is not affiliated with GOOD SMILE COMPANY, Chime Corporation, Bandai Namco Filmworks, the Headgear creative collective, the original Mobile Police Patlabor anime production committee, or any platform holder. Trademarks and game content referenced on this site are the property of their respective owners.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated by the publisher or the Steam store. Use the Steam store page for AppID 3275400 and the SteamDB metadata snapshot as the authoritative sources for release date, platform, languages, modes, and system requirements before any purchase decision.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any contact channel. The maintainers reserve the right to block abusive request sources at the Cloudflare edge without notice.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-16",
  },
];