// ============================================================================
// SITE CONTENT — the single file to edit when swapping words, media, or links.
// Layout, styling, and animations live in App.tsx and should rarely change.
// ============================================================================

export const site = {
  // --- Brand -----------------------------------------------------------------
  brand: {
    name: "Scholia",
    logoAriaLabel: "Scholia",
    markSrc: "/scholia-mark.png", // shown as a circular badge in the navbar
  },

  // --- Palette ----------------------------------------------------------------
  colors: {
    deepGreen: "#1E3A2C", // How It Works background
    darkGreen: "#16281F", // FAQ background (one step deeper)
    cream: "#F5F1E8",
  },

  // --- Navbar ----------------------------------------------------------------
  // Two links render on each side of the center logo, in order.
  nav: {
    left: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Why Scholia", href: "#why" },
    ],
    right: [
      { label: "FAQ", href: "#faq" },
      { label: "Early Access", href: "https://scholia.framer.website" },
    ],
  },

  // --- Hero (full-screen video) ---------------------------------------------
  hero: {
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260611_130946_e6793cc7-6b6f-4035-9852-44290b781ae6.mp4",
    eyebrow: "Reading Companion", // small caps line 1
    eyebrowSub: "For Any Paper Book", // small caps line 2
    headingSerif: "SCHOLIA", // display line (serif)
    headingSans: "", // leave empty for a single-word headline
    description:
      "Photograph any page of any physical book. Scholia already knows the book, finds your place, and answers anything — without spoiling what's ahead.",
    cta: {
      label: "Get Early Access",
      href: "https://scholia.framer.website",
      newTab: true,
    },
  },

  // --- Cloud / fog transition assets ------------------------------------------
  // Painted cloud band whose job is to HIDE the seam between two differently
  // coloured sections. Local fallback: "/cloud-top.png"
  clouds: {
    // Local copies (2688x1520 each) — no longer hotlinking the Figma preview host.
    // cloud-top: transparent top, dense mass at 50-70% height, fades by 85%.
    //   Sits ON a seam; shifted up 60% so the dense part lands on the join.
    // cloud-bottom: transparent top half, opaque to its bottom edge.
    //   Belongs at the BOTTOM of the page, not on a seam.
    top: "/cloud-top.png",
    bottom: "/cloud-bottom.png",
    // Clouds are absolutely positioned at the TOP of a section and shifted up by
    // half their own rendered height (-translate-y-1/2). That centres them on the
    // seam for ANY image aspect ratio — no cropping, no guessed margins, and the
    // section above sits behind the top half while this section's own background
    // sits behind the bottom half, so no page background can show through.
    //
    // The only tunable: how much top padding a section needs so its text clears
    // the lower half of the clouds. Increase if headings feel crowded.
    // The cloud art is shown WHOLE — never cropped, never masked, so it can
    // never show a cut edge. It is centred on each seam, which means half its
    // height (28vw, since the art is 1.77:1) hangs into the section above and
    // half into the section below. Those sections simply get enough padding to
    // leave room. The page is longer as a result; that is the trade.
    clearanceClass: "pt-[26vw]", // section BELOW a seam (art hangs 22.6vw down)
    clearanceBottomClass: "pb-[36vw]", // section ABOVE a seam (art rises 34vw up)
    clearanceDeepClass: "pt-[50vw]", // section under a seam whose clouds hang low
  },

  // --- Why Scholia (full-screen image + copy) ---------------------------------
  showcase: {
    backgroundUrl:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260616_040223_98d314e9-b8b4-4218-bcbd-18ffc38032ac.png&w=1280&q=85",
    heading: "Why Scholia?",
    // The background artwork is a painted MAROON sky. This green wash pulls it
    // toward the brand palette. Set tintOpacity to 0 to see the original art.
    tintColor: "#1E3A2C",
    tintOpacity: 0.55,
    subtextLines: [
      "Every reader who photographed a page, asked a question, and let",
      "Scholia meet them exactly where they left off",
      "gave a paper book a second life.",
    ],
    cta: { label: "See How It Works", href: "#how-it-works" },
  },

  // --- How It Works -------------------------------------------------------------
  howItWorks: {
    eyebrow: "Four steps",
    heading: "How It Works",
    intro:
      "No account to set up, no ebook to buy, no page numbers to type. Open the app, point your camera, start asking.",
    steps: [
      {
        n: "01",
        title: "Add your book",
        body:
          "Search any title. Scholia already understands the book — its chapters, its characters, its ideas — before you open it.",
      },
      {
        n: "02",
        title: "Photograph your page",
        body:
          "Point your camera at whatever page you're on. The words are read on your device, and Scholia works out exactly where you are — in any edition, any printing, any translation.",
      },
      {
        n: "03",
        title: "Ask anything",
        body:
          "Who is this character again? Explain this page like I'm twelve. What should I know before the next chapter? Answers arrive in seconds, in plain language.",
      },
      {
        n: "04",
        title: "Never get spoiled",
        body:
          "Scholia only knows what you've read. Everything past your page stays sealed until you get there — so you can ask freely, even mid-story.",
      },
    ],
    cta: { label: "Get Early Access", href: "https://scholia.framer.website" },
  },

  // --- FAQ ----------------------------------------------------------------------
  faq: {
    paddingBottom: "22vh",
    left: [
      {
        q: "Welcome to Scholia. What is it, exactly?",
        a: "A reading companion for physical books. Photograph the page you're on and ask whatever you like — what a passage means, who a character is, what you should remember before the next chapter. Scholia knows the book, and it knows how far you've read.",
      },
      {
        q: "Do I need a paid plan?",
        a: "No. Scholia is free to use with a generous daily allowance of questions, which is enough for most reading sessions. If you read heavily and want unlimited questions, Premium is available monthly or yearly — and everything you've already asked stays readable for free, forever.",
      },
      {
        q: "How long does it take to get an answer?",
        a: "Seconds. Photograph the page, confirm where you are, and the answer arrives before you've settled back into your chair.",
      },
      {
        q: "Does it work across different editions?",
        a: "Yes, and this is the part we're proudest of. Scholia never relies on page numbers, because your paperback and someone else's hardback don't agree on them. It reads the actual words on your page and matches them to the book itself, so any printing or translation works.",
      },
    ],
    right: [
      {
        q: "Which books are supported?",
        a: "Search for a title and Scholia will tell you honestly how well it knows that specific book. Popular fiction, classics and well-known non-fiction are covered in real depth. For rarer titles it leans on the page you've photographed and tells you it's doing so, rather than inventing something.",
      },
      {
        q: "How accurate is it, and is it really spoiler-free?",
        a: "Answers are anchored to the page in front of you and to the chapter you've reached, which keeps them grounded. Spoiler protection is deliberate and strict: nothing beyond your position is discussed. It's careful rather than infallible, so we tell you that plainly — and you can switch it off whenever you want the whole book on the table.",
      },
      {
        q: "Are there plans for more features?",
        a: "Plenty. Chapter recaps for when you've been away from a book, importing the shelf you already track elsewhere, and a way to look back over everything a book taught you. The core promise stays the same: your book, your page, no spoilers.",
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
