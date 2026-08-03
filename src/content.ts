// ============================================================================
// SITE CONTENT — the single file to edit when swapping words, media, or links.
// Layout, styling, and animations live in App.tsx and should rarely change.
// ============================================================================

export const site = {
  // --- Brand -----------------------------------------------------------------
  brand: {
    name: "Scholia",
    logoAriaLabel: "Scholia",
  },

  // --- Navbar ----------------------------------------------------------------
  // Two links render on each side of the center logo, in order.
  nav: {
    left: [
      { label: "Gallery", href: "#gallery" },
      { label: "Talents", href: "#talents" },
    ],
    right: [
      { label: "Journal", href: "#journal" },
      { label: "Story", href: "#story" },
    ],
  },

  // --- Hero (full-screen video) ---------------------------------------------
  hero: {
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260611_130946_e6793cc7-6b6f-4035-9852-44290b781ae6.mp4",
    eyebrow: "Scholia", // small caps line 1
    eyebrowSub: "Reading Companion", // small caps line 2
    headingSerif: "DIGITAL", // first display line (serif font)
    headingSans: "ARCHIVE", // second display line (sans, semibold)
    description:
      "A showcase honoring the readers, thinkers and makers who turned every paper book into a conversation worth having.",
    cta: {
      label: "Enter Gallery",
      href: "https://scholia.framer.website",
      newTab: true,
    },
  },

  // --- Cloud / fog transition assets ------------------------------------------
  // These are painted cloud PNGs whose job is to HIDE the seam between two
  // differently-coloured sections. Swap the URLs to change the transition art.
  // (Local fallbacks live at /cloud-top.png and /cloud-bottom.png.)
  clouds: {
    // Painted cloud band. Local fallbacks: "/cloud-top.png", "/cloud-bottom.png"
    top: "https://res.cloudinary.com/dsdhxhhqh/image/upload/v1781500777/cloude_vj4pjv.png",
    bottom: "https://res.cloudinary.com/dsdhxhhqh/image/upload/v1781500777/cloude_vj4pjv.png",
    // How far each layer pulls up over the section above it (Tailwind classes).
    // Bigger negative margins = more overlap = softer, more hidden seam.
    topOverlapClass: "-mt-64 sm:-mt-72 md:-mt-80 lg:-mt-96",
    showcaseOverlapClass: "-mt-40 sm:-mt-48 md:-mt-56 lg:-mt-64",
  },

  // --- Showcase (full-screen image + copy) ------------------------------------
  showcase: {
    backgroundUrl:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260616_040223_98d314e9-b8b4-4218-bcbd-18ffc38032ac.png&w=1280&q=85",
    heading: "Still Frame",
    // Rendered as one flowing sentence; line breaks appear on sm+ screens.
    subtextLines: [
      "Every reader who photographed a page, asked a question, and let",
      "Scholia meet them exactly where they left off",
      "gave a paper book a second life.",
    ],
    cta: { label: "View Their Archive", href: "#story" },
    // Gradient at the section's bottom edge, blending into the Q&A background.
    bottomFadeColor: "#410C01",
  },

  // --- Q&A section -------------------------------------------------------------
  qa: {
    backgroundColor: "#410C01",
    paddingBottom: "28vh",
    left: [
      {
        q: "Welcome to Scholia. So how did the Digital Archive begin its journey?",
        a: "Less than a year into building Scholia, we realized the hardest part wasn't the AI — it was the readers themselves, closing books mid-chapter and never picking them back up. We never stopped building because we were determined not to let that momentum die. We built a companion that remembers your place, and we've been evolving it since.",
      },
      {
        q: "How did you know where to begin?",
        a: "We didn't wait for the perfect model. We saw readers struggling to stay with dense, difficult books, put down halfway, forgotten on a shelf, and set to the task of building something that could meet them on any page, in any edition, as quickly as possible.",
      },
      {
        q: "So what was the first version like?",
        a: "We were among the first to let someone photograph a physical page and get an answer anchored to exactly where they were — no page numbers, no spoilers past that point. Early readers were grateful for that restraint; they trusted us because we respected the story they hadn't finished yet.",
      },
    ],
    right: [
      {
        q: "What was the initial reaction?",
        a: "So many people told us that just knowing the book to hand and finding their place again gave them the confidence to pick it back up after months away. The experience felt intimate — a private conversation with a book, even though everyone was reading alone, in their own room, in their own time.",
      },
      {
        q: "Where did you evolve from there?",
        a: "Supporting every edition mattered more than we expected — readers don't all own the same printing, and anchoring by the book's actual text instead of page numbers meant Scholia worked no matter which copy someone was holding.",
      },
      {
        q: "Do you find there's a new appreciation for paper books?",
        a: "There's a feeling like — this is the book in front of us, our one chance to actually finish it, we don't have time to let it collect dust anymore. People are picking books back up to reclaim a kind of attention they'd lost, and we get to be the small nudge that keeps them turning pages.",
      },
    ],
  },

  // --- Quote banner -------------------------------------------------------------
  quote: {
    backgroundUrl:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260616_042421_41f4fa0b-770c-4545-a416-73a809366e49.png&w=1280&q=85",
    // text renders first, then italicText in light italics.
    text: "Reading, memory and attention are more",
    italicText: "important than ever.",
  },

  // --- Footer -------------------------------------------------------------------
  footer: {
    socials: [
      { icon: "facebook", href: "#", label: "Facebook" },
      { icon: "twitter", href: "#", label: "Twitter" },
      { icon: "linkedin", href: "#", label: "LinkedIn" },
    ] as const,
    leftLink: { label: "Privacy Notice", href: "#" },
    rightLink: { label: "Terms & Policies", href: "#" },
    rightIcons: [
      { icon: "barchart", href: "#", label: "Insights" },
      { icon: "aperture", href: "#", label: "Focus" },
    ] as const,
  },
} as const;

export type Site = typeof site;
