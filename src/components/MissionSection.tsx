// components/MissionSection.tsx

export default function MissionSection() {
  return (
    <section className="bg-[#e8f0ee] py-16 px-4 sm:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">

        {/* ── LEFT ── */}
        <div className="flex-1 flex text-left flex-col gap-5">
          {/* Eyebrow */}
          <p
            className="text-[#e8490f] italic font-semibold tracking-widest text-sm"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            OUR MISSION
          </p>

          {/* Headline */}
          <h2
            className="!text-[#0d2b2b] font-extrabold leading-tight"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
            }}
          >
            Committed To Achieving Our Core Goals
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            Our mission is to improve impoverished areas by offering opportunity,
            assistance, and necessary resources. Our non-profit works to enhance
            people's lives and promote sustainable development.
          </p>

          {/* Donate button */}
          <div>
            <button
              className="px-7 py-3 rounded-lg bg-[#f59e0b] text-white font-bold
                         tracking-[0.14em] uppercase text-sm hover:bg-[#e08e00]
                         transition-colors duration-200 shadow-sm"
            >
              Donate Now
            </button>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-7 flex flex-col gap-4">

          {/* Card headline */}
          <h3
            className="!text-[#0d2b2b] font-bold leading-snug text-left text-2xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Dedicated To Positive Change Through Charity
          </h3>

          {/* Card description */}
          <p className="text-sm text-gray-400 leading-relaxed text-left">
            Our charity foundation is dedicated to making a meaningful impact in
            the community. Through targeted initiatives and compassionate outreach,
            we strive to uplift lives, foster positive change, and support those in need.
          </p>

          {/* Bullet points */}
          <ul className="flex flex-col gap-2">
            {[
              "Delivering essential meals quickly to those in need.",
              "Empowering communities through quality education.",
              "Supporting women with opportunities for growth and independence..",
              "Encouraging blood donation to save precious lives.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                <svg
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="#f59e0b" className="shrink-0 mt-0.5"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                {point}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="h-px bg-gray-100 my-1" />

          {/* Founder row */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
  <div className="flex items-center gap-3 min-w-0">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 shrink-0">
      <img
        src="https://res.cloudinary.com/dquki4xol/image/upload/v1775127386/WhatsApp_Image_2026-04-02_at_4.21.18_PM_j2kl27.jpg"
        alt="Robert James"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="min-w-0">
      <p className="text-sm font-bold text-[#0d2b2b] truncate">Paritosh Shekhar Singh</p>
      <p className="text-xs text-gray-400">Founder & President</p>
    </div>
  </div>

  <span
    className="text-[#e8490f] sm:ml-5 text-xl"
    style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
  >
    Paritosh Shekhar Singh
  </span>
</div>
        </div>

      </div>

      {/* Load cursive font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');`}</style>
    </section>
  );
}