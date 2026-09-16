import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "PATLABOR the Case Files Wiki",
  brandMark: "PCF",
  gameName: "PATLABOR the Case Files",
  domain: "patlaborthecasefiles.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://patlaborthecasefiles.wiki").replace(/\/$/, ""),
  description:
    "Launch-day en-US reference site for PATLABOR the Case Files (Steam AppID 3275400), covering release date, PS5 status, gameplay, trailer, reviews, Steam store, system requirements, and franchise context.",
  tagline: "PATLABOR the Case Files launch-day reference: release date, gameplay, reviews, and franchise context.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "PATLABOR the Case Files Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "PATLABOR the Case Files on Steam",
      href: "https://store.steampowered.com/app/3275400/PATLABOR_the_Case_Files/",
      description: "Official Steam store page for PATLABOR the Case Files (AppID 3275400) — release date, system requirements, screenshots, and store media.",
    },
  ],
  disclaimer:
    "PATLABOR the Case Files Wiki is an unofficial fan reference built from the official Steam store description, SteamDB metadata, and publisher announcements. Current-game facts come from the Steam store page and SteamDB on research date 2026-09-16; unannounced details are labeled as such.",
};
