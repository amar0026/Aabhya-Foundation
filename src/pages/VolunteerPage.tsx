// VolunteersPage.tsx
// React + Vite + Tailwind CSS

import { useState, useEffect } from "react";

/* ── Typewriter Hook — types, holds, erases, repeats ── */
function useTypewriter(text: string, speed = 70, pauseMs = 3500) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "erasing">("typing");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase("erasing"), pauseMs);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length - 1)), speed / 2);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, text, speed, pauseMs]);

  return displayed;
}

/* ── Volunteer data ── */
const VOLUNTEERS = [
  { id: 1,  name: "Paritosh Shekhar Singh",role:"Founder & President",image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776494813/WhatsApp_Image_2026-04-18_at_12.15.17_PM_a2dftj.jpg" },
  { id: 2,  name: "Richik Nandi",         role: "Volunteer Lead",image: "https://res.cloudinary.com/dquki4xol/image/upload/v1775129319/WhatsApp_Image_2026-04-02_at_4.49.08_PM_uepsrw.jpg" },
  { id: 3,  name: "Amarjeet Thkaur",role:"Operations Assistant",image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776497466/WhatsApp_Image_2026-04-02_at_2.09.58_PM_ufzd47.jpg" },
  { id: 4,  name: "Soumya Singh Rajput",role: "Fundraising Manager",image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782886352/WhatsApp_Image_2026-07-01_at_11.26.14_AM_tcrlxi.jpg" },
  { id: 5,  name: "Surya Kanta Mukherjee", role: "Event Planner",image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776495575/WhatsApp_Image_2026-04-18_at_12.25.14_PM_2_q2mpsc.jpg" },
  { id: 6,  name: "Prince Sonkar", role: "Outreach Coordinator", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776324656/WhatsApp_Image_2026-04-11_at_3.29.17_AM_ylon1m.jpg" },
  { id: 7,  name: "Abhinav Singh",  role: "Social Media Manager", image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782886352/1000344095.jpg_hrj7jt.jpg" },
  { id: 8,  name: "Utkarsh Upadhaya", role: "Volunteer Lead",image: "" },
  { id: 9,  name: "Prabhakar Sharma",    role: "Operations Assistant",image: "" },
  { id: 10, name: "Shubh Chattarjee",     role: "Fundraising Manager",image: "" },
  { id: 11, name: "Sagar Khaitan",     role: "Event Planner",image: "https://res.cloudinary.com/dquki4xol/image/upload/v1782886606/WhatsApp_Image_2026-07-01_at_11.41.02_AM_blc5hj.jpg" },
  { id: 12, name: "Kalyan Nayek",     role: "Outreach Coordinator",image: "" },
 
];

/* ── Icons ── */
const InstagramIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);
const CalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default function VolunteersPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", dob: "",
    occupation: "", address: "", county: "", message: "",
  });

  /* Typewriters */
  const volLabel  = useTypewriter("Our Volunteers", 85, 3500);
  const volTitle  = useTypewriter("Our Passionate Volunteers", 60, 3500);
  const formLabel = useTypewriter("Enroll In Our Mission", 80, 3500);
  const formTitle = useTypewriter("Become A Volunteer And Join Our Community", 50, 3500);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const inputCls =
    "w-full rounded-lg bg-white border border-gray-200 px-3 py-2.5 text-xs " +
    "text-[#0d2b2b] placeholder-gray-400 outline-none focus:ring-2 " +
    "focus:ring-[#e8490f]/25 focus:border-[#e8490f]/50 transition vp-input";

  return (
    <div className="bg-white" style={{ fontFamily: "'Georgia', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        /* ── Cursor ── */
        .vp-cursor {
          display: inline-block;
          width: 2px;
          background: currentColor;
          margin-left: 2px;
          animation: vpCursorBlink 0.8s step-end infinite;
          vertical-align: middle;
        }
        @keyframes vpCursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* ── Banner fade-in ── */
        .vp-banner-fade {
          animation: vpBannerIn 0.7s ease both;
        }
        @keyframes vpBannerIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Volunteer card entrance ── */
        .vp-card-enter {
          animation: vpCardIn 0.5s ease both;
        }
        @keyframes vpCardIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* ── Card continuous float ── */
        .vp-card-float {
          animation: vpFloat 4s ease-in-out infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 1rem;
        }
        /* stagger via nth-child cycles */
        .vp-card-enter:nth-child(5n+2) .vp-card-float { animation-delay: -0.8s; }
        .vp-card-enter:nth-child(5n+3) .vp-card-float { animation-delay: -1.6s; }
        .vp-card-enter:nth-child(5n+4) .vp-card-float { animation-delay: -2.4s; }
        .vp-card-enter:nth-child(5n+5) .vp-card-float { animation-delay: -3.2s; }
        @keyframes vpFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .vp-card-float:hover {
          animation-play-state: paused;
          transform: translateY(-9px) scale(1.03);
          box-shadow: 0 18px 36px rgba(13,43,43,0.13);
        }

        /* ── Image zoom on hover ── */
        .vp-card-float:hover .vp-img {
          transform: scale(1.07);
        }
        .vp-img {
          transition: transform 0.5s ease;
        }

        /* ── Instagram icon hover spin ── */
        .vp-ig-btn {
          transition: color 0.2s, transform 0.3s;
        }
        .vp-ig-btn:hover {
          color: #e8490f;
          transform: rotate(15deg) scale(1.2);
        }

        /* ── Name underline on card hover ── */
        .vp-card-float:hover .vp-name {
          color: #e8490f;
          transition: color 0.2s ease;
        }
        .vp-name {
          transition: color 0.2s ease;
        }

        /* ── Form section fade-in ── */
        .vp-form-fade {
          animation: vpFormIn 0.8s ease both;
          animation-delay: 0.2s;
        }
        @keyframes vpFormIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Input focus lift ── */
        .vp-input {
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .vp-input:focus {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(232,73,15,0.10);
        }

        /* ── Submit button pulse (repeats) ── */
        .vp-submit-btn {
          animation: vpBtnPulse 3s ease-in-out infinite;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        @keyframes vpBtnPulse {
          0%, 100% { box-shadow: 0 4px 16px rgba(232,73,15,0.35); }
          50%       { box-shadow: 0 4px 28px rgba(232,73,15,0.60); }
        }
        .vp-submit-btn:hover {
          animation-play-state: paused;
          background: #d43d09 !important;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 24px rgba(232,73,15,0.45);
        }

        /* ── Shimmer sweep on card hover ── */
        .vp-card-float {
          position: relative;
          overflow: hidden;
        }
        .vp-card-float::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: skewX(-20deg);
          opacity: 0;
          pointer-events: none;
          z-index: 10;
        }
        .vp-card-float:hover::before {
          opacity: 1;
          animation: vpShimmer 0.65s ease forwards;
        }
        @keyframes vpShimmer {
          from { left: -75%; }
          to   { left: 125%; }
        }
      `}</style>

      {/* ════════════════════════════════════════
          SECTION 1 — Our Passionate Volunteers
      ════════════════════════════════════════ */}
      <section className="px-4 sm:px-8">

        {/* Header banner */}
        <div className="vp-banner-fade max-w-[1920px] mx-auto rounded-2xl bg-[#f5f2eb] flex flex-col
                        items-center justify-center py-10 px-6 mb-14 text-center">
          <p className="text-[#e8490f] text-sm italic font-semibold tracking-widest uppercase mb-2"
             style={{ minHeight: "1.5em" }}>
            {volLabel}
           
          </p>
          <h2
            className="!text-[#0d2b2b] font-extrabold"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", minHeight: "1.4em" }}
          >
            {volTitle}
          
          </h2>
        </div>

        {/* Volunteer grid */}
        <div className="max-w-[1920px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10">
          {VOLUNTEERS.map((v, i) => (
            <div
              key={v.id}
              className="vp-card-enter flex flex-col"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="vp-card-float">
                {/* Photo */}
                <div className="rounded-2xl overflow-hidden mb-3 bg-[#f5f2eb]"
                     style={{ aspectRatio: "4/4.3" }}>
                  <img
                    src={v.image}
                    alt={v.name}
                    className="vp-img w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name + social */}
                <div className="flex items-center justify-between gap-2 px-1">
                  <div>
                    <p className="vp-name text-[#0d2b2b] font-extrabold text-sm leading-tight">
                      {v.name}
                    </p>
                    <p className="text-gray-400 text-left text-[11px] mt-0.5">{v.role}</p>
                  </div>
                  <button className="vp-ig-btn text-gray-900 shrink-0">
                    <InstagramIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — Volunteer Enrollment Form
      ════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-8 bg-white">

        {/* Header */}
        <div className="vp-form-fade max-w-2xl mx-auto text-center mb-10">
          <p className="text-[#e8490f] italic text-2xl font-semibold tracking-widest uppercase mb-2"
             style={{ minHeight: "1.5em" }}>
            {formLabel}
          </p>
          <h2
            className="!text-[#0d2b2b] font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", minHeight: "1.4em" }}
          >
            {formTitle}
            
          </h2>
        </div>

        {/* Form card */}
        <div
          className="vp-form-fade max-w-2xl mx-auto rounded-2xl bg-[#f5f2eb] text-left p-7 sm:p-9"
          style={{ boxShadow: "0 2px 24px rgba(13,43,43,0.06)", animationDelay: "0.35s" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* ── LEFT column ── */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0d2b2b] mb-1.5">Name</label>
                <input type="text" placeholder="Your full name"
                       value={form.name} onChange={set("name")} className={inputCls} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0d2b2b] mb-1.5">Email</label>
                  <input type="email" placeholder="Your email"
                         value={form.email} onChange={set("email")} className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0d2b2b] mb-1.5">Phone</label>
                  <input type="tel" placeholder="Your phone"
                         value={form.phone} onChange={set("phone")} className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0d2b2b] mb-1.5">Date Of Birth</label>
                <div className="relative">
                  <input type="date" value={form.dob} onChange={set("dob")}
                         className={inputCls + " pr-9"} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <CalIcon />
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0d2b2b] mb-1.5">Occupation</label>
                <input type="text" placeholder="Your occupation"
                       value={form.occupation} onChange={set("occupation")} className={inputCls} />
              </div>
            </div>

            {/* ── RIGHT column ── */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0d2b2b] mb-1.5">Address</label>
                <input type="text" placeholder="Enter address"
                       value={form.address} onChange={set("address")} className={inputCls} />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0d2b2b] mb-1.5">County/State</label>
                <input type="text" placeholder="Your state / country"
                       value={form.county} onChange={set("county")} className={inputCls} />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="block text-xs font-bold text-[#0d2b2b] mb-1.5">Message</label>
                <textarea
                  placeholder="What are your hobbies and skills?"
                  value={form.message}
                  onChange={set("message")}
                  rows={5}
                  className={inputCls + " resize-none flex-1"}
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-7 flex justify-center">
            <button
              onClick={() => alert("Form submitted!")}
              className="vp-submit-btn px-12 py-3.5 rounded-xl bg-[#e8490f] text-white
                         font-bold uppercase tracking-widest text-xs"
            >
              Submit Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}