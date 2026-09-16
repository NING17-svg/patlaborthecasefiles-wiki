import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Home / Overview cross-page FAQs
  {
    id: "what-is-patlabor-the-case-files",
    question: "What is PATLABOR the Case Files?",
    answer:
      "PATLABOR the Case Files is a 3D mecha action game from developer Chime Corporation and publisher GOOD SMILE COMPANY. It is the new Mobile Police Patlabor game and it launched on Steam on 2026-09-16.",
    pageIds: ["home", "fixed-patlabor-overview-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "when-did-it-release",
    question: "When did PATLABOR the Case Files release?",
    answer:
      "PATLABOR the Case Files released on Steam on 2026-09-16 in en-US. The release date is confirmed on the Steam store page for AppID 3275400.",
    pageIds: ["home", "fixed-patlabor-release-date-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-it-on-ps5",
    question: "Is PATLABOR the Case Files on PS5?",
    answer:
      "As of 2026-09-16 the Steam store lists Windows 64-bit only and GOOD SMILE COMPANY has not confirmed a PS5 release date. See the PS5 status page for the latest dated statement.",
    pageIds: ["home", "fixed-patlabor-ps5-status-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "modes-and-labors",
    question: "What modes and how many Labors are included?",
    answer:
      "PATLABOR the Case Files launches with Main Missions, Another Side Missions and Simulator Mode. The Steam store lists more than 20 playable Labors.",
    pageIds: ["home", "fixed-patlabor-gameplay-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Overview page FAQs
  {
    id: "is-this-the-new-patlabor-game",
    question: "Is this the new Mobile Police Patlabor game?",
    answer:
      "Yes. The Steam store page for AppID 3275400 names GOOD SMILE COMPANY as the publisher and credits Chime Corporation as the developer; the title is the new Mobile Police Patlabor game in the franchise.",
    pageIds: ["fixed-patlabor-overview-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "who-developed-and-published-it",
    question: "Who developed and published it?",
    answer:
      "Chime Corporation developed it and GOOD SMILE COMPANY published it, according to the Steam store page for AppID 3275400.",
    pageIds: ["fixed-patlabor-overview-en-US", "fixed-patlabor-franchise-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-platform-is-it-on",
    question: "What platform is it on?",
    answer:
      "It is on Windows 64-bit only. The Steam store lists no macOS, Linux or console versions as of 2026-09-16.",
    pageIds: ["fixed-patlabor-overview-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "languages-supported",
    question: "Which languages does it support?",
    answer:
      "The Steam store lists Japanese, English, Simplified Chinese, Traditional Chinese and Korean for interface, audio and subtitles.",
    pageIds: ["fixed-patlabor-overview-en-US", "fixed-patlabor-steam-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Release date page FAQs
  {
    id: "when-is-the-patlabor-release-date",
    question: "When is the PATLABOR the Case Files release date?",
    answer:
      "The PATLABOR the Case Files release date is 2026-09-16 per the Steam store page and SteamDB entry for AppID 3275400.",
    pageIds: ["fixed-patlabor-release-date-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-the-game-out-now",
    question: "Is the game out now on Steam?",
    answer:
      "Yes. The launch on 2026-09-16 is recorded on the Steam store page for AppID 3275400.",
    pageIds: ["fixed-patlabor-release-date-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-can-i-confirm-release-date",
    question: "Where can I confirm the PATLABOR the Case Files release date?",
    answer:
      "It is shown on the Steam store page for AppID 3275400 and cross-checked against the SteamDB metadata for the same AppID.",
    pageIds: ["fixed-patlabor-release-date-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // PS5 status page FAQs
  {
    id: "is-ps5-confirmed",
    question: "Is PATLABOR the Case Files PS5 confirmed?",
    answer:
      "As of 2026-09-16 the Steam store lists Windows 64-bit only. No PATLABOR the Case Files PS5 release date has been confirmed by GOOD SMILE COMPANY.",
    pageIds: ["fixed-patlabor-ps5-status-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "when-is-ps5-release-date",
    question: "When is the PS5 release date?",
    answer:
      "Not announced as of 2026-09-16. The PATLABOR the Case Files PS5 release date is unconfirmed.",
    pageIds: ["fixed-patlabor-ps5-status-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "will-ps5-version-happen",
    question: "Will a PS5 version happen?",
    answer:
      "GOOD SMILE COMPANY has not announced a console version as of 2026-09-16. Future confirmation requires a publisher statement or a Steam store update.",
    pageIds: ["fixed-patlabor-ps5-status-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Gameplay page FAQs
  {
    id: "what-modes-does-the-game-have",
    question: "What modes does the game have?",
    answer:
      "It has three launch-day modes: Main Missions, Another Side Missions and Simulator Mode, per the Steam store page for AppID 3275400.",
    pageIds: ["fixed-patlabor-gameplay-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-many-playable-labors",
    question: "How many playable Labors are in the roster?",
    answer:
      "The Steam store description lists more than 20 playable Labors across the three launch-day modes.",
    pageIds: ["fixed-patlabor-gameplay-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "controller-support",
    question: "Does the game support controllers?",
    answer:
      "Yes. The Steam store page lists full controller support on Windows 64-bit.",
    pageIds: ["fixed-patlabor-gameplay-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "single-player-or-multiplayer",
    question: "Is the game single-player or multiplayer?",
    answer:
      "The game is single-player. The Steam store page lists single-player with full controller support.",
    pageIds: ["fixed-patlabor-gameplay-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Trailer page FAQs
  {
    id: "where-can-i-watch-official-trailer",
    question: "Where can I watch the official PATLABOR the Case Files trailer?",
    answer:
      "Watch it on the Steam store page for AppID 3275400 or on the GOOD SMILE COMPANY YouTube channel. Both host the same publisher-uploaded master file.",
    pageIds: ["fixed-patlabor-trailer-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-youtube-trailer-official",
    question: "Is the PATLABOR the Case Files trailer on YouTube the official one?",
    answer:
      "Only the GOOD SMILE COMPANY channel upload is official. Other YouTube copies of the trailer are fan reuploads and are listed here as community references, not as a current-game fact.",
    pageIds: ["fixed-patlabor-trailer-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "real-gameplay-or-cinematic",
    question: "Does the trailer show real gameplay or just cinematic cutscenes?",
    answer:
      "The launch trailer mixes in-engine footage of Main Missions and Another Side combat with cinematic shots. The gameplay segments use the same third-person mecha action camera and full controller support that the Steam store describes.",
    pageIds: ["fixed-patlabor-trailer-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "trailer-length",
    question: "How long is the PATLABOR the Case Files trailer?",
    answer:
      "The launch trailer is a short-form publisher cut designed to sit next to the Steam buy button; the exact runtime is recorded on the GOOD SMILE COMPANY YouTube upload page. The Steam page may also host a longer version if GOOD SMILE COMPANY uploads separate launch-day and overview cuts.",
    pageIds: ["fixed-patlabor-trailer-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Reviews page FAQs
  {
    id: "what-do-reviews-say",
    question: "What do PATLABOR the Case Files reviews say?",
    answer:
      "As of the 2026-09-16 research date, no major Western critic review has been published in English. The Steam Community Hub user rating is the first available signal, and it should be treated as a launch-day snapshot rather than a final verdict.",
    pageIds: ["fixed-patlabor-reviews-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-can-i-read-critic-reviews",
    question: "Where can I read PATLABOR the Case Files critic reviews?",
    answer:
      "Watch the major Western gaming outlets (IGN, Gematsu, Anime News Network) and the English-side Japanese press (Famitsu English, Siliconera) for coverage in the first 24 to 72 hours after launch. Until a live review URL is opened and the score recorded, this page does not quote a critic score.",
    pageIds: ["fixed-patlabor-reviews-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-user-rating",
    question: "What is the PATLABOR the Case Files Steam user rating?",
    answer:
      "The user-rating aggregate on the Steam store page (AppID 3275400) updates continuously after launch. The exact number on 2026-09-16 is a launch-day snapshot; check the live Steam store or Steam Community Hub for the current value.",
    pageIds: ["fixed-patlabor-reviews-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "patlabor-reddit-reviews",
    question: "Are there any Patlabor the Case Files Reddit reviews?",
    answer:
      "The Steam Community Hub is the primary community review venue; Reddit threads about the game exist for launch-day discussion but are community signal, not critic reviews, and are not treated as a primary review source.",
    pageIds: ["fixed-patlabor-reviews-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "should-i-wait-for-reviews",
    question: "Should I wait for PATLABOR the Case Files reviews before buying?",
    answer:
      "If you trust the Steam store description (Chime Corporation developer, GOOD SMILE COMPANY publisher, 20+ Labors, full controller support, single-player campaign), the launch-day store page and gameplay page give enough to decide. If you want a critic score, wait until 24 to 72 hours after launch for the first round of English-language reviews.",
    pageIds: ["fixed-patlabor-reviews-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Steam page FAQs
  {
    id: "is-it-on-steam",
    question: "Is PATLABOR the Case Files on Steam?",
    answer:
      "Yes. PATLABOR the Case Files launched on Steam on 2026-09-16 as AppID 3275400, published by GOOD SMILE COMPANY and developed by Chime Corporation.",
    pageIds: ["fixed-patlabor-steam-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-is-the-appid",
    question: "What is the PATLABOR the Case Files Steam AppID?",
    answer:
      "The Steam AppID is 3275400. Use that number with SteamDB to look up the package, language support, and price history.",
    pageIds: ["fixed-patlabor-steam-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "buy-outside-of-steam",
    question: "Can I buy PATLABOR the Case Files outside of Steam?",
    answer:
      "No first-party storefront outside Steam has been announced for the launch. Third-party key-reseller listings are not publisher-controlled; verify the seller before purchase and prefer the Steam store page directly.",
    pageIds: ["fixed-patlabor-steam-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "controller-support-on-steam",
    question: "Does PATLABOR the Case Files Steam support controllers?",
    answer:
      "Yes. The Steam store lists full controller support as a launch-day feature, and single-player is the only supported mode.",
    pageIds: ["fixed-patlabor-steam-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-languages",
    question: "What languages does the PATLABOR the Case Files Steam page list?",
    answer:
      "Japanese, English, Simplified Chinese, Traditional Chinese, and Korean are all listed as supported for interface, audio, and subtitles.",
    pageIds: ["fixed-patlabor-steam-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // System requirements FAQs
  {
    id: "will-it-run-on-my-pc",
    question: "Will PATLABOR the Case Files run on my PC?",
    answer:
      "It runs on any Windows 64-bit PC that meets the minimum spec line on the Steam store page for AppID 3275400. Compare your processor, RAM, GPU, and storage against the live store page before purchasing.",
    pageIds: ["fixed-patlabor-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-it-windows-only",
    question: "Is PATLABOR the Case Files Windows only?",
    answer:
      "Yes. The Steam store lists Windows (64-bit) as the supported platform. No macOS, Linux, or Steam Deck Verified status is recorded for AppID 3275400 as of 2026-09-16.",
    pageIds: ["fixed-patlabor-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-much-storage",
    question: "How much storage does PATLABOR the Case Files need?",
    answer:
      "Plan for roughly 15 GB of free space. The exact storage line on the live Steam store page is the authoritative number, and SteamDB mirrors the same value.",
    pageIds: ["fixed-patlabor-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "controller-on-pc",
    question: "Does PATLABOR the Case Files support controllers on PC?",
    answer:
      "Yes. The Steam store lists full controller support as a launch-day feature, and the system-requirements panel is rendered alongside the controller-support note.",
    pageIds: ["fixed-patlabor-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-deck",
    question: "Can PATLABOR the Case Files run on a Steam Deck?",
    answer:
      "The Steam store does not list a Steam Deck Verified badge for AppID 3275400 as of 2026-09-16. Treat the game as unsupported on the Deck until the developer or Valve posts an explicit verification.",
    pageIds: ["fixed-patlabor-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Franchise page FAQs
  {
    id: "is-it-the-same-as-the-anime",
    question: "Is Mobile Police Patlabor the Case Files the same as the original Mobile Police Patlabor anime?",
    answer:
      "No. Mobile Police Patlabor the Case Files is a new 2026 video game, not a remake of the original 1988–1989 anime. The anime is legacy franchise material and is labeled legacy_reference with research date 2026-09-16.",
    pageIds: ["fixed-patlabor-franchise-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "does-it-retell-the-story",
    question: "Does this game retell the story of the anime or the films?",
    answer:
      "No. The game uses the franchise's Tokyo setting and Labor technology but is sold as an original 3D action story. Treat any plot summary that claims a direct retelling of a specific film or OVA as unverified unless the publisher confirms it on the Steam store or in an official press release.",
    pageIds: ["fixed-patlabor-franchise-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "who-developed-and-published-it-franchise",
    question: "Who developed and published Mobile Police Patlabor the Case Files?",
    answer:
      "Chime Corporation is listed as the developer and GOOD SMILE COMPANY as the publisher on the Steam store page for AppID 3275400. Both names are the publisher-confirmed credits as of the 2026-09-16 research date.",
    pageIds: ["fixed-patlabor-franchise-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-it-the-first-pc-patlabor-game",
    question: "Is this the first Patlabor game on PC?",
    answer:
      "It is the first Patlabor-branded release published on Steam by GOOD SMILE COMPANY under the Mobile Police Patlabor the Case Files title. Prior Patlabor games exist on older consoles and are treated as legacy_reference with research date 2026-09-16.",
    pageIds: ["fixed-patlabor-franchise-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "coming-to-consoles",
    question: "Is Mobile Police Patlabor the Case Files coming to consoles?",
    answer:
      "As of the research date 2026-09-16, the Steam store page lists Windows 64-bit only. No PS5 or other console version has been announced by the publisher. Any console release date is unconfirmed until GOOD SMILE COMPANY or the Steam store is updated with a new platform line.",
    pageIds: ["fixed-patlabor-franchise-en-US", "fixed-patlabor-ps5-status-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "does-it-require-franchise-knowledge",
    question: "Does the game require knowledge of the Patlabor franchise to enjoy?",
    answer:
      "No prior knowledge is required. The Steam store description introduces the setting and Labors in-game, and the story is designed for new players, though longtime Patlabor fans will recognize characters, locations, and Labor designs from the legacy anime and OVA material.",
    pageIds: ["fixed-patlabor-franchise-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
];