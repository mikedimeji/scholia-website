import { useCallback, useEffect, useRef } from "react";
import { Facebook, Twitter, Linkedin, BarChart3, Aperture } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";
import { site } from "./content";

// ============================================================================
// All words, media URLs, links, and Q&A content live in src/content.ts.
// This file is layout + styling only — edit it for visual changes.
// ============================================================================

const LOGO_PATH =
  "M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z";

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="white" aria-label={site.brand.logoAriaLabel}>
      <path d={LOGO_PATH} />
    </svg>
  );
}

function DoveMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 160"
      className={className}
      fill="none"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* body + head */}
      <path d="M108 74C112 62 122 54 134 54c6 0 11 2 15 5-3-9-11-16-21-18-16-3-31 6-36 21-2 6-2 12 0 18" />
      <circle cx="140" cy="58" r="2.2" fill="white" stroke="none" />
      {/* upper wing sweep */}
      <path d="M118 70C90 52 58 46 28 54c22 2 42 12 56 28-20-2-40 2-56 12 24-2 46 4 62 18 10-16 22-28 36-36" />
      {/* lower wing sweep */}
      <path d="M126 88c22-6 46-4 66 6-18 4-33 14-42 28 12-2 24-8 33-18-2 14-10 26-22 34 8-20 6-40-6-56-8-11-19-19-31-24" opacity="0.7" />
      {/* tail feathers */}
      <path d="M132 96c6 14 6 30-2 44M140 94c10 12 14 27 10 42M148 92c14 8 22 22 22 38" opacity="0.55" />
    </svg>
  );
}

const navLinkClass =
  "text-[10px] font-medium uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-white sm:text-xs sm:tracking-[0.2em]";

