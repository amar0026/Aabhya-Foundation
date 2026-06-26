// components/FundraiseSection.tsx
import { useState, useEffect } from "react";
import CharityFundraiserGrid from "../components/CharityFund";

/* ── Typewriter Hook — types, holds, erases, repeats ── */
function useTypewriter(text: string, speed = 70, pauseMs = 3500) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "erasing">("typing");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < text.length) {
        timeout = setTimeout(
          () => setDisplayed(text.slice(0, displayed.length + 1)),
          speed
        );
      } else {
        timeout = setTimeout(() => setPhase("erasing"), pauseMs);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(text.slice(0, displayed.length - 1)),
          speed / 2
        );
      } else {
        timeout = setTimeout(() => setPhase("typing"), 400);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, text, speed, pauseMs]);

  return displayed;
}

const CARDS = [
  {
    id: 1,
    title: "Celebrate Your Day\nWith Impact",
    description:
      "Transform your birthday celebration into a fundraiser to support causes and create impact.",
    bg: "#fde8e8",
    iconColor: "#e8490f",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" />
        <path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Honor A Special\nOne's Memory",
    description:
      "Create a tribute fundraiser to honor special, helping others while celebrating memory.",
    bg: "#fef3d8",
    iconColor: "#f59e0b",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Support Emergency\nRelief Efforts",
    description:
      "Join our urgent campaign to provide relief and support for communities affected.",
    bg: "#ede8f8",
    iconColor: "#7c5cbf",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function FundraiseSection() {
  const line1 = useTypewriter("FUNDRAISE", 90, 3500);
  const line2 = useTypewriter("Start A Fundraiser", 65, 3500);

  return (
    <section className="bg-[#f5f2eb] px-4 sm:px-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        /* ── Typewriter cursor ── */
        .fs-cursor {
          display: inline-block;
          width: 2px;
          background: currentColor;
          margin-left: 2px;
          animation: fsCursorBlink 0.8s step-end infinite;
          vertical-align: middle;
        }
        @keyframes fsCursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* ── Hero fade in ── */
        .fs-hero-fade {
          animation: fsHeroIn 0.7s ease both;
        }
        @keyframes fsHeroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Card entrance — staggered ── */
        .fs-card-enter {
          animation: fsCardIn 0.5s ease both;
        }
        @keyframes fsCardIn {
          from { opacity: 0; transform: translateY(22px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }

        /* ── Icon continuous pulse (repeats every ~3s) ── */
        .fs-icon-pulse {
          animation: fsIconPulse 3s ease-in-out infinite;
        }
        .fs-card-enter:nth-child(2) .fs-icon-pulse { animation-delay: -1s; }
        .fs-card-enter:nth-child(3) .fs-icon-pulse { animation-delay: -2s; }
        @keyframes fsIconPulse {
          0%, 100% { transform: scale(1);    box-shadow: 0 0 0 0px rgba(0,0,0,0.06); }
          50%       { transform: scale(1.08); box-shadow: 0 6px 20px rgba(0,0,0,0.10); }
        }

        /* ── Card hover lift ── */
        .fs-card-wrap {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          border-radius: 1.25rem;
          padding: 1.5rem 1rem;
        }
        .fs-card-wrap:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 36px rgba(0,0,0,0.10);
          background: #fff;
        }

        /* ── Divider animated grow on load ── */
        .fs-divider {
          height: 1px;
          background: #e5e7eb;
          width: 0%;
          animation: fsDividerGrow 0.7s ease forwards;
        }
        .fs-card-enter:nth-child(1) .fs-divider { animation-delay: 0.3s; }
        .fs-card-enter:nth-child(2) .fs-divider { animation-delay: 0.45s; }
        .fs-card-enter:nth-child(3) .fs-divider { animation-delay: 0.6s; }
        @keyframes fsDividerGrow {
          to { width: 100%; }
        }

        /* ── Icon shimmer on hover ── */
        .fs-card-wrap:hover .fs-icon-pulse {
          animation: fsIconHoverShimmer 0.6s ease forwards;
        }
        @keyframes fsIconHoverShimmer {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.15) rotate(-4deg); }
          70%  { transform: scale(1.1) rotate(3deg); }
          100% { transform: scale(1.08) rotate(0deg); }
        }
      `}</style>

      <div className="max-w-[1920px] mx-auto flex flex-col gap-12">

        {/* ── Hero banner ── */}
        <div className="fs-hero-fade bg-[#f0ede3] rounded-3xl flex flex-col items-center
                        justify-center text-center py-10 px-6">
          {/* Line 1 — typewriter */}
          <p
            className="text-[#e8490f] italic font-semibold tracking-widest text-sm mb-3"
            style={{ fontFamily: "'Georgia', serif", minHeight: "1.5em" }}
          >
            {line1}
           
          </p>

          {/* Line 2 — typewriter */}
          <h2
            className="!text-[#0d2b2b] font-extrabold leading-tight"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              minHeight: "1.4em",
            }}
          >
            {line2}
          </h2>
        </div>

        {/* ── Three cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <div
              key={card.id}
              className="fs-card-enter fs-card-wrap flex flex-col items-center text-center gap-4 px-4"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Icon circle */}
              <div
                className="fs-icon-pulse w-16 h-16 rounded-full flex items-center justify-center shrink-0 mb-1"
                style={{ background: card.bg, color: card.iconColor }}
              >
                {card.icon}
              </div>

              {/* Divider */}
              <div className="fs-divider w-full" />

              {/* Title */}
              <h3
                className="font-extrabold text-[#0d2b2b] leading-snug whitespace-pre-line"
                style={{ fontFamily: "'Georgia', serif", fontSize: "1rem" }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <CharityFundraiserGrid />
    </section>
  );
}