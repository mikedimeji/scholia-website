import { useCallback, useEffect, useRef } from "react";
import { Facebook, Twitter, Linkedin, BarChart3, Aperture } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260611_130946_e6793cc7-6b6f-4035-9852-44290b781ae6.mp4";
const SHOWCASE_BG =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260616_040223_98d314e9-b8b4-4218-bcbd-18ffc38032ac.png&w=1280&q=85";
const QUOTE_BG =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260616_042421_41f4fa0b-770c-4545-a416-73a809366e49.png&w=1280&q=85";
const CLOUD_TOP = "/cloud-top.png";
const CLOUD_BOTTOM = "/cloud-bottom.png";

const LOGO_PATH =
  "M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z";

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="white" aria-label="Scholia">
      <path d={LOGO_PATH} />
    </svg>
  );
}

function DoveMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={className}
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 90 C 40 60, 70 55, 95 65 C 105 45, 130 20, 160 15 C 145 35, 138 50, 138 65 C 155 62, 175 68, 190 85 C 165 82, 145 88, 130 100 C 105 112, 70 112, 45 100 C 30 96, 18 92, 10 90 Z" />
      <path d="M95 65 C 90 78, 88 90, 92 102" />
    </svg>
  );
}

function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2 sm:top-6">
      <div className="liquid-glass flex items-center gap-4 rounded-full px-4 py-2.5 sm:gap-12 sm:px-10 sm:py-3">
        <a href="#gallery" className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-white sm:text-xs sm:tracking-[0.2em]">
          Gallery
        </a>
        <a href="#talents" className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-white sm:text-xs sm:tracking-[0.2em]">
          Talents
        </a>
        <a href="#" aria-label="Scholia">
          <Logo className="h-5 w-5 transition-transform hover:scale-110 sm:h-7 sm:w-7" />
        </a>
        <a href="#journal" className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-white sm:text-xs sm:tracking-[0.2em]">
          Journal
        </a>
        <a href="#story" className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-white sm:text-xs sm:tracking-[0.2em]">
          Story
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
        <p
          className="hero-fade-up text-xs font-medium uppercase tracking-[0.35em] text-white/90 sm:text-sm"
          style={{ animationDelay: "0.1s" }}
        >
          Scholia
        </p>
        <p
          className="hero-fade-up mt-1 text-[10px] font-light uppercase tracking-[0.4em] text-white/70 sm:text-xs"
          style={{ animationDelay: "0.1s" }}
        >
          Reading Companion
        </p>
        <h1
          className="hero-fade-up mt-6 text-5xl leading-[1.05] tracking-wide drop-shadow-[0_2px_24px_rgba(0,0,0,0.25)] sm:text-7xl md:text-[7rem]"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="font-arsenica block">DIGITAL</span>
          <span className="block font-semibold tracking-tight">ARCHIVE</span>
        </h1>
        <p
          className="hero-fade-up font-arsenica mt-8 max-w-xl text-sm text-white/90 sm:text-lg md:text-xl"
          style={{ animationDelay: "0.4s" }}
        >
          A showcase honoring the readers, thinkers and makers who turned every
          paper book into a conversation worth having.
        </p>
        <a
          href="https://scholia.framer.website"
          target="_blank"
          rel="noreferrer"
          className="liquid-glass hero-fade-up font-inter mt-10 rounded-[50%] px-10 py-5 text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-[0.98] sm:px-12 sm:py-6 sm:text-xs"
          style={{ animationDelay: "0.55s" }}
        >
          Enter Gallery
        </a>
      </div>
    </section>
  );
}

function TransitionCloud() {
  return (
    <div className="relative z-20 -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48">
      <img src={CLOUD_TOP} className="pointer-events-none w-full" alt="" />
    </div>
  );
}

