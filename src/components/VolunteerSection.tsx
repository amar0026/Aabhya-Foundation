import { Link } from "react-router-dom";

interface Volunteer {
  id: number;
  name: string;
  role: string;
  image: string;
  instagram: string;
}

const VOLUNTEERS: Volunteer[] = [
  {
    id: 1,
    name: "Amarjeet Thakur",
    role: "Coordinator",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1775119221/WhatsApp_Image_2026-04-02_at_2.09.58_PM_ozu79c.jpg",
    instagram: "#",
  },
  {
    id: 2,
    name: "Rani Shaw",
    role: "Team Management",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776926927/WhatsApp_Image_2026-04-22_at_8.24.59_PM_nxwbgg.jpg",
    instagram: "#",
  },
  {
    id: 3,
    name: "Richik Nandi",
    role: "Volunteer Lead",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1775129319/WhatsApp_Image_2026-04-02_at_4.49.08_PM_uepsrw.jpg",
    instagram: "#",
  },
  {
    id: 4,
    name: "Prince Sonkar",
    role: "Team Management",
    image: "https://res.cloudinary.com/dquki4xol/image/upload/v1776324656/WhatsApp_Image_2026-04-11_at_3.29.17_AM_ylon1m.jpg",
    instagram: "#",
  },
];

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

export default function VolunteersSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <style>{`
        /* ── Header fade-in ── */
        .vol-header-fade {
          animation: volHeaderIn 0.7s ease both;
        }
        @keyframes volHeaderIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Card entrance — staggered ── */
        .vol-card-enter {
          animation: volCardIn 0.55s ease both;
        }
        @keyframes volCardIn {
          from { opacity: 0; transform: translateY(24px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* ── Card hover lift + shimmer ── */
        .vol-card-float {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 1rem;
        }
        .vol-card-float:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 36px rgba(0,0,0,0.12);
        }
        .vol-card-float::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.25),
            transparent
          );
          transform: skewX(-20deg);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.1s;
          z-index: 10;
        }
        .vol-card-float:hover::before {
          opacity: 1;
          animation: volShimmer 0.65s ease forwards;
        }
        @keyframes volShimmer {
          from { left: -75%; }
          to   { left: 125%; }
        }

        /* ── Image zoom on hover ── */
        .vol-img {
          transition: transform 0.55s ease;
        }
        .vol-card-float:hover .vol-img {
          transform: scale(1.08);
        }

        /* ── Name/role slide-up reveal on hover ── */
        .vol-meta {
          transition: transform 0.3s ease;
        }
        .vol-card-enter:hover .vol-meta {
          transform: translateY(-2px);
        }

        /* ── Instagram icon pop ── */
        .vol-insta {
          transition: transform 0.25s ease, color 0.2s ease;
        }
        .vol-insta:hover {
          transform: scale(1.2) rotate(8deg);
        }

        /* ── Button pulse ── */
        .vol-btn {
          animation: volBtnPulse 3s ease-in-out infinite;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .vol-btn:hover {
          animation-play-state: paused;
          background: #d43d09 !important;
          transform: scale(1.03);
          box-shadow: 0 4px 16px rgba(232,73,15,0.3);
        }
        @keyframes volBtnPulse {
          0%, 100% { box-shadow: 0 0 0 0px rgba(232,73,15,0); }
          50%       { box-shadow: 0 0 0 5px rgba(232,73,15,0.15); }
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10">

        {/* Header */}
        <div className="vol-header-fade text-center">
          <p className="text-[#e8490f] italic font-semibold tracking-widest text-sm mb-2"
             style={{ fontFamily: "'Georgia', serif" }}>
            OUR VOLUNTEERS
          </p>
          <h2 className="!text-[#0d2b2b] font-extrabold"
              style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Our Passionate Volunteers
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 w-full">
          {VOLUNTEERS.map((vol, i) => (
            <div
              key={vol.id}
              className="vol-card-enter flex flex-col gap-3"
              style={{ animationDelay: `${i * 130}ms` }}
            >
              <div className="vol-card-float bg-gray-100 aspect-[4/5]">
                <img
                  src={vol.image}
                  alt={vol.name}
                  loading="lazy"
                  className="vol-img w-full h-full object-cover"
                />
              </div>
              <div className="vol-meta flex items-center justify-between px-1">
                <div>
                  <p className="text-sm text-left font-bold text-[#0d2b2b]">{vol.name}</p>
                  <p className="text-xs text-left text-gray-400 mt-0.5">{vol.role}</p>
                </div>
                <a href={vol.instagram}
                   className="vol-insta text-gray-900 hover:text-[#e8490f]"
                   aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <Link to="/volunteers">
          <button className="vol-btn px-10 py-3 rounded-lg bg-[#e8490f] text-white font-bold
                             tracking-[0.14em] uppercase text-sm shadow-sm">
            View More
          </button>
        </Link>

      </div>
    </section>
  );
}