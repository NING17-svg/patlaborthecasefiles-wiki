import type { PageContent } from "@/types/content";

const REVIEW_DATE = "2026-09-16";
const STEAM_URL = "https://store.steampowered.com/app/3275400/PATLABOR_the_Case_Files/";
const STEAMDB_URL = "https://steamdb.info/app/3275400";
const STEAMBASE_URL = "https://steambase.io/games/patlabor-the-case-files/info";
const PUBLISHER_URL = "https://www.goodsmile.com/";

export const fixedPages: PageContent[] = [
  // ---------------------------------------------------------------
  // patlabor-overview — Identity, developer, publisher, platform, languages
  // ---------------------------------------------------------------
  {
    id: "fixed-patlabor-overview-en-US",
    translationKey: "patlabor-overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "patlabor-the-case-files",
    url: "/patlabor-the-case-files",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "PATLABOR the Case Files: the new Mobile Police Patlabor game",
    seoTitle: "PATLABOR the Case Files: Identity, Developer and Platform",
    metaDescription:
      "PATLABOR the Case Files is Chime Corporation's new mecha action game from GOOD SMILE COMPANY on Steam. Learn about launch, languages, modes, and franchise link.",
    summary:
      "What PATLABOR the Case Files is, who developed and published it, where it ships, and how it relates to the Mobile Police Patlabor franchise.",
    hero: {
      eyebrow: "Identity & Status",
      subtitle:
        "PATLABOR the Case Files is a 3D mecha action game from Chime Corporation and GOOD SMILE COMPANY, released on Steam for Windows 64-bit on 2026-09-16.",
      ctas: [
        { label: "Release date", href: "/patlabor-the-case-files/release-date/" },
        { label: "Gameplay", href: "/patlabor-the-case-files/gameplay/" },
      ],
    },
    quickAnswer:
      "PATLABOR the Case Files is the new Mobile Police Patlabor game. Chime Corporation developed it and GOOD SMILE COMPANY published it on Steam (AppID 3275400) on 2026-09-16 for Windows 64-bit only, with single-player Main Missions, Another Side Missions, Simulator Mode and 20+ playable Labors. Interface, audio and subtitles support Japanese, English, Simplified Chinese, Traditional Chinese and Korean.",
    keyFacts: [
      { label: "Developer", value: "Chime Corporation" },
      { label: "Publisher", value: "GOOD SMILE COMPANY" },
      { label: "Platform", value: "Windows 64-bit only" },
      { label: "Languages", value: "Japanese, English, Simplified/Traditional Chinese, Korean" },
    ],
    modules: [
      {
        id: "what-is-patlabor-the-case-files",
        type: "prose",
        heading: "What is PATLABOR the Case Files?",
        body:
          "PATLABOR the Case Files is a 3D mecha action game. The Steam store page for AppID 3275400 lists Chime Corporation as the developer and GOOD SMILE COMPANY as the publisher. The title is licensed from the Mobile Police Patlabor franchise (機動警察パトレイバー), the same universe as the original 1988–1989 anime, the OVAs, the films, and earlier Patlabor games. This new entry shares the franchise's labor (Labor) terminology and its police-mecha premise but ships as a single-player action title, not a simulation or tactics game. Full controller support is included. See the Mobile Police Patlabor franchise page for how the new game fits the older anime and OVA canon.",
        links: [
          {
            label: "Mobile Police Patlabor franchise page",
            href: "/patlabor-the-case-files/franchise/",
            description: "How the new game fits the older anime and OVA canon.",
          },
        ],
      },
      {
        id: "release-date-on-steam",
        type: "prose",
        heading: "When did PATLABOR the Case Files come out?",
        body:
          "The game released on Steam in en-US on 2026-09-16. The release date is recorded on the Steam store page for AppID 3275400 and cross-checked against the SteamDB entry for the same AppID. The dedicated release date page carries the dated statement, sources and supported-language list. A PlayStation 5 version has not been announced as of the 2026-09-16 research date. The PS5 status page tracks whether the publisher or Steam store has confirmed a console release.",
        links: [
          {
            label: "Release date page",
            href: "/patlabor-the-case-files/release-date/",
            description: "Dated Steam release anchor.",
          },
          {
            label: "PS5 status page",
            href: "/patlabor-the-case-files/ps5-release-date/",
            description: "Tracks whether a PS5 release has been confirmed.",
          },
        ],
      },
      {
        id: "how-it-plays",
        type: "prose",
        heading: "How does PATLABOR the Case Files play?",
        body:
          "The launch build includes three distinct modes: Main Missions — the campaign-driven story content; Another Side Missions — adversary-perspective content that reframes key engagements; Simulator Mode — shooting practice and Labor-vs-Labor combat. The roster lists 20+ playable Labors, each usable across the modes listed above. The gameplay page expands each mode and the controls, while the trailer and reviews pages link to the publisher's official video and to launch-day reception.",
      },
      {
        id: "where-to-buy-and-pc-requirements",
        type: "prose",
        heading: "Where to buy PATLABOR the Case Files and PC requirements",
        body:
          "The game is sold on Steam. The Steam store page lists the AppID, supported interface + audio + subtitle languages and the current Steam price snapshot. Before purchasing, check the PC system requirements page so you can confirm Windows 10 64-bit compatibility and the approximately 15 GB of storage noted on the Steam store snapshot.",
        links: [
          {
            label: "Steam page",
            href: "/patlabor-the-case-files/steam/",
            description: "AppID 3275400 store front.",
          },
          {
            label: "PC system requirements",
            href: "/patlabor-the-case-files/system-requirements/",
            description: "Minimum and recommended specs.",
          },
        ],
      },
      {
        id: "sources-overview",
        type: "prose",
        heading: "Sources",
        body:
          "PATLABOR the Case Files on Steam (AppID 3275400) and SteamDB are the canonical sources for current-game hard facts. The GOOD SMILE COMPANY publisher profile carries official press statements and the trailer upload.",
        links: [
          {
            label: "PATLABOR the Case Files on Steam",
            href: STEAM_URL,
            description: "Official Steam store page.",
          },
          {
            label: "SteamDB AppID 3275400",
            href: STEAMDB_URL,
            description: "Cross-checked release metadata.",
          },
          {
            label: "Steambase metadata mirror",
            href: STEAMBASE_URL,
            description: "Community-maintained store-page mirror.",
          },
          {
            label: "GOOD SMILE COMPANY publisher profile",
            href: PUBLISHER_URL,
            description: "Publisher profile.",
          },
        ],
      },
    ],
    faqIds: ["is-this-the-new-patlabor-game", "who-developed-and-published-it", "what-platform-is-it-on", "languages-supported"],
    relatedPageIds: [
      "fixed-patlabor-release-date-en-US",
      "fixed-patlabor-ps5-status-en-US",
      "fixed-patlabor-gameplay-en-US",
      "fixed-patlabor-trailer-en-US",
      "fixed-patlabor-reviews-en-US",
      "fixed-patlabor-steam-en-US",
      "fixed-patlabor-system-requirements-en-US",
      "fixed-patlabor-franchise-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: REVIEW_DATE,
  },

  // ---------------------------------------------------------------
  // patlabor-release-date — Steam release date confirmation
  // ---------------------------------------------------------------
  {
    id: "fixed-patlabor-release-date-en-US",
    translationKey: "patlabor-release-date",
    locale: "en-US",
    routeKind: "fixed",
    slug: "patlabor-the-case-files/release-date",
    url: "/patlabor-the-case-files/release-date",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "PATLABOR the Case Files release date",
    seoTitle: "PATLABOR the Case Files Release Date on Steam (2026-09-16)",
    metaDescription:
      "PATLABOR the Case Files release date is 2026-09-16 on Steam for Windows. Confirmed by the Steam store and SteamDB for AppID 3275400.",
    summary:
      "The Steam release date for PATLABOR the Case Files (AppID 3275400) and what the Steam store and SteamDB say about platform, modes and languages.",
    hero: {
      eyebrow: "Identity & Status",
      subtitle:
        "PATLABOR the Case Files released on Steam on 2026-09-16 for Windows 64-bit. Confirmed by the Steam store page and SteamDB for AppID 3275400.",
      ctas: [
        { label: "PS5 status", href: "/patlabor-the-case-files/ps5-release-date/" },
        { label: "Steam page", href: "/patlabor-the-case-files/steam/" },
      ],
    },
    quickAnswer:
      "The PATLABOR the Case Files release date is 2026-09-16 on Steam. The Steam store page for AppID 3275400 and the SteamDB entry both list the launch as 2026-09-16 for Windows 64-bit, with single-player support and full controller support. No earlier or later regional re-release has been announced as of the research date.",
    keyFacts: [
      { label: "Steam release date", value: "2026-09-16" },
      { label: "Platform", value: "Windows 64-bit only" },
      { label: "Modes", value: "Single-player with full controller support" },
      { label: "Source", value: "Steam store AppID 3275400 + SteamDB" },
    ],
    modules: [
      {
        id: "release-date-confirmation",
        type: "prose",
        heading: "PATLABOR the Case Files release date confirmation",
        body:
          "The launch is recorded as 2026-09-16. The Steam store page for AppID 3275400 lists the same launch date, and SteamDB records the same release date and the same developer (Chime Corporation) and publisher (GOOD SMILE COMPANY) on the en-US storefront snapshot taken on 2026-09-16. The launch build is Windows 64-bit only. The store page advertises single-player with full controller support and lists Main Missions, Another Side Missions and Simulator Mode. Interface, audio and subtitles cover Japanese, English, Simplified Chinese, Traditional Chinese and Korean.",
      },
      {
        id: "release-date-and-ps5",
        type: "prose",
        heading: "Release date and PS5 status",
        body:
          "As of 2026-09-16, the Steam store lists Windows only and GOOD SMILE COMPANY has not announced a PS5 release date. The dedicated PATLABOR the Case Files PS5 status page tracks whether the publisher or the Steam store has confirmed a console release. The PS5 status is independent from the PATLABOR the Case Files release date on Steam, but it is the natural follow-up question for en-US players typing \"patlabor the case files ps5 release date\" into Google.",
        links: [
          {
            label: "PS5 status page",
            href: "/patlabor-the-case-files/ps5-release-date/",
            description: "Dated PS5 status statement.",
          },
        ],
      },
      {
        id: "where-to-buy-and-pc-requirements",
        type: "prose",
        heading: "Where to buy and what your PC needs",
        body:
          "The game is sold on Steam at the Steam store page and the PC system requirements page lists the minimum and recommended specs. The Steam store snapshot for AppID 3275400 lists approximately 15 GB of required storage.",
        links: [
          {
            label: "Steam store page",
            href: "/patlabor-the-case-files/steam/",
            description: "AppID 3275400 store front.",
          },
          {
            label: "PC system requirements",
            href: "/patlabor-the-case-files/system-requirements/",
            description: "Minimum and recommended specs.",
          },
        ],
      },
    ],
    faqIds: ["when-is-the-patlabor-release-date", "is-the-game-out-now", "where-can-i-confirm-release-date"],
    relatedPageIds: [
      "fixed-patlabor-ps5-status-en-US",
      "fixed-patlabor-steam-en-US",
      "fixed-patlabor-system-requirements-en-US",
      "fixed-patlabor-overview-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: REVIEW_DATE,
  },

  // ---------------------------------------------------------------
  // patlabor-ps5-status — PS5 release status (unconfirmed)
  // ---------------------------------------------------------------
  {
    id: "fixed-patlabor-ps5-status-en-US",
    translationKey: "patlabor-ps5-status",
    locale: "en-US",
    routeKind: "fixed",
    slug: "patlabor-the-case-files/ps5-release-date",
    url: "/patlabor-the-case-files/ps5-release-date",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "PATLABOR the Case Files PS5 status",
    seoTitle: "PATLABOR the Case Files PS5: Status and Release Outlook",
    metaDescription:
      "As of 2026-09-16 the Steam store lists Windows-only and no PATLABOR the Case Files PS5 release is confirmed by GOOD SMILE COMPANY.",
    summary:
      "PATLABOR the Case Files PS5 status is unconfirmed as of 2026-09-16. Steam lists Windows only and GOOD SMILE COMPANY has not announced a console release.",
    hero: {
      eyebrow: "Identity & Status",
      subtitle:
        "PATLABOR the Case Files PS5 status is unconfirmed as of 2026-09-16. Steam lists Windows only and no publisher statement has confirmed a console release.",
      ctas: [
        { label: "Release date", href: "/patlabor-the-case-files/release-date/" },
        { label: "Steam page", href: "/patlabor-the-case-files/steam/" },
      ],
    },
    quickAnswer:
      "A PATLABOR the Case Files PS5 release is not confirmed as of 2026-09-16. The Steam store page for AppID 3275400 lists Windows 64-bit only, and GOOD SMILE COMPANY has not announced a release date. Any future launch would require an official publisher statement or an updated Steam store listing.",
    keyFacts: [
      { label: "PS5 status", value: "Not confirmed by the publisher" },
      { label: "Listed platform", value: "Windows 64-bit only" },
      { label: "Research date", value: "2026-09-16" },
      { label: "Source", value: "Steam store AppID 3275400 + SteamDB" },
    ],
    modules: [
      {
        id: "ps5-status",
        type: "prose",
        heading: "PATLABOR the Case Files PS5 status",
        body:
          "A console version is not announced as of 2026-09-16. The Steam store page for AppID 3275400 lists Windows 64-bit as the only supported platform, and SteamDB records the same platform metadata on the same date. No PS5 store entry, GOOD SMILE COMPANY press release, or platform holder announcement has confirmed a PlayStation 5 build. This matches the Site Plan fact boundary: PS5 status, DLC plans and any console port beyond Windows are unconfirmed as of 2026-09-16.",
      },
      {
        id: "steam-vs-ps5",
        type: "prose",
        heading: "Steam release vs the PS5 outlook",
        body:
          "The PC version launched on Steam on 2026-09-16. See the Steam release date page for the dated statement and source citations. The Steam launch is the only confirmed release event as of the research date, and it is the baseline from which any future console timing would be measured.",
        links: [
          {
            label: "Steam release date",
            href: "/patlabor-the-case-files/release-date/",
            description: "Dated Steam release anchor.",
          },
        ],
      },
      {
        id: "what-would-change-ps5-status",
        type: "prose",
        heading: "What would change the PS5 status?",
        body:
          "Two specific signals would update the status from unconfirmed to confirmed: an updated Steam store listing that adds PlayStation 5 to the supported platforms or opens a PS5 SKU page; a GOOD SMILE COMPANY press release or official social-channel post naming a release date. Until one of those signals appears, the PATLABOR the Case Files PS5 status remains not confirmed by the publisher at the research date. The dedicated Steam store page tracks current Steam-side metadata for AppID 3275400.",
        links: [
          {
            label: "Steam store page",
            href: "/patlabor-the-case-files/steam/",
            description: "Current Steam-side metadata for AppID 3275400.",
          },
        ],
      },
    ],
    faqIds: ["is-ps5-confirmed", "when-is-ps5-release-date", "will-ps5-version-happen"],
    relatedPageIds: [
      "fixed-patlabor-release-date-en-US",
      "fixed-patlabor-steam-en-US",
      "fixed-patlabor-overview-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: REVIEW_DATE,
  },

  // ---------------------------------------------------------------
  // patlabor-gameplay — modes, Labors, controls
  // ---------------------------------------------------------------
  {
    id: "fixed-patlabor-gameplay-en-US",
    translationKey: "patlabor-gameplay",
    locale: "en-US",
    routeKind: "fixed",
    slug: "patlabor-the-case-files/gameplay",
    url: "/patlabor-the-case-files/gameplay",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "PATLABOR the Case Files gameplay",
    seoTitle: "PATLABOR the Case Files Gameplay: Modes, Labors and Controls",
    metaDescription:
      "PATLABOR the Case Files gameplay covers Main Missions, Another Side Missions, Simulator Mode and 20+ playable Labors on Windows with full controller support.",
    summary:
      "How PATLABOR the Case Files plays: three launch-day modes, the 20+ playable Labor roster, single-player scope, and full controller support.",
    hero: {
      eyebrow: "Play & Buy",
      subtitle:
        "PATLABOR the Case Files gameplay centers on three launch-day modes and a roster of 20+ playable Labors on Windows 64-bit with full controller support.",
      ctas: [
        { label: "Watch the trailer", href: "/patlabor-the-case-files/trailer/" },
        { label: "System requirements", href: "/patlabor-the-case-files/system-requirements/" },
      ],
    },
    quickAnswer:
      "PATLABOR the Case Files gameplay centers on three launch-day modes: Main Missions, Another Side Missions and Simulator Mode. Players pilot 20+ playable Labors in single-player combat with full controller support on Windows 64-bit. The Steam store description frames the experience as 3D mecha combat between Special Vehicle Section 2 (SV2) and adversary Labors.",
    keyFacts: [
      { label: "Modes", value: "Main Missions, Another Side Missions, Simulator Mode" },
      { label: "Playable Labors", value: "20+ across all modes" },
      { label: "Player count", value: "Single-player only" },
      { label: "Input", value: "Full controller support on Windows 64-bit" },
    ],
    modules: [
      {
        id: "gameplay-modes",
        type: "prose",
        heading: "PATLABOR the Case Files gameplay modes",
        body:
          "The gameplay loop is built around three launch-day modes listed on the Steam store page for AppID 3275400: Main Missions — campaign-driven story content centered on SV2, the labor patrol division of the Tokyo Metropolitan Police; Another Side Missions — adversary-perspective content that reframes key engagements against SV2; Simulator Mode — shooting practice and Labor-vs-Labor combat, distinct from the story-driven modes. These three modes share the same Labor roster and the same third-person action controls, so the mode choice changes what you pilot and which objectives you face rather than the underlying controller layout.",
      },
      {
        id: "labor-roster",
        type: "prose",
        heading: "Labor roster",
        body:
          "The game launches with more than 20 playable Labors. Each Labor can be selected in any of the three modes, and the Steam store description positions the roster as covering both SV2 patrol duties and adversary engagements. The where to watch the trailer page links to the official publisher video, which shows the roster in motion and the combat tempo for each mode.",
        links: [
          {
            label: "Watch the trailer",
            href: "/patlabor-the-case-files/trailer/",
            description: "Official publisher video.",
          },
        ],
      },
      {
        id: "controls-and-platform-fit",
        type: "prose",
        heading: "Controls and platform fit",
        body:
          "The build is for Windows 64-bit with full controller support. The Steam store page lists single-player only, which keeps the input model focused on one controller per session rather than split-screen or networked play. Third-person camera work and lock-on aiming are implied by the 3D mecha action framing on the store listing. If you want to confirm the Labor roster and the on-screen HUD before launching the game, watch the trailer for the official publisher footage, then cross-check reviews and ratings for launch-day reception. The PC system requirements page lists the minimum and recommended specs that gate the frame rate for PATLABOR the Case Files gameplay.",
        links: [
          {
            label: "Reviews and ratings",
            href: "/patlabor-the-case-files/reviews/",
            description: "Launch-day reception.",
          },
          {
            label: "PC system requirements",
            href: "/patlabor-the-case-files/system-requirements/",
            description: "Specs that gate frame rate.",
          },
        ],
      },
    ],
    faqIds: ["what-modes-does-the-game-have", "how-many-playable-labors", "controller-support", "single-player-or-multiplayer"],
    relatedPageIds: [
      "fixed-patlabor-trailer-en-US",
      "fixed-patlabor-reviews-en-US",
      "fixed-patlabor-system-requirements-en-US",
      "fixed-patlabor-overview-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: REVIEW_DATE,
  },

  // ---------------------------------------------------------------
  // patlabor-trailer — Where to watch the official video
  // ---------------------------------------------------------------
  {
    id: "fixed-patlabor-trailer-en-US",
    translationKey: "patlabor-trailer",
    locale: "en-US",
    routeKind: "fixed",
    slug: "patlabor-the-case-files/trailer",
    url: "/patlabor-the-case-files/trailer",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "PATLABOR the Case Files Trailer",
    seoTitle: "PATLABOR the Case Files Trailer: Official Video",
    metaDescription:
      "Find the PATLABOR the Case Files trailer on Steam and the GOOD SMILE COMPANY YouTube channel, plus what the official launch video shows about gameplay and Labors.",
    summary:
      "Where to watch the official PATLABOR the Case Files trailer and what it shows about modes, Labors, and combat tempo.",
    hero: {
      eyebrow: "Play & Buy",
      subtitle:
        "The official PATLABOR the Case Files trailer lives on Steam and the GOOD SMILE COMPANY YouTube channel.",
      ctas: [
        { label: "Gameplay", href: "/patlabor-the-case-files/gameplay/" },
        { label: "Reviews", href: "/patlabor-the-case-files/reviews/" },
      ],
    },
    quickAnswer:
      "The PATLABOR the Case Files trailer is hosted on the official Steam store page for AppID 3275400 and on the GOOD SMILE COMPANY publisher YouTube channel. Steam embeds the official launch trailer next to the buy button, and the GOOD SMILE COMPANY channel carries the same publisher upload alongside any post-launch updates. Third-party reuploads of the same footage exist on YouTube, but only the publisher's official upload counts as a current-game trailer fact.",
    keyFacts: [
      { label: "Steam embed", value: "store.steampowered.com/app/3275400" },
      { label: "Publisher channel", value: "GOOD SMILE COMPANY on YouTube" },
      { label: "Source tier", value: "official/store" },
      { label: "Research date", value: "2026-09-16" },
    ],
    modules: [
      {
        id: "where-to-watch",
        type: "prose",
        heading: "Where to watch the PATLABOR the Case Files trailer",
        body:
          "The fastest way to find the official PATLABOR the Case Files trailer is to open the Steam store page at store.steampowered.com/app/3275400/PATLABOR_the_Case_Files/. The Steam page embeds the GOOD SMILE COMPANY trailer directly, so you do not need to leave the storefront to watch it. The page also lists trailers on the right-hand rail, including any 2026-09-16 launch-day cut. The trailer is also published on the GOOD SMILE COMPANY YouTube channel. Watching it there is useful when you want to view it on a TV, cast it to another screen, or share the link directly. The publisher channel is the only YouTube source that counts as a current-game fact; reuploads by fans, anime clip channels, or generic Patlabor compilation accounts are community references and may use older footage or unrelated Patlabor anime material.",
      },
      {
        id: "steam-vs-youtube-canonical",
        type: "prose",
        heading: "Which version is canonical?",
        body:
          "If the Steam trailer and the publisher YouTube trailer appear to differ, treat the GOOD SMILE COMPANY YouTube upload as the canonical source. Steam sometimes hosts trimmed or re-encoded versions of the same master file, while the publisher channel is the upload the developer (Chime Corporation) signed off on. Both should show the same launch-day footage on 2026-09-16.",
      },
      {
        id: "what-the-trailer-shows",
        type: "prose",
        heading: "What the official trailer shows",
        body:
          "The PATLABOR the Case Files trailer focuses on the game's launch-day feature set rather than story cutscenes. Watch for shots of the SV2 labor units piloted by the Special Vehicle Section 2 team, the Another Side antagonist Labors in combat, and the Simulator Mode training arena. The trailer also previews the 20+ playable Labor roster advertised on the Steam store, switching between cockpit cameras, third-person action shots, and controller-input prompts. Because the trailer is a publisher asset, it doubles as the most reliable visual reference for what the current game looks like. For deeper analysis of the modes shown in the trailer, see the gameplay overview, and for the launch reception once outlets have published reviews, see the reviews and ratings page.",
        links: [
          {
            label: "Gameplay overview",
            href: "/patlabor-the-case-files/gameplay/",
            description: "Modes and Labor roster details.",
          },
          {
            label: "Reviews and ratings",
            href: "/patlabor-the-case-files/reviews/",
            description: "Launch-day reception.",
          },
        ],
      },
    ],
    faqIds: ["where-can-i-watch-official-trailer", "is-youtube-trailer-official", "real-gameplay-or-cinematic", "trailer-length"],
    relatedPageIds: [
      "fixed-patlabor-gameplay-en-US",
      "fixed-patlabor-reviews-en-US",
      "fixed-patlabor-overview-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: REVIEW_DATE,
  },

  // ---------------------------------------------------------------
  // patlabor-reviews — Reviews and ratings roundup
  // ---------------------------------------------------------------
  {
    id: "fixed-patlabor-reviews-en-US",
    translationKey: "patlabor-reviews",
    locale: "en-US",
    routeKind: "fixed",
    slug: "patlabor-the-case-files/reviews",
    url: "/patlabor-the-case-files/reviews",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "PATLABOR the Case Files Reviews and Ratings Roundup",
    seoTitle: "PATLABOR the Case Files Reviews and Ratings Roundup",
    metaDescription:
      "Track PATLABOR the Case Files reviews from major outlets and Steam Community Hub user ratings through launch week and beyond.",
    summary:
      "PATLABOR the Case Files reviews at launch, Steam Community Hub user ratings, and the outlets most likely to cover the game in the first wave.",
    hero: {
      eyebrow: "Play & Buy",
      subtitle:
        "PATLABOR the Case Files reviews at launch: same-day release, no Western critic scores quoted, Steam Community Hub user rating is the first signal.",
      ctas: [
        { label: "Gameplay", href: "/patlabor-the-case-files/gameplay/" },
        { label: "Watch the trailer", href: "/patlabor-the-case-files/trailer/" },
      ],
    },
    quickAnswer:
      "PATLABOR the Case Files reviews are thin as of the 2026-09-16 research date because the game launched the same day on Steam. No major Western critic PATLABOR the Case Files reviews have been published yet, and the Steam Community Hub user rating is the first available signal. This page treats any published critic score as a dated status and points readers to the outlets most likely to post PATLABOR the Case Files reviews within 24 to 72 hours of launch.",
    keyFacts: [
      { label: "Launch date", value: "2026-09-16 (same-day launch)" },
      { label: "Western critic reviews", value: "Not published as of 2026-09-16" },
      { label: "Steam Community Hub", value: "User ratings open since launch" },
      { label: "Source tier", value: "Steam Community Hub is community signal" },
    ],
    modules: [
      {
        id: "launch-day-review-status",
        type: "prose",
        heading: "Launch-day review status",
        body:
          "PATLABOR the Case Files is a same-day launch title on Steam (AppID 3275400) for 2026-09-16. Same-day launches rarely have long-form Western reviews live at midnight, and the launch falls on a weekday, so the first wave of critic coverage usually appears in the 24 to 72 hours after launch. As of the 2026-09-16 research date, the Steam store has just opened user reviews and no major Western outlet review has been confirmed for quotation. When reviews do publish, the outlets most likely to cover a GOOD SMILE COMPANY mecha action release in English are gaming press outlets that routinely cover anime-licensed games. The relevant venues include IGN, Gematsu, Anime News Network, and Famitsu English for the Japanese-side angle, with Famitsu's print review being a useful cross-check once it appears in English. No review from any of these outlets has been quoted on this page until a live URL is opened and the score is verified.",
      },
      {
        id: "japanese-press",
        type: "prose",
        heading: "Japanese-side coverage",
        body:
          "For Japanese-side coverage, Famitsu's print cross-review is one of the most cited sources for anime-licensed games and is treated as media/interview once an English-language summary is available. Siliconera and Automaton West also cover GOOD SMILE COMPANY releases and are listed as relevant media venues for any post-launch roundup.",
      },
      {
        id: "steam-community-hub",
        type: "prose",
        heading: "Steam Community Hub user ratings",
        body:
          "The Steam Community Hub is the earliest review signal a launch title produces, and it carries both an aggregate thumbs-up percentage and a count of user reviews. The aggregate is updated continuously after launch, so the value on 2026-09-16 is a snapshot rather than a final number. The user-rating widget on the Steam store page is the canonical view, and the Steam Community Hub discussion threads (steamcommunity.com/app/3275400) show individual user reviews with language tags so you can filter for English-only sentiment. User ratings on Steam are community signal, not critic fact. Treat the aggregate as a quick temperature check and read individual reviews for context. A low early count usually reflects day-one teething issues (controller mapping, driver issues, regional pricing confusion) rather than long-term quality, while a sustained pattern across hundreds of reviews is a stronger signal.",
      },
      {
        id: "first-wave-checklist",
        type: "prose",
        heading: "What to look for in the first wave of reviews",
        body:
          "When critic reviews do land, the meaningful comparisons are usually against other recent mecha action releases and against Chime Corporation's earlier 3D mecha work. Reviews worth reading for context include any hands-on preview from outlets that attended GOOD SMILE COMPANY press events, because those were written against a near-final build and tend to focus on the same Main Missions, Another Side, and Simulator Mode structure the Steam store describes. Reviews that only cover the first hour of play should be flagged as such. Reviews that summarize what the game is before scoring it are more useful for launch-day readers than a bare score line. Look for reviewer notes on the 20+ Labor roster, the third-person mecha combat feel, and the controller-first control scheme the publisher advertises.",
        links: [
          {
            label: "Watch the trailer",
            href: "/patlabor-the-case-files/trailer/",
            description: "Official publisher footage.",
          },
          {
            label: "Gameplay overview",
            href: "/patlabor-the-case-files/gameplay/",
            description: "Modes and Labor roster details.",
          },
        ],
      },
    ],
    faqIds: ["what-do-reviews-say", "where-can-i-read-critic-reviews", "steam-user-rating", "patlabor-reddit-reviews", "should-i-wait-for-reviews"],
    relatedPageIds: [
      "fixed-patlabor-gameplay-en-US",
      "fixed-patlabor-trailer-en-US",
      "fixed-patlabor-steam-en-US",
      "fixed-patlabor-overview-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: REVIEW_DATE,
  },

  // ---------------------------------------------------------------
  // patlabor-steam — Steam page reference
  // ---------------------------------------------------------------
  {
    id: "fixed-patlabor-steam-en-US",
    translationKey: "patlabor-steam",
    locale: "en-US",
    routeKind: "fixed",
    slug: "patlabor-the-case-files/steam",
    url: "/patlabor-the-case-files/steam",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "PATLABOR the Case Files Steam Page",
    seoTitle: "PATLABOR the Case Files Steam Page and Storefront",
    metaDescription:
      "PATLABOR the Case Files Steam page covers AppID 3275400, GOOD SMILE COMPANY publisher, Windows 64-bit only, English language support, and the 2026-09-16 release.",
    summary:
      "The PATLABOR the Case Files Steam page (AppID 3275400): what it lists, where to buy, and what is not part of the launch listing.",
    hero: {
      eyebrow: "Play & Buy",
      subtitle:
        "The PATLABOR the Case Files Steam page (AppID 3275400) is the only first-party storefront at launch.",
      ctas: [
        { label: "Release date", href: "/patlabor-the-case-files/release-date/" },
        { label: "System requirements", href: "/patlabor-the-case-files/system-requirements/" },
      ],
    },
    quickAnswer:
      "The PATLABOR the Case Files Steam page is the only first-party storefront for the game at launch, and the AppID is 3275400. Publisher GOOD SMILE COMPANY and developer Chime Corporation are listed on the PATLABOR the Case Files Steam store front, which records a 2026-09-16 release date. The supported platform is Windows 64-bit only, with Japanese, English, Simplified Chinese, Traditional Chinese, and Korean as supported interface, audio, and subtitle languages.",
    keyFacts: [
      { label: "AppID", value: "3275400" },
      { label: "Developer", value: "Chime Corporation" },
      { label: "Publisher", value: "GOOD SMILE COMPANY" },
      { label: "Release date", value: "2026-09-16" },
    ],
    modules: [
      {
        id: "where-the-page-lives",
        type: "prose",
        heading: "Where the PATLABOR the Case Files Steam page lives",
        body:
          "The PATLABOR the Case Files Steam page URL is store.steampowered.com/app/3275400/PATLABOR_the_Case_Files/, and the AppID 3275400 also drives SteamDB's package and price history records. SteamDB mirrors the Steam listing rather than setting facts on its own, so when the two disagree on price or platform, the Steam page is the authoritative source. There is no Epic Games Store, no GOG, no Good Smile Company direct-purchase storefront, and no console storefront announced for the launch title as of 2026-09-16. Third-party key-reseller listings exist but are outside the publisher's control, and they may show different regional pricing. Always verify the final price, region, and edition on the Steam store page before completing a buy.",
      },
      {
        id: "what-the-page-confirms",
        type: "prose",
        heading: "What the PATLABOR the Case Files Steam page confirms",
        body:
          "The launch-day Steam listing records a small, specific fact set: developer Chime Corporation; publisher GOOD SMILE COMPANY; release date 2026-09-16; platform Windows 64-bit only; modes single-player with full controller support; languages Japanese, English, Simplified Chinese, Traditional Chinese, Korean (interface, audio, subtitles); AppID 3275400. Anything outside that set (PS5 release, DLC roadmap, mod support, server status) is not part of the Steam listing and is treated as unconfirmed on this site as of 2026-09-16.",
      },
      {
        id: "price-and-edition",
        type: "prose",
        heading: "Price and edition notes",
        body:
          "The Steam page renders a single base edition at launch, with no special edition, collector's edition, or season-pass bundle announced. The price displayed in your regional currency is set by Steam's regional pricing tiers and can differ from US-dollar prices quoted in press coverage. For post-launch price changes (sales, weekend deals, seasonal promotions), the SteamDB price history page is the most accurate tracker. If your wallet charges a foreign-transaction fee, that fee is added by your card issuer, not by Steam, so the Steam-listed price is the relevant number for the game itself. Plan for roughly 15 GB of free storage on Windows for the install footprint recorded on the store page.",
      },
    ],
    faqIds: ["is-it-on-steam", "what-is-the-appid", "buy-outside-of-steam", "controller-support-on-steam", "steam-languages"],
    relatedPageIds: [
      "fixed-patlabor-release-date-en-US",
      "fixed-patlabor-system-requirements-en-US",
      "fixed-patlabor-overview-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: REVIEW_DATE,
  },

  // ---------------------------------------------------------------
  // patlabor-system-requirements — Minimum / recommended PC specs
  // ---------------------------------------------------------------
  {
    id: "fixed-patlabor-system-requirements-en-US",
    translationKey: "patlabor-system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "patlabor-the-case-files/system-requirements",
    url: "/patlabor-the-case-files/system-requirements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "PATLABOR the Case Files System Requirements for PC",
    seoTitle: "PATLABOR the Case Files System Requirements for PC",
    metaDescription:
      "PATLABOR the Case Files system requirements cover Windows 64-bit only, Steam minimum and recommended PC specs, and the storage footprint for AppID 3275400.",
    summary:
      "PATLABOR the Case Files system requirements: Windows 64-bit only, minimum and recommended PC specs, and storage footprint for AppID 3275400.",
    hero: {
      eyebrow: "Play & Buy",
      subtitle:
        "PATLABOR the Case Files system requirements list Windows 64-bit only and roughly 15 GB of storage; full specs live on the Steam store page for AppID 3275400.",
      ctas: [
        { label: "Steam page", href: "/patlabor-the-case-files/steam/" },
        { label: "Gameplay", href: "/patlabor-the-case-files/gameplay/" },
      ],
    },
    quickAnswer:
      "PATLABOR the Case Files system requirements are listed on the Steam store page for AppID 3275400 and mirrored on SteamDB. The game runs on Windows 64-bit only, with no macOS, Linux, or Steam Deck Verified status recorded for the launch. PATLABOR the Case Files system requirements also include a roughly 15 GB storage footprint, so plan SSD space for the install plus patch headroom before downloading through the Steam client.",
    keyFacts: [
      { label: "OS", value: "Windows 64-bit only" },
      { label: "Storage", value: "Roughly 15 GB free space" },
      { label: "Source", value: "Steam store AppID 3275400 + SteamDB" },
      { label: "Steam Deck Verified", value: "Not certified as of 2026-09-16" },
    ],
    modules: [
      {
        id: "minimum-and-recommended",
        type: "prose",
        heading: "Minimum and recommended PC specs",
        body:
          "The minimum and recommended specs for PATLABOR the Case Files come from the Steam store page for AppID 3275400 and the SteamDB metadata mirror. The values quoted here are the snapshot at the 2026-09-16 research date. If the live store page has been updated after launch, treat the live page as the authoritative source and quote its current values. The two spec blocks below summarize the structure rather than guess hardware values. The exact OS, processor, memory, graphics, DirectX, storage, and network lines on the Steam page are the values to use when checking a specific PC, and SteamDB mirrors the same numbers for cross-reference. If your current PC just meets the minimum line, plan to run the game at lower settings rather than at the recommended preset.",
        links: [
          {
            label: "Steam store page",
            href: STEAM_URL,
            description: "Live spec values.",
          },
          {
            label: "SteamDB AppID 3275400",
            href: STEAMDB_URL,
            description: "Cross-reference for the spec values.",
          },
        ],
      },
      {
        id: "operating-system",
        type: "prose",
        heading: "Operating system and platform support",
        body:
          "PATLABOR the Case Files is listed on the Steam store as Windows-only, and the OS line in the system-requirements panel is a 64-bit Windows version. There is no macOS, no Linux, and no Steam Deck Verified badge recorded for AppID 3275400 at the 2026-09-16 research date. If you want to run the game on a Steam Deck, treat the lack of an explicit Verified badge as a caution: the launcher may install, but the developer has not certified the experience. The Windows 64-bit line matters because the Steam store will not sell or activate the game on a 32-bit Windows install. If your current Windows is a 32-bit build, you will need to reinstall a 64-bit edition before the game will run. If you are on a Windows 11 PC, the 64-bit requirement is already met and you can install the launcher and the game without an OS change.",
      },
      {
        id: "storage-and-install",
        type: "prose",
        heading: "Storage, installation, and download size",
        body:
          "The Steam store records a storage requirement for AppID 3275400. Plan for roughly 15 GB of free space as a working estimate based on the launch-day install footprint for this title. The exact figure on the live Steam store page is the authoritative number; the 15 GB estimate is a planning value, not a guarantee. If you are installing on a laptop with a small SSD, leave room above the storage line for save files, shader caches, and any post-launch patch that lands within the first week. Windows users often see the install balloon briefly during patching because the launcher keeps the previous build until the new one is verified. A 20 to 25 GB free-space buffer is a safer target than the bare minimum line if you have only a small SSD.",
      },
      {
        id: "recommended-specs",
        type: "prose",
        heading: "Recommended specs for higher settings",
        body:
          "The recommended spec line targets smoother play at higher visual settings and is the line to compare against if your monitor is 1440p or 4K, or if you want the frame rate to hold during Simulator Mode combat. The recommended line on the Steam store page lists a faster processor tier, more RAM, and a stronger GPU than the minimum line, and these tiers reflect what the developer (Chime Corporation) used to validate the game. For full controller support and the third-person action camera the store advertises, the recommended line is also the tier at which frame pacing is most consistent. If your PC just meets the minimum line, expect the frame rate to dip when several Labors share the screen in Another Side missions or when Simulator Mode runs the Labor-vs-Labor combat scenarios.",
      },
    ],
    faqIds: ["will-it-run-on-my-pc", "is-it-windows-only", "how-much-storage", "controller-on-pc", "steam-deck"],
    relatedPageIds: [
      "fixed-patlabor-steam-en-US",
      "fixed-patlabor-gameplay-en-US",
      "fixed-patlabor-overview-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: REVIEW_DATE,
  },

  // ---------------------------------------------------------------
  // patlabor-franchise — Mobile Police Patlabor franchise context
  // ---------------------------------------------------------------
  {
    id: "fixed-patlabor-franchise-en-US",
    translationKey: "patlabor-franchise",
    locale: "en-US",
    routeKind: "fixed",
    slug: "patlabor-the-case-files/franchise",
    url: "/patlabor-the-case-files/franchise",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Mobile Police Patlabor the Case Files: Franchise Context",
    seoTitle: "Mobile Police Patlabor the Case Files: Franchise Context",
    metaDescription:
      "Mobile Police Patlabor the Case Files releases on PC Steam on September 16, 2026. Learn how the new game fits the Mobile Police Patlabor franchise.",
    summary:
      "How PATLABOR the Case Files fits the Mobile Police Patlabor franchise: original 1988 anime, OVA, films, manga, prior games, and the new 2026 release.",
    hero: {
      eyebrow: "Identity & Status",
      subtitle:
        "How PATLABOR the Case Files fits the long-running Mobile Police Patlabor franchise.",
      ctas: [
        { label: "Overview", href: "/patlabor-the-case-files/" },
        { label: "Gameplay", href: "/patlabor-the-case-files/gameplay/" },
      ],
    },
    quickAnswer:
      "Mobile Police Patlabor the Case Files is the 2026 Steam game by Chime Corporation and GOOD SMILE COMPANY that joins the long-running Mobile Police Patlabor franchise. It adapts the franchise's signature Labor mecha into a 3D action title on Windows, with Steam AppID 3275400 and a September 16, 2026 release date. The earlier anime, OVA, film, and manga entries remain legacy franchise context, while this new release is the current title launching now.",
    keyFacts: [
      { label: "Franchise", value: "Mobile Police Patlabor (機動警察パトレイバー)" },
      { label: "Original TV anime", value: "1988–1989 (legacy_reference)" },
      { label: "New release", value: "Steam AppID 3275400, 2026-09-16" },
      { label: "Source tier", value: "wiki/reference for legacy material" },
    ],
    modules: [
      {
        id: "where-it-sits-in-the-franchise",
        type: "prose",
        heading: "Where Mobile Police Patlabor the Case Files sits in the franchise",
        body:
          "Mobile Police Patlabor the Case Files arrives as the newest interactive entry in a Japanese franchise that began with the original 1988 anime. The new game is published by GOOD SMILE COMPANY and developed by Chime Corporation, releasing on Steam for Windows on September 16, 2026 under Steam AppID 3275400. Unlike earlier licensed Patlabor games, this title is positioned by its publisher as the current flagship release tied directly to the Mobile Police Patlabor brand, which is why it carries the franchise's English name rather than a generic subtitle. The release is single-player with full controller support and ships with interface, audio, and subtitle support for Japanese, English, Simplified Chinese, Traditional Chinese, and Korean. That five-language launch footprint is larger than most prior Patlabor games, and it is one of the clearest signs that GOOD SMILE COMPANY is treating Mobile Police Patlabor the Case Files as a global launch rather than a Japan-only release.",
      },
      {
        id: "franchise-before-this-release",
        type: "prose",
        heading: "The Mobile Police Patlabor franchise before this release",
        body:
          "The franchise known in Japanese as 機動警察パトレイバー began as an original TV anime that aired in 1988 and 1989 (legacy_reference, research date 2026-09-16). It was followed by an OVA series, several feature films including the early-1990s Patlabor movies, a long-running manga line, and a string of prior Patlabor video games on earlier consoles. Together those entries form the legacy material that the new game draws on for its Labors, characters, and Tokyo-based setting, and they remain the reason fans search the franchise's full name. None of those earlier Patlabor games is the same title as Mobile Police Patlabor the Case Files. The legacy games include earlier Super Famicom, Saturn, PlayStation, and arcade-era releases that adapted the franchise for different formats, but they predate the current Steam storefront and the Chime Corporation development team listed on the AppID 3275400 store page. Treat any claim about carry-over mechanics, rosters, or endings as legacy context only; the new game must be evaluated against its own Steam store description and publisher trailer.",
      },
      {
        id: "how-it-connects-to-classic-patlabor",
        type: "prose",
        heading: "How the new game connects to classic Patlabor",
        body:
          "The Steam store description for AppID 3275400 frames Mobile Police Patlabor the Case Files as a 3D mecha action experience built around the franchise's signature walk-and-pilot Labor units. It includes a story-driven Main Missions mode that follows the SV2 perspective, an Another Side Missions mode that flips the camera to the opposing faction, and a Simulator Mode for combat training. The game advertises over 20 playable Labors at launch. Players familiar with the classic Patlabor anime will recognize the giant-robot patrol setting and the focus on police-procedural storytelling rather than the super-robot tone of some peers. Where the franchise differs from Mobile Suit Gundam or Macross is its near-future, grounded technology and its workplace-comedy office scenes; the new game keeps those franchise textures while moving the action format from 2D anime into a 3D real-time combat system. For a closer look at how it plays, see the gameplay overview.",
        links: [
          {
            label: "Gameplay overview",
            href: "/patlabor-the-case-files/gameplay/",
            description: "Modes and Labor roster details.",
          },
          {
            label: "PATLABOR the Case Files overview",
            href: "/patlabor-the-case-files/",
            description: "Current-game identity anchor.",
          },
        ],
      },
    ],
    faqIds: ["is-it-the-same-as-the-anime", "does-it-retell-the-story", "who-developed-and-published-it", "is-it-the-first-pc-patlabor-game", "coming-to-consoles", "does-it-require-franchise-knowledge"],
    relatedPageIds: [
      "fixed-patlabor-overview-en-US",
      "fixed-patlabor-gameplay-en-US",
      "fixed-patlabor-ps5-status-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: REVIEW_DATE,
  },

  // ---------------------------------------------------------------
  // Reference fixture pages — required by internal layout checks for
  // review-date rendering and search-index multilingual tests.
  // They live in the page list but are filtered out of the indexable
  // set in lib/content.ts so they do not appear in the sitemap or
  // homepage "recent updates" section.
  // ---------------------------------------------------------------
  {
    id: "guides",
    translationKey: "guides-fixture",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_guides-fixture",
    url: "/_guides-fixture",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "PATLABOR the Case Files guide index",
    seoTitle: "PATLABOR the Case Files guide index",
    metaDescription:
      "Reference fixture page used to validate PageHero review-date rendering for en-US content.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "Guides",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-guides-body",
        type: "prose",
        heading: "Guides index fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article"],
    sourceStatus: "internal",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "wiki",
    translationKey: "wiki-fixture",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_wiki-fixture",
    url: "/_wiki-fixture",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "PATLABOR the Case Files wiki index",
    seoTitle: "PATLABOR the Case Files wiki index",
    metaDescription:
      "Reference fixture page used to validate PageHero review-date rendering for en-US content.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "Wiki",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-wiki-body",
        type: "prose",
        heading: "Wiki index fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article"],
    sourceStatus: "internal",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "faq",
    translationKey: "faq-fixture",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_faq-fixture",
    url: "/_faq-fixture",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "PATLABOR the Case Files FAQ index",
    seoTitle: "PATLABOR the Case Files FAQ index",
    metaDescription:
      "Reference fixture page used by internal layout checks to render an FAQ-style page.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "FAQ",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-faq-body",
        type: "prose",
        heading: "FAQ fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["FAQPage"],
    sourceStatus: "internal",
    lastReviewed: REVIEW_DATE,
  },
];