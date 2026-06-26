// components/ContactHero.tsx

import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQ";

export default function ContactHero() {
  return (
    <section className="bg-[#f5f2eb] px-4 sm:px-8 ">
      <div
        className="max-w-6xl mx-auto rounded-3xl bg-[#f0ede3] flex flex-col
                   items-center justify-center text-center py-10 px-6"
      >
        {/* Eyebrow */}
        <p
          className="text-[#e8490f] italic font-semibold tracking-widest text-sm mb-3"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          CONTACT US
        </p>

        {/* Headline */}
        <h1
          className="!text-[#0d2b2b] font-extrabold leading-tight"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
          }}
        >
          Connect With Us Here
        </h1>
      </div>
       <ContactSection/>
       <FAQSection/>
    </section>
   
  );
}