import { useRef } from "react";
import { Facebook, Twitter, Linkedin, BarChart3, Aperture } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";
import { site } from "./content";

// ============================================================================
// All words, media URLs, links, colours, and FAQ content live in src/content.ts.
// This file is layout + styling only — edit it for visual changes.
// ============================================================================

function Mark({ className }: { className?: string }) {
  // Circular cream badge so the square artwork sits naturally on the glass nav.
  // Purely decorative: not a link, no hover state.
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/30 ${className ?? ""}`}
      style={{ backgroundColor: site.colors.cream }}
      aria-label={site.brand.logoAriaLabel}
    >
      <img src={site.brand.markSrc} alt="" className="h-full w-full scale-[1.18] object-cover" />
    </span>
  );
}

/**
 * A cloud band that sits BETWEEN two sections and straddles the join, so the
 * colour change happens behind the clouds instead of on a visible straight line.
 * `fadeTo` should be the background colour of the section below.
 */
/**
 * Clouds that straddle the seam at the TOP of the section they're placed in.
 * `-translate-y-1/2` shifts the image up by half its own height, so it centres
 * on the join whatever the artwork's dimensions. The parent section must be
 * `relative` and must NOT be overflow-hidden, or the overhang gets clipped.
 */
function SeamClouds({
  src,
  blendFrom,
  blendTo,
}: {
  src?: string;
  /** Solid colour of the section ABOVE, if it has one. */
  blendFrom?: string;
  /** Solid colour of the section BELOW, if it has one. */
  blendTo?: string;
}) {
  // The artwork is a huge full cloudscape, so it's cropped to a band of fixed
  // height sitting astride the seam (half above, half below). A mask fades the
  // band's top and bottom to transparent, so the crop never shows a hard edge
  // and the sections either side blend into the clouds instead of meeting at
  // a line. Height is in vh so it stays stable regardless of image dimensions.
  const fade =
    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 12%, #000 30%, #000 62%, rgba(0,0,0,0.6) 84%, transparent 100%)";

  // Where a neighbouring section is a flat colour, bleed that colour across the
  // join *behind* the clouds. That turns the straight colour change into a soft
  // gradient, so nothing shows through the gaps in the artwork.
  const blend = blendTo
    ? `linear-gradient(to bottom, transparent 0%, transparent 30%, ${blendTo} 78%, ${blendTo} 100%)`
    : blendFrom
      ? `linear-gradient(to bottom, ${blendFrom} 0%, ${blendFrom} 22%, transparent 70%, transparent 100%)`
      : undefined;

  return (
    <div
      className={`pointer-events-none absolute left-0 top-0 z-20 w-full -translate-y-1/2 overflow-hidden ${site.clouds.bandHeight}`}
    >
      {blend && <div className="absolute inset-0" style={{ background: blend }} />}
      <img
        src={src ?? site.clouds.top}
        className="absolute inset-0 h-full w-full select-none object-cover object-center"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
        alt=""
      />
    </div>
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
      {/* flex-1 on both link groups keeps the mark optically centred even though
          the labels on each side are different lengths. */}
      <div className="liquid-glass flex items-center rounded-full px-4 py-2.5 sm:px-8 sm:py-3">
        <div className="flex flex-1 items-center justify-end gap-4 sm:gap-10">
          {site.nav.left.map((link) => (
            <a key={link.label} href={link.href} className={`${navLinkClass} whitespace-nowrap`}>
              {link.label}
            </a>
          ))}
        </div>
        <Mark className="mx-4 h-7 w-7 sm:mx-8 sm:h-9 sm:w-9" />
        <div className="flex flex-1 items-center justify-start gap-4 sm:gap-10">
          {site.nav.right.map((link) => (
            <a key={link.label} href={link.href} className={`${navLinkClass} whitespace-nowrap`}>
              {link.label}
            </a>
          ))}
        </div>
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
          className="hero-fade-up mt-6 text-6xl leading-[1.05] tracking-wide drop-shadow-[0_2px_24px_rgba(0,0,0,0.25)] sm:text-8xl md:text-[8.5rem]"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="font-arsenica block">{site.hero.headingSerif}</span>
          {site.hero.headingSans && (
            <span className="block font-semibold tracking-tight">{site.hero.headingSans}</span>
          )}
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

function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <section
      id="why"
      ref={ref}
      className="relative min-h-screen w-full"
      style={{
        backgroundImage: `url(${site.showcase.backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <SeamClouds />
      {/* Green wash over the maroon artwork so it sits in the brand palette. */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: site.showcase.tintColor, opacity: site.showcase.tintOpacity }}
      />
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
        style={{ background: `linear-gradient(to bottom, transparent, ${site.colors.deepGreen})` }}
      />
    </section>
  );
}


