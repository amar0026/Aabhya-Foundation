// components/UpcomingEvents.tsx

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const EVENTS: Event[] = [
  {
    id: 1,
    title: "Community Clean-Up Day",
    date: "Every Sunday",
    time: "11:00 am - 05:00 pm",
    location: "New York",
    description:
      "Support a cause that touches hearts. Be part of our charity event for a better tomorrow.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=120&h=100&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Hope Gala Fundraiser Event",
    date: "Every Sunday",
    time: "03:00 pm - 10:00 pm",
    location: "Springfield",
    description:
      "Give back to the community at our charity event. Your presence makes a big difference!",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=120&h=100&fit=crop&q=80",
  },
];

/* ── Icons ── */
const CalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const PinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function UpcomingEvents() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">

        {/* ── LEFT: events list ── */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Header */}
          <div>
            <p
              className="text-[#e8490f] italic font-semibold tracking-widest text-sm mb-1"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              UPCOMING EVENTS
            </p>
            {/* Sankalp Sunday tagline */}
            <p
              className="text-[#f59e0b] font-bold tracking-[0.2em] uppercase text-xs mb-2"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              ✦ Sankalp Sunday — Every Sunday ✦
            </p>
            <h2
              className="!text-[#0d2b2b] font-extrabold leading-tight"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              }}
            >
              Join Our Latest<br />Upcoming Events
            </h2>
          </div>

          {/* Event cards */}
          <div className="flex flex-col gap-4">
            {EVENTS.map(ev => (
              <div
                key={ev.id}
                className="flex gap-4 bg-[#f5f2eb] rounded-2xl p-4 hover:shadow-sm
                           transition-shadow duration-200 cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-[#e8490f]">
                      <CalIcon /> {ev.date}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-[#f59e0b]">
                      <ClockIcon /> {ev.time}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-[#10b981]">
                      <PinIcon /> {ev.location}
                    </span>
                  </div>

                  {/* Title */}
                  <p
                    className="text-sm font-extrabold text-[#0d2b2b] leading-snug
                               group-hover:text-[#e8490f] transition-colors duration-200"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {ev.title}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {ev.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: donation CTA card ── */}
        <div
          className="lg:w-[280px] shrink-0 rounded-2xl overflow-hidden relative
                     flex flex-col items-center justify-end text-center min-h-[280px]"
        >
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=560&h=560&fit=crop&q=80"
            alt="Donate background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark green overlay */}
          <div className="absolute inset-0 bg-[#0d2b2b]/80" />

          {/* Sankalp Sunday badge */}
          <div className="relative z-10 mt-6 px-4 py-1.5 rounded-full border border-[#f59e0b]/50 bg-[#f59e0b]/10 mb-2">
            <span
              className="text-[10px] font-bold tracking-widest text-[#f59e0b] uppercase"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Sankalp Sunday
            </span>
          </div>

          {/* Heart icon */}
          <div className="relative z-10 w-12 h-12 rounded-full border-2 border-[#f59e0b]/60
                          flex items-center justify-center mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                 stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </div>

          {/* Text */}
          <h3
            className="relative z-10 text-white font-extrabold leading-snug px-6 mb-5"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
            }}
          >
            Your Donation Is<br />Alot To Them.<br />Donate What<br />You Can Offer!
          </h3>

          {/* CTA button */}
          <div className="relative z-10 px-6 pb-7 w-full">
            <button
              className="w-full py-3 rounded-xl bg-[#e8490f] text-white font-bold
                         tracking-[0.14em] uppercase text-xs hover:bg-[#d43d09]
                         transition-colors duration-200"
            >
              Start Donating
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}