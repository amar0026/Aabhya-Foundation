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
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10">

        {/* Header */}
        <div className="text-center">
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
          {VOLUNTEERS.map((vol) => (
            <div key={vol.id} className="flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/5]">
                <img
                  src={vol.image}
                  alt={vol.name}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between px-1">
                <div>
                  <p className="text-sm text-left font-bold text-[#0d2b2b]">{vol.name}</p>
                  <p className="text-xs text-left  text-gray-400 mt-0.5">{vol.role}</p>
                </div>
                <a href={vol.instagram}
                   className="text-gray-900 hover:text-[#e8490f] transition-colors duration-200"
                   aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <Link to="/volunteers">
          <button className="px-10 py-3 rounded-lg bg-[#e8490f] text-white font-bold
                             tracking-[0.14em] uppercase text-sm hover:bg-[#d43d09]
                             transition-colors duration-200 shadow-sm">
            View More
          </button>
        </Link>

      </div>
    </section>
  );
}