function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className={`relative px-4 pb-16 sm:px-10 md:px-16 lg:px-28 lg:pb-24 ${site.clouds.clearanceClass}`}
      style={{ backgroundColor: site.colors.deepGreen }}
    >
      <SeamClouds blendTo={site.colors.deepGreen} />
      <div className="mx-auto max-w-5xl text-center">
        <p className="reveal font-inter text-[10px] uppercase tracking-[0.4em] text-white/60 sm:text-xs">
          {site.howItWorks.eyebrow}
        </p>
        <h2 className="reveal mt-4 font-arsenica text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">
          {site.howItWorks.heading}
        </h2>
        <p
          className="reveal font-arsenica mx-auto mt-6 max-w-2xl text-lg leading-snug text-white/80 sm:text-xl md:text-2xl"
          style={{ animationDelay: "0.1s" }}
        >
          {site.howItWorks.intro}
        </p>
      </div>

      <div className="relative z-20 mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2">
        {site.howItWorks.steps.map((step, i) => (
          <div key={step.n} className="reveal" style={{ animationDelay: `${(i + 1) * 0.12}s` }}>
            <div className="flex items-baseline gap-4">
              <span className="font-arsenica text-3xl text-white/35 sm:text-4xl">{step.n}</span>
              <h3 className="font-arsenica text-xl uppercase tracking-wide text-white sm:text-2xl">
                {step.title}
              </h3>
            </div>
            <div className="mt-4 h-px w-full bg-white/15" />
            <p className="font-inter mt-4 text-xs leading-relaxed text-white/65 sm:text-sm">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="reveal relative z-20 mt-16 text-center" style={{ animationDelay: "0.6s" }}>
        <a
          href={site.howItWorks.cta.href}
          target="_blank"
          rel="noreferrer"
          className="font-inter inline-block rounded-[50%] border border-white/50 px-10 py-4 text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-[1.03] hover:border-white hover:bg-white/10 sm:px-12 sm:py-5 sm:text-xs"
        >
          {site.howItWorks.cta.label}
        </a>
      </div>
    </section>
  );
}

function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  let delayIndex = 0;
  const nextDelay = () => {
    delayIndex += 1;
    return `${(delayIndex * 0.1).toFixed(2)}s`;
  };

  const renderItem = (item: { q: string; a: string }, key: number) => (
    <div key={key} className="reveal" style={{ animationDelay: nextDelay() }}>
      <p className="font-arsenica text-xs uppercase tracking-wide text-white sm:text-base">{item.q}</p>
      <p className="font-inter mt-3 text-[11px] leading-relaxed text-white/60 sm:text-sm">{item.a}</p>
    </div>
  );

  return (
    <section
      id="faq"
      ref={ref}
      className="relative px-4 pt-8 sm:px-10 md:px-16 lg:px-28"
      style={{ backgroundColor: site.colors.deepGreen, paddingBottom: site.faq.paddingBottom }}
    >
      <h2 className="reveal flex items-baseline justify-center gap-1 text-center font-arsenica text-4xl text-white sm:text-5xl md:text-7xl">
        <span>Q</span>
        <span className="text-xl font-light italic text-white/80 sm:text-2xl md:text-4xl">&amp;</span>
        <span>A</span>
      </h2>

      <div className="relative z-20 mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col gap-12">{site.faq.left.map(renderItem)}</div>
        <div className="flex flex-col gap-12 md:mt-24">{site.faq.right.map(renderItem)}</div>
      </div>
    </section>
  );
}

function QuoteBanner() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-full items-center justify-center bg-cover bg-center px-4 text-center lg:items-start lg:justify-center lg:pt-[34vh]"
      style={{ backgroundImage: `url(${site.quote.backgroundUrl})` }}
    >
      <SeamClouds src={site.clouds.bottom} blendFrom={site.colors.deepGreen} />
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
      {/* Each section carries its own seam clouds at its top edge. */}
      <div className="relative">
        <Showcase />
        <DoveMark className="pointer-events-none absolute -bottom-12 right-6 z-20 w-24 sm:right-10 sm:w-32 md:w-40 lg:right-16 lg:w-56 xl:w-64" />
      </div>
      <HowItWorks />
      <FAQ />
      <QuoteBanner />
      <Footer />
    </div>
  );
}