function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundImage: `url(${SHOWCASE_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-32 text-center text-white">
        <h2 className="reveal font-arsenica text-4xl tracking-wide drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] sm:text-5xl md:text-7xl">
          Still Frame
        </h2>
        <p
          className="reveal font-arsenica mt-6 max-w-3xl text-xl leading-snug tracking-wide text-white/90 drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)] sm:text-2xl md:text-4xl"
          style={{ animationDelay: "0.15s" }}
        >
          Every reader who photographed a page, asked a question, and let
          <br className="hidden sm:block" />
          Scholia meet them exactly where they left off
          <br className="hidden sm:block" />
          gave a paper book a second life.
        </p>
        <a
          href="#story"
          className="reveal font-inter mt-10 rounded-[50%] border border-white/50 bg-transparent px-10 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-[1.03] hover:border-white hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] sm:px-12 sm:py-5 sm:text-xs"
          style={{ animationDelay: "0.3s" }}
        >
          View Their Archive
        </a>
      </div>
      <div
        className="absolute bottom-0 left-0 h-48 w-full"
        style={{ background: "linear-gradient(to bottom, transparent, #410C01)" }}
      />
    </section>
  );
}

const QA_LEFT = [
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
];

const QA_RIGHT = [
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
];

function QAndA() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  let delayIndex = 0;
  const nextDelay = () => {
    delayIndex += 1;
    return `${(delayIndex * 0.12).toFixed(2)}s`;
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#410C01] px-4 pt-20 sm:px-10 md:px-16 lg:px-28 lg:pt-32"
      style={{ paddingBottom: "50vh" }}
    >
      <h2 className="reveal flex items-baseline justify-center gap-1 text-center font-arsenica text-4xl text-white sm:text-5xl md:text-7xl">
        <span>Q</span>
        <span className="text-xl font-light italic text-white/80 sm:text-2xl md:text-4xl">&amp;</span>
        <span>A</span>
      </h2>

      <div className="relative z-20 mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col gap-12">
          {QA_LEFT.map((item, i) => (
            <div key={i} className="reveal" style={{ animationDelay: nextDelay() }}>
              <p className="font-arsenica text-xs uppercase tracking-wide text-white sm:text-base">
                {item.q}
              </p>
              <p className="font-inter mt-3 text-[11px] leading-relaxed text-white/60 sm:text-sm">
                {item.a}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-12 md:mt-24">
          {QA_RIGHT.map((item, i) => (
            <div key={i} className="reveal" style={{ animationDelay: nextDelay() }}>
              <p className="font-arsenica text-xs uppercase tracking-wide text-white sm:text-base">
                {item.q}
              </p>
              <p className="font-inter mt-3 text-[11px] leading-relaxed text-white/60 sm:text-sm">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ParallaxCloud />
    </section>
  );
}

function ParallaxCloud() {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleScroll = useCallback(() => {
    const el = imgRef.current;
    if (!el) return;
    const section = el.closest("section");
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = 1 - rect.bottom / (vh + rect.height);
    const offset = progress * 30;
    el.style.transform = `translateY(${60 - offset}%)`;
  }, []);

  useParallaxScroll(handleScroll);

  return (
    <img
      ref={imgRef}
      src={CLOUD_TOP}
      className="pointer-events-none absolute bottom-0 left-0 z-10 w-full"
      alt=""
      style={{ transform: "translateY(60%)" }}
    />
  );
}

function useParallaxScroll(callback: () => void) {
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [callback]);
}

function QuoteBanner() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleScroll = useCallback(() => {
    const el = imgRef.current;
    if (!el) return;
    const section = el.closest("section");
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = 1 - rect.bottom / (vh + rect.height);
    const offset = progress * 80;
    el.style.transform = `translateY(${-offset}px)`;
  }, []);
  useParallaxScroll(handleScroll);

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center px-4 text-center lg:items-start lg:justify-center lg:pt-[25vh]"
      style={{ backgroundImage: `url(${QUOTE_BG})` }}
    >
      <p className="reveal-scale font-arsenica max-w-xs text-xl leading-snug text-white sm:max-w-lg sm:text-3xl md:max-w-2xl md:text-5xl lg:leading-tight">
        Reading, memory and attention are more{" "}
        <span className="font-light italic">important than ever.</span>
      </p>
      <img
        ref={imgRef}
        src={CLOUD_BOTTOM}
        className="pointer-events-none absolute -bottom-16 left-0 z-10 w-full"
        alt=""
      />
    </section>
  );
}

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between bg-gradient-to-t from-black/40 to-transparent px-3 py-2.5 sm:px-10 sm:py-4">
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Facebook" className="text-white/80 transition-colors hover:text-white">
          <Facebook className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
        <a href="#" aria-label="Twitter" className="text-white/80 transition-colors hover:text-white">
          <Twitter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-white/80 transition-colors hover:text-white">
          <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
        <a href="#" className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 transition-colors hover:text-white sm:inline">
          Privacy Notice
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 transition-colors hover:text-white sm:inline">
          Terms &amp; Policies
        </a>
        <a href="#" aria-label="Insights" className="text-white/80 transition-colors hover:text-white">
          <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
        <a href="#" aria-label="Focus" className="text-white/80 transition-colors hover:text-white">
          <Aperture className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <TransitionCloud />
      <div className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28">
        <Showcase />
        <DoveMark className="pointer-events-none absolute -bottom-12 right-6 z-20 w-24 sm:right-10 sm:w-32 md:w-40 lg:right-16 lg:w-56 xl:w-64" />
      </div>
      <QAndA />
      <QuoteBanner />
      <Footer />
    </div>
  );
}
