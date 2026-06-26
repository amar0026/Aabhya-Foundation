// components/CharityFund.tsx

import { useNavigate } from "react-router-dom";

/* ── Typewriter Hook — types, holds, erases, repeats ── */

const CAUSES = [
  {
    id: 1,
    title: "Food Assistance",
    description: "Distribute nutritious meals to families and their individuals.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=260&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Educational Support",
    description: "Funding scholarships and resources for student success.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=260&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Youth Programs",
    description: "Empowering young people through supportive activities.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=260&fit=crop&q=80",
  },
];

export default function CharityFundraiserGrid() {
  const navigate = useNavigate();

  

  return (
    <section
      className="bg-[#e8f0ee] py-16 px-4 sm:px-8"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        /* ── Typewriter cursor ── */
        .cfg-cursor {
          display: inline-block;
          width: 2px;
          background: currentColor;
          margin-left: 2px;
          animation: cfgCursorBlink 0.8s step-end infinite;
          vertical-align: middle;
        }
        @keyframes cfgCursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* ── Header fade-in ── */
        .cfg-header-fade {
          animation: cfgHeaderIn 0.7s ease both;
        }
        @keyframes cfgHeaderIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Card entrance — staggered ── */
        .cfg-card-enter {
          animation: cfgCardIn 0.55s ease both;
        }
        @keyframes cfgCardIn {
          from { opacity: 0; transform: translateY(24px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* ── Card continuous float (loops forever, offset per card) ── */
        .cfg-card-float {
          animation: cfgFloat 4.5s ease-in-out infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cfg-card-enter:nth-child(2) .cfg-card-float { animation-delay: -1.5s; }
        .cfg-card-enter:nth-child(3) .cfg-card-float { animation-delay: -3s; }
        @keyframes cfgFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .cfg-card-float:hover {
          animation-play-state: paused;
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 22px 44px rgba(0,0,0,0.13);
        }

        /* ── Image zoom on card hover ── */
        .cfg-card-float:hover .cfg-img {
          transform: scale(1.08);
        }
        .cfg-img {
          transition: transform 0.55s ease;
        }

        /* ── Button pulse (repeats every 3s) ── */
        .cfg-btn {
          animation: cfgBtnPulse 3s ease-in-out infinite;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .cfg-card-enter:nth-child(2) .cfg-btn { animation-delay: -1s; }
        .cfg-card-enter:nth-child(3) .cfg-btn { animation-delay: -2s; }
        @keyframes cfgBtnPulse {
          0%, 100% { box-shadow: 0 0 0 0px rgba(13,43,43,0); }
          50%       { box-shadow: 0 0 0 5px rgba(13,43,43,0.12); }
        }
        .cfg-btn:hover {
          animation-play-state: paused;
          background: #1a4040 !important;
          transform: scale(1.03);
          box-shadow: 0 4px 16px rgba(13,43,43,0.25);
        }

        /* ── Shimmer sweep on card hover ── */
        .cfg-card-float {
          position: relative;
          overflow: hidden;
        }
        .cfg-card-float::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.18),
            transparent
          );
          transform: skewX(-20deg);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.1s;
          z-index: 10;
        }
        .cfg-card-float:hover::before {
          opacity: 1;
          animation: cfgShimmer 0.65s ease forwards;
        }
        @keyframes cfgShimmer {
          from { left: -75%; }
          to   { left: 125%; }
        }
      `}</style>

      <div className="max-w-[1920px] mx-auto">

        {/* ── Header ── */}
       

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAUSES.map((cause, i) => (
            <div
              key={cause.id}
              className="cfg-card-enter"
              style={{ animationDelay: `${i * 130}ms` }}
            >
              <div className="cfg-card-float bg-white rounded-2xl shadow-sm flex flex-col">

                {/* Image */}
                <div className="overflow-hidden h-44 rounded-t-2xl">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    loading="lazy"
                    className="cfg-img w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center text-center gap-2 px-5 py-5 flex-1">
                  <h3
                    className="font-extrabold text-[#0d2b2b] text-base leading-snug"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {cause.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed flex-1">
                    {cause.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={() =>
                      navigate("/Donation", { state: { cause: cause.title } })
                    }
                    className="cfg-btn mt-3 w-full py-2.5 rounded-lg bg-[#0d2b2b] text-white
                               text-[11px] font-bold tracking-[0.18em] uppercase"
                  >
                    Start a Fundraiser
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}