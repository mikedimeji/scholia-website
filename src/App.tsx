import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const WAITLIST_URL = "https://scholia.framer.website";
const HERO_VIDEO =
  "https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/cloudinarry%20to%20cloudflare/baby-track-video_crqby5.mp4";
const CLOUD_IMG =
  "https://res.cloudinary.com/dsdhxhhqh/image/upload/v1781500777/cloude_vj4pjv.png";
const BOTTOM_VIDEO =
  "https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/cloudinarry%20to%20cloudflare/track-video_2_haxdch.mp4";

function Logo({ className }: { className?: string }) {
  return (
    <img src="/s-mark.png" className={className} alt="Scholia" />
  );
}

/**
 * Background media that always moves:
 * - .mp4/.webm/etc → plays as a looping video
 * - anything else (jpg/png/...) → rendered as an <img> with a slow
 *   Ken Burns zoom, so future static images still animate.
 */
function MovingMedia({
  src,
  className,
  videoClassName,
}: {
  src: string;
  className?: string;
  videoClassName?: string;
}) {
  const isVideo = /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(src);
  if (isVideo) {
    return (
      <video
        className={videoClassName ?? className}
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }
  return (
    <motion.img
      src={src}
      alt=""
      className={className}
      initial={{ scale: 1 }}
      animate={{ scale: 1.15 }}
      transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    />
  );
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });
  const cloudYDesktop = useTransform(scrollY, [0, 300], [0, -100]);
  const cloudYMobile = useTransform(scrollY, [0, 300], [0, -24]);

  return (
    <main
      ref={containerRef}
      className="h-screen overflow-y-auto overflow-x-hidden font-manrope bg-black relative"
    >
      {/* ============ Section 1 — Video Hero ============ */}
      <section className="relative h-screen w-full flex-shrink-0 overflow-hidden">
        <MovingMedia
          src={HERO_VIDEO}
          className="absolute inset-0 z-10 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-30 pointer-events-none" />

        {/* Top-left logo block */}
        <div className="absolute top-[24px] left-[20px] md:top-[64px] md:left-[64px] pointer-events-auto max-w-[calc(100vw-140px)] md:max-w-none z-40">
          <div className="flex flex-row gap-[16px] md:gap-[24px] items-center">
            <Logo className="w-12 h-12 md:w-16 md:h-16 text-white" />
            <p className="text-white text-[11px] md:text-[16px] w-[112px] md:w-auto leading-[1.2] font-semibold tracking-[0.02em]">
              <span className="hidden md:block">
                The AI Companion
                <br />
                For Paper Books.
                <br />
                Read On.
              </span>
              <span className="block md:hidden">
                The AI Companion
                <br />
                For Paper Books.
                <br />
                Read On.
              </span>
            </p>
          </div>

          {/* Left description (desktop only) */}
          <div className="hidden md:flex mt-[400px] flex-col gap-[24px] w-full max-w-[320px] text-white text-[14px] font-normal leading-relaxed">
            <p>
              Photograph any page. Scholia knows the book, finds your place, and answers
              anything — without spoiling what&rsquo;s ahead.
            </p>
            <p>
              Built for every edition. Anchored by your book&rsquo;s text, not page numbers.
            </p>
          </div>
        </div>

        {/* Top-right CTA */}
        <a
          href={WAITLIST_URL}
          target="_blank"
          rel="noreferrer"
          className="absolute top-[24px] right-[20px] md:top-[64px] md:right-[64px] z-40 px-5 py-3 md:px-10 md:py-7 border border-white rounded-[100%] text-white text-[12px] md:text-[18px] font-italiana uppercase tracking-widest hover:bg-white/10 hover:backdrop-blur-[48px] transition-all duration-300 cursor-pointer bg-black/10 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
        >
          Get started
        </a>

        {/* Bottom heading */}
        <div className="absolute bottom-[32px] left-[20px] right-[20px] md:left-auto md:bottom-[64px] md:right-[64px] md:max-w-[1200px] text-left md:text-right z-40">
          <div className="md:hidden flex flex-col gap-[16px] max-w-[280px] text-white text-[12px] font-normal mb-[32px]">
            <p>Photograph any page. Scholia knows the book and finds your place.</p>
            <p>Ask anything — no spoilers past where you are.</p>
          </div>
          <h1 className="text-white text-[36px] leading-[1.1] md:text-[96px] font-italiana md:leading-[88px]">
            <span className="hidden md:block">
              Your Book Already
              <br />
              Knows Where
              <br />
              You Are.
            </span>
            <span className="block md:hidden text-[32px]">
              Your Book Already
              <br />
              Knows Where You Are.
            </span>
          </h1>
        </div>
      </section>

      {/* ============ Section 2 — Red Background ============ */}
      <section className="relative min-h-screen w-full bg-[#2D4A2D] flex flex-col z-10">
        {/* Cloud transition overlays */}
        <motion.div
          style={{ y: cloudYDesktop }}
          className="hidden md:block absolute top-0 left-0 w-full z-[100] pointer-events-none -translate-y-1/2"
        >
          <img src={CLOUD_IMG} className="w-full h-auto block" referrerPolicy="no-referrer" alt="" />
        </motion.div>
        <motion.div
          style={{ y: cloudYMobile }}
          className="block md:hidden absolute top-0 left-0 w-full z-[100] pointer-events-none -translate-y-1/2"
        >
          <img src={CLOUD_IMG} className="w-full h-auto block" referrerPolicy="no-referrer" alt="" />
        </motion.div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center w-full pt-[100px] md:pt-[400px]">
          <div className="flex flex-col items-center w-full px-8 text-center z-20 relative max-w-[900px] h-auto md:h-[620px] mx-auto">
            <Logo className="w-20 h-20 text-white" />
            <p className="text-white text-[16px] h-[100px] max-w-[400px] leading-[1.6] mb-[40px] uppercase tracking-wider mx-auto mt-[32px]">
              We built Scholia with a single purpose — to bring AI to paper books and keep
              the reader exactly where they are
            </p>
            <p className="font-marck text-white text-[120px] leading-none mb-[32px]">
              Scholia
            </p>
            <div className="mb-[100px] md:mb-24">
              <p className="text-white text-[16px] w-[400px] max-w-full font-light mb-[24px]">
                Every question is answered from the text itself, up to the page you&rsquo;re
                holding. Nothing ahead of you is ever revealed.
              </p>
              <p className="text-white text-[16px] w-[400px] max-w-full font-light">
                Your book already knows where you are. Now it can talk back.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom video block */}
        <div className="relative w-full shrink-0">
          <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#2D4A2D] to-transparent z-10 pointer-events-none" />
          <MovingMedia
            src={BOTTOM_VIDEO}
            className="w-full h-auto block object-contain"
          />
        </div>
      </section>
    </main>
  );
}
