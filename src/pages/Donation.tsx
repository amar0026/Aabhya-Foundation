// DonateSection.tsx
// React + Vite + Tailwind CSS

import { useState } from "react";
import TestimonialsSection from "../components/Testimonial";
import DonationForm from "../components/DonationForm";

type DonationType = "Love Offering" | "Sponsorship" | "One Time Donation";

export default function DonateSection() {
  const [amount, setAmount] = useState("");
  const [donationType, setDonationType] = useState<DonationType>("Love Offering");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (!amount || !firstName || !lastName || !email || !agreed) return;
    alert(`Donate link sent to ${email}!`);
  };

  const donationTypes: DonationType[] = ["Love Offering", "Sponsorship", "One Time Donation"];

  return (
    <section className="bg-white  px-4 sm:px-8" style={{ fontFamily: "'Georgia', serif" }}>

      {/* ── Top beige header banner ── */}
      <div
        className="max-w-6xl mx-auto rounded-2xl flex flex-col items-center justify-center
                   py-10 px-6 mb-12 text-center"
        style={{ background: "#f5f2eb" }}
      >
        <p
          className="text-[#e8490f] text-2xl italic font-semibold tracking-widest  uppercase mb-2"
        >
          Donation
        </p>
        <h1
          className="!text-[#0d2b2b] text-6xl font-extrabold"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
        >
          Donate Now
        </h1>
      </div>

      <DonationForm/>
      <TestimonialsSection/>
    </section>
  );
}