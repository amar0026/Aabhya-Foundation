// pages/GalleryPage.tsx
import { useState, useRef, useEffect } from "react";

type Category = "All" | "Food Distribution" | "Events";

interface GalleryVideo {
  id: number;
  title: string;
  category: Category;
  src: string;
 
  isNew?: boolean;
}

const VIDEOS: GalleryVideo[] = [
  {
    id: 1,
    title: "Aabhya ki Pathsala",
    category: "Events",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776328219/event_i9zfgo.mp4",
  
  },
  {
    id: 2,
    title: "1st Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1775125291/WhatsApp_Video_2026-04-02_at_3.50.46_PM_rwltty.mp4",
    
  },
  {
    id: 3,
    title: "2nd Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776326655/2nd_v8ztwe.mp4",
   
  },
  {
    id: 4,
    title: "3rd Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776334765/3rd_ozk579.mp4",
   
  },
  {
    id: 5,
    title: "4th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776334903/4th_webqzp.mp4",
    
  },
  {
    id: 6,
    title: "5th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776335045/5th_e9lusa.mp4",
   
  },
  {
    id: 7,
    title: "6th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776335054/6th_qbt8by.mp4",
   
  },
  {
    id: 8,
    title: "7th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776335031/7th_inaabk.mp4",
    
  },
  {
    id: 9,
    title: "8th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776335355/8th_nlryrm.mp4",
   
  },
  {
    id: 10,
    title: "9th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776335438/9th_gkcygs.mp4",
  
  },
  {
    id: 11,
    title: "10th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776335505/10th_mawdi5.mp4",
   
  },
  {
    id: 12,
    title: "11th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776335507/11th_xvapld.mp4",
   
  },
  {
    id: 13,
    title: "12th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776335514/12th_ffm2rr.mp4",
  },
  {
    id: 14,
    title: "13th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776335702/13th_hldyu2.mp4",
  },
  {
    id: 15,
    title: "14th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776335811/14th_roukjy.mp4",
  },
  {
    id: 16,
    title: "15th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776335733/15th_fu1s7q.mp4",
  },
  {
    id: 17,
    title: "16th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776336426/16th_a5lzbm.mp4",
  },
  {
    id: 18,
    title: "17th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776336505/17th_gk6u7t.mp4",
  },
  {
    id: 19,
    title: "18th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776336402/18th_lyz1ss.mp4",
  },
  {
    id: 20,
    title: "19th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776336405/19th_tgb0kx.mp4",
  },
  {
    id: 21,
    title: "20th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776336405/20_rllh1w.mp4",
  },
  {
    id: 22,
    title: "21st Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776336794/21_g6ehhb.mp4",
  },
  {
    id: 23,
    title: "22nd Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776337342/22_uqxlbd.mp4",
  },
  {
    id: 24,
    title: "23rd Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776337336/23_bvddhh.mp4",
  },
  {
    id: 25,
    title: "24th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776337323/24_z6wpau.mp4",
  },
  {
    id: 26,
    title: "25th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776337576/25th_ugqkp9.mp4",
  },
  {
    id: 27,
    title: "26th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776338390/26th_avdrxq.mp4",
  },
  {
    id: 28,
    title: "27th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776338395/27_dumrzv.mp4",
  },
  {
    id: 29,
    title: "28th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776339186/28th_jfbuhk.mp4",
  },
  {
    id: 30,
    title: "29th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776338404/29_db0t4z.mp4",
  },
  {
    id: 31,
    title: "30th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776338383/30th_zs71cp.mp4",
  },
  {
    id: 32,
    title: "31st Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776338377/31_bz2nmd.mp4",
  },
  {
    id: 33,
    title: "32nd Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776339157/32th_cxirjm.mp4",
  },
  {
    id: 34,
    title: "33rd Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776339154/33rd_uin7vh.mp4",
  },
  {
    id: 35,
    title: "34th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1776695121/IMG_9079_auayyt.mov",
  },
   {
    id: 36,
    title: "35th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1782484392/WhatsApp_Video_2026-06-26_at_7.55.22_PM_bvmj13.mp4",
  },
   {
    id: 37,
    title: "36th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1782484564/WhatsApp_Video_2026-06-26_at_8.05.17_PM_rupkxg.mp4",
  },
   {
    id: 38,
    title: "37th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1782485086/WhatsApp_Video_2026-06-26_at_8.09.30_PM_hzt32j.mp4",
  },
   {
    id: 39,
    title: "38th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1782485088/WhatsApp_Video_2026-06-26_at_8.14.05_PM_e3k5id.mp4",
  },
   {
    id: 40,
    title: "39th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1782485236/WhatsApp_Video_2026-06-26_at_8.16.09_PM_yvijez.mp4",
  },
   {
    id: 41,
    title: "40th Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1782485476/WhatsApp_Video_2026-06-26_at_8.19.57_PM_iaqhkl.mp4",
  },
 {
    id: 42,
    title: "41st Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1782485836/WhatsApp_Video_2026-06-26_at_8.23.19_PM_hasfdx.mp4",
  },
   {
    id: 43,
    title: " Prasad Vitran",
    category: "Events",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1782486165/WhatsApp_Video_2026-06-26_at_8.27.16_PM_e9slgj.mp4",
  },
   {
    id: 44,
    title: "42nd Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1782486557/WhatsApp_Video_2026-06-26_at_8.34.01_PM_dtyjhm.mp4",
  },
    {
    id: 45,
    title: "43rd Sankalp Sunday",
    category: "Food Distribution",
    src: "https://res.cloudinary.com/dquki4xol/video/upload/v1782486557/WhatsApp_Video_2026-06-26_at_8.38.18_PM_chjug7.mp4",
  },
  //  {
  //   id: 46,
  //   title: "44th Sankalp Sunday",
  //   category: "Food Distribution",
  //   src: "",
  // },
  //  {
  //   id: 47,
  //   title: "45th Sankalp Sunday",
  //   category: "Food Distribution",
  //   src: "",
  // },
  //  {
  //   id: 48,
  //   title: "46th Sankalp Sunday",
  //   category: "Food Distribution",
  //   src: "",
  // },
  //  {
  //   id: 49,
  //   title: "47th Sankalp Sunday",
  //   category: "Food Distribution",
  //   src: "",
  // },
  //  {
  //   id: 50,
  //   title: "48th Sankalp Sunday",
  //   category: "Food Distribution",
  //   src: "",
  // },
  // {
  //   id: 51,
  //   title: "49th Sankalp Sunday",
  //   category: "Food Distribution",
  //   src: "",
  // },
 
];