function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2 sm:top-6">
      <div className="liquid-glass flex items-center gap-4 rounded-full px-4 py-2.5 sm:gap-12 sm:px-10 sm:py-3">
        {site.nav.left.map((link) => (
          <a key={link.label} href={link.href} className={navLinkClass}>
            {link.label}
          </a>
        ))}
        <a href="#" aria-label={site.brand.logoAriaLabel}>
          <Logo className="h-5 w-5 transition-transform hover:scale-110 sm:h-7 sm:w-7" />
        </a>
        {site.nav.right.map((link) => (
          <a key={link.label} href={link.href} className={navLinkClass}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={site.hero.videoUrl}
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
          {site.hero.eyebrow}
        </p>
        <p
          className="hero-fade-up mt-1 text-[10px] font-light uppercase tracking-[0.4em] text-white/70 sm:text-xs"
          style={{ animationDelay: "0.1s" }}
        >
          {site.hero.eyebrowSub}
        </p>
        <h1
          className="hero-fade-up mt-6 text-5xl leading-[1.05] tracking-wide drop-shadow-[0_2px_24px_rgba(0,0,0,0.25)] sm:text-7xl md:text-[7rem]"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="font-arsenica block">{site.hero.headingSerif}</span>
          <span className="block font-semibold tracking-tight">{site.hero.headingSans}</span>
        </h1>
        <p
          className="hero-fade-up font-arsenica mt-8 max-w-xl text-sm text-white/90 sm:text-lg md:text-xl"
          style={{ animationDelay: "0.4s" }}
        >
          {site.hero.description}
        </p>
        <a
          href={site.hero.cta.href}
          target={site.hero.cta.newTab ? "_blank" : undefined}
          rel={site.hero.cta.newTab ? "noreferrer" : undefined}
          className="liquid-glass hero-fade-up font-inter mt-10 rounded-[50%] px-10 py-5 text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-[0.98] sm:px-12 sm:py-6 sm:text-xs"
          style={{ animationDelay: "0.55s" }}
        >
          {site.hero.cta.label}
        </a>
      </div>
    </section>
  );
}

function TransitionCloud() {
  return (
    <div className={`relative z-20 ${site.clouds.topOverlapClass}`}>
      <img src={site.clouds.top} className="pointer-events-none w-full" alt="" />
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
      style={{
        backgroundImage: `url(${site.showcase.backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-32 text-center text-white">
        <h2 className="reveal font-arsenica text-4xl tracking-wide drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] sm:text-5xl md:text-7xl">
          {site.showcase.heading}
        </h2>
        <p
          className="reveal font-arsenica mt-6 max-w-3xl text-xl leading-snug tracking-wide text-white/90 drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)] sm:text-2xl md:text-4xl"
          style={{ animationDelay: "0.15s" }}
        >
          {site.showcase.subtextLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < site.showcase.subtextLines.length - 1 && <br className="hidden sm:block" />}{" "}
            </span>
          ))}
        </p>
        <a
          href={site.showcase.cta.href}
          className="reveal font-inter mt-10 rounded-[50%] border border-white/50 bg-transparent px-10 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-[1.03] hover:border-white hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] sm:px-12 sm:py-5 sm:text-xs"
          style={{ animationDelay: "0.3s" }}
        >
          {site.showcase.cta.label}
        </a>
      </div>
      <div
        className="absolute bottom-0 left-0 h-48 w-full"
        style={{ background: `linear-gradient(to bottom, transparent, ${site.showcase.bottomFadeColor})` }}
      />
    </section>
  );
}

function QAndA() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  let delayIndex = 0;
  const nextDelay = () => {
    delayIndex += 1;
    return `${(delayIndex * 0.12).toFixed(2)}s`;
  };

  const renderItem = (item: { q: string; a: string }, key: number) => (
    <div key={key} className="reveal" style={{ animationDelay: nextDelay() }}>
      <p className="font-arsenica text-xs uppercase tracking-wide text-white sm:text-base">{item.q}</p>
      <p className="font-inter mt-3 text-[11px] leading-relaxed text-white/60 sm:text-sm">{item.a}</p>
    </div>
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 pt-20 sm:px-10 md:px-16 lg:px-28 lg:pt-32"
      style={{ backgroundColor: site.qa.backgroundColor, paddingBottom: site.qa.paddingBottom }}
    >
      <h2 className="reveal flex items-baseline justify-center gap-1 text-center font-arsenica text-4xl text-white sm:text-5xl md:text-7xl">
        <span>Q</span>
        <span className="text-xl font-light italic text-white/80 sm:text-2xl md:text-4xl">&amp;</span>
        <span>A</span>
      </h2>

      <div className="relative z-20 mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col gap-12">{site.qa.left.map(renderItem)}</div>
        <div className="flex flex-col gap-12 md:mt-24">{site.qa.right.map(renderItem)}</div>
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
    // Drift upward only. The section is overflow-hidden, so any positive
    // translate would push the cloud past the bottom edge and clip it flat.
    const offset = progress * 12;
    el.style.transform = `translateY(${-offset}%)`;
  }, []);

  useParallaxScroll(handleScroll);

  return (
    <img
      ref={imgRef}
      src={site.clouds.top}
      className="pointer-events-none absolute bottom-0 left-0 z-10 w-full"
      alt=""
      style={{ transform: "translateY(0%)" }}
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

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center px-4 text-center lg:items-start lg:justify-center lg:pt-[25vh]"
      style={{ backgroundImage: `url(${site.quote.backgroundUrl})` }}
    >
      <p className="reveal-scale font-arsenica max-w-xs text-xl leading-snug text-white sm:max-w-lg sm:text-3xl md:max-w-2xl md:text-5xl lg:leading-tight">
        {site.quote.text} <span className="font-light italic">{site.quote.italicText}</span>
      </p>
    </section>
  );
}

const footerIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  barchart: BarChart3,
  aperture: Aperture,
} as const;

const footerTextClass =
  "hidden text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 transition-colors hover:text-white sm:inline";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between bg-gradient-to-t from-black/40 to-transparent px-3 py-2.5 sm:px-10 sm:py-4">
      <div className="flex items-center gap-4">
        {site.footer.socials.map((s) => {
          const Icon = footerIcons[s.icon];
          return (
            <a key={s.label} href={s.href} aria-label={s.label} className="text-white/80 transition-colors hover:text-white">
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          );
        })}
        <a href={site.footer.leftLink.href} className={footerTextClass}>
          {site.footer.leftLink.label}
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href={site.footer.rightLink.href} className={footerTextClass}>
          {site.footer.rightLink.label}
        </a>
        {site.footer.rightIcons.map((s) => {
          const Icon = footerIcons[s.icon];
          return (
            <a key={s.label} href={s.href} aria-label={s.label} className="text-white/80 transition-colors hover:text-white">
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          );
        })}
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
      <div className={`relative ${site.clouds.showcaseOverlapClass}`}>
        <Showcase />
        <DoveMark className="pointer-events-none absolute -bottom-12 right-6 z-20 w-24 sm:right-10 sm:w-32 md:w-40 lg:right-16 lg:w-56 xl:w-64" />
      </div>
      <QAndA />
      <QuoteBanner />
      <Footer />
    </div>
  );
}
