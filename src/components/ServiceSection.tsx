// components/ServicesSection.tsx

const SERVICES = [
  {
    id: 1,
    title: "Funding",
    description:
      "Your donations fund vital programs, transforming lives and communities.",
    bg: "#fde8e8",
    dotBorder: "#e8490f",
    iconColor: "#e8490f",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 015 5v1h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h1V7a5 5 0 015-5z"/>
        <circle cx="12" cy="14" r="2"/>
        <path d="M7 10V7a5 5 0 0110 0v3"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Food",
    description:
      "Providing nutritious food to underserved communities for healthier lives.",
    bg: "#fef3d8",
    dotBorder: "#f59e0b",
    iconColor: "#f59e0b",
  icon: (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 10h16" />
    <path d="M5 10c0-3 3-5 7-5s7 2 7 5" />
    <path d="M4 14h16" />
    <path d="M6 18h12" />
  </svg>
),
  },
  {
    id: 3,
    title: "Education",
    description:
      "Providing education and letting people build their own futures.",
    bg: "#e8e8e8",
    dotBorder: "#9ca3af",
    iconColor: "#6b7280",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Support",
    description:
      "Offering complete support services to help people overcome obstacles.",
    bg: "#ede8f8",
    dotBorder: "#7c5cbf",
    iconColor: "#7c5cbf",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#e8f0ee] py-16 px-4 sm:px-8">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center gap-12">

        {/* ── Header ── */}
        <div className="text-center">
          <p
            className="text-[#e8490f] italic font-semibold tracking-widest text-sm mb-3"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            OUR BEST SERVICES
          </p>
          <h2
            className="!text-[#0d2b2b] font-extrabold leading-tight"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
            }}
          >
            Helping The Poor, Your<br />Support Matters
          </h2>
        </div>

        {/* ── Service cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {SERVICES.map(svc => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl px-6 pt-10 pb-8 flex flex-col items-center
                         text-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300
                         group cursor-default"
            >
              {/* Dashed ring + filled circle + icon */}
              <div className="relative flex items-center justify-center mb-2">
                {/* Outer dashed ring */}
                <svg
                  width="96" height="96" viewBox="0 0 96 96"
                  className="absolute"
                  style={{ opacity: 0.45 }}
                >
                  <circle
                    cx="48" cy="48" r="44"
                    fill="none"
                    stroke={svc.dotBorder}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Inner filled circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center
                               group-hover:scale-105 transition-transform duration-300"
                  style={{ background: svc.bg, color: svc.iconColor }}
                >
                  {svc.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-extrabold text-[#0d2b2b] text-lg leading-snug"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {svc.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}