const CATEGORIES: Category[] = ["All", "Food Distribution", "Events"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}

/* ── Typewriter Hook — repeats every `pauseMs` ms ── */
function useTypewriter(text: string, speed = 70, pauseMs = 3500) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase("erasing"), pauseMs);
      }
    } else if (phase === "erasing") {
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

/* ── Video Lightbox ── */
function VideoModal({ video, onClose }: { video: GalleryVideo; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
        style={{ width: "min(360px, 90vw)", maxHeight: "90vh" }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50
                     hover:bg-black/80 flex items-center justify-center text-white transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <video
          src={video.src}
          controls
          autoPlay
          playsInline
          className="w-full bg-black"
          style={{ aspectRatio: "9/16", objectFit: "cover" }}
        />

        <div className="px-4 py-3 bg-[#0d2b2b]">
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#e8490f]">
            {video.category}
          </span>
          <h3 className="text-white font-bold text-sm mt-0.5" style={{ fontFamily: "'Georgia', serif" }}>
            {video.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

/* ── Reel Card — auto-plays muted 15s preview on hover ── */
function ReelCard({ video, onClick }: { video: GalleryVideo; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const startPreview = () => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = 0;
    el.play().catch(() => {});
    setPlaying(true);

    timerRef.current = setTimeout(() => {
      el.pause();
      el.currentTime = 0;
      setPlaying(false);
      setProgress(0);
    }, 15000);
  };

  const stopPreview = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
    setProgress(0);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleTimeUpdate = () => {
    const el = videoRef.current;
    if (!el || el.duration === 0) return;
    setProgress(Math.min((el.currentTime / 15) * 100, 100));
  };

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => { setHovered(true); startPreview(); }}
      onMouseLeave={() => { setHovered(false); stopPreview(); }}
      className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-md
                 hover:shadow-xl card-hover-anim"
      style={{ aspectRatio: "9/16" }}
    >
      <video
        ref={videoRef}
        src={video.src}
        muted
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30
                      pointer-events-none" />

      {video.isNew && (
        <span className="absolute top-3 left-3 bg-[#e8490f] text-white text-[9px] font-bold
                         tracking-[0.15em] uppercase px-2 py-1 rounded-full z-10 animate-pulse">
          NEW
        </span>
      )}

      <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white
                       text-[9px] font-semibold tracking-wide uppercase px-2 py-1 rounded-full z-10">
        {video.category === "Food Distribution" ? "🍱 Food" : "🎉 Event"}
      </span>

      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg
                          group-hover:scale-110 transition-transform duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#0d2b2b">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
        </div>
      )}

      {playing && (
        <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-10">
          <div
            className="h-full bg-[#e8490f] transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="absolute bottom-0 inset-x-0 px-3 pb-3 pointer-events-none"
           style={{ paddingBottom: playing ? "10px" : "12px" }}>
        <h3 className="text-white font-bold text-xs leading-snug line-clamp-2"
            style={{ fontFamily: "'Georgia', serif" }}>
          {video.title}
        </h3>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeVideo, setActiveVideo] = useState<GalleryVideo | null>(null);

  // Typewriter texts — repeat every ~3.5s pause then erase
  const line1 = useTypewriter("OUR GALLERY", 80, 3500);
  const line2 = useTypewriter("Moments That Matter", 65, 3500);

  // Sort by id descending — highest ordinal number first (34th → 1st)
  const filtered = [...(activeCategory === "All"
    ? VIDEOS
    : VIDEOS.filter(v => v.category === activeCategory)
  )].sort((a, b) => b.id - a.id);

  return (
    <div className="min-h-screen bg-[#f5f2eb]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        /* ── Card entrance ── */
        .reel-fade {
          animation: reelIn .4s ease both;
        }
        @keyframes reelIn {
          from { opacity: 0; transform: scale(0.93) translateY(14px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }

        /* ── Card continuous float (loops forever, each card slightly offset) ── */
        .card-hover-anim {
          animation: cardFloat 4s ease-in-out infinite;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .card-hover-anim:nth-child(2n)   { animation-delay: -1s; }
        .card-hover-anim:nth-child(3n)   { animation-delay: -2s; }
        .card-hover-anim:nth-child(4n)   { animation-delay: -0.5s; }
        .card-hover-anim:nth-child(5n)   { animation-delay: -1.7s; }
        @keyframes cardFloat {
          0%,100% { transform: translateY(0px);   }
          50%      { transform: translateY(-5px);  }
        }
        .card-hover-anim:hover {
          animation-play-state: paused;
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.18);
        }

        /* ── Shimmer on card hover ── */
        .card-hover-anim::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255,255,255,0.12) 50%,
            transparent 70%
          );
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          border-radius: inherit;
          animation: shimmerSlide 1.5s ease forwards;
          animation-play-state: paused;
        }
        .card-hover-anim:hover::after {
          opacity: 1;
          animation-play-state: running;
        }
        @keyframes shimmerSlide {
          from { background-position: 200% 0; }
          to   { background-position: -200% 0; }
        }

        /* ── Typewriter cursor blink ── */
        .tw-cursor {
          display: inline-block;
          width: 2px;
          background: currentColor;
          margin-left: 2px;
          animation: cursorBlink 0.8s step-end infinite;
          vertical-align: middle;
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* ── Hero banner fade-in ── */
        .hero-fade {
          animation: heroIn 0.8s ease both;
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Hero banner */}
      <section className="px-4 sm:px-8">
        <div className="max-w-[1920px] mx-auto mb-5 rounded-3xl bg-[#f0ede3] flex flex-col items-center
                        justify-center text-center py-10 px-6 hero-fade">

          {/* Line 1 — typewriter */}
          <p
            className="text-[#e8490f] italic font-semibold tracking-widest text-sm mb-2"
            style={{ fontFamily: "'Georgia', serif", minHeight: "1.5em" }}
          >
            {line1}
          </p>

          {/* Line 2 — typewriter (starts 600ms after line1) */}
          <h1
            className="!text-[#0d2b2b] font-extrabold leading-tight mb-3"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              minHeight: "1.4em",
            }}
          >
            {line2}
            
          </h1>

        
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-4 sm:px-8 pb-5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                ${activeCategory === cat
                  ? "bg-[#e8490f] text-white shadow-sm scale-105"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-[#e8490f] hover:text-[#e8490f]"}`}
            >
              {cat}
              {cat !== "All" && (
                <span className={`ml-1.5 text-[10px] font-bold
                  ${activeCategory === cat ? "text-white/70" : "text-gray-400"}`}>
                  ({VIDEOS.filter(v => v.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Reel grid */}
      <section className="px-4 sm:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {filtered.map((video, i) => (
              <div
                key={`${video.id}-${i}`}
                className="reel-fade"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <ReelCard video={video} onClick={() => setActiveVideo(video)} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400 text-sm">
              No videos in this category yet.
            </div>
          )}
        </div>
      </section>

      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
}