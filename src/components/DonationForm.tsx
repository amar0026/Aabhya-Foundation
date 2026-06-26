// components/DonationForm.tsx
import { useState } from "react";

type DonationType = "love_offering" | "sponsorship" | "one_time";

export default function DonationForm() {
  const [amount,       setAmount]       = useState("");
  const [donationType, setDonationType] = useState<DonationType>("love_offering");
  const [firstName,    setFirstName]    = useState("");
  const [lastName,     setLastName]     = useState("");
  const [email,        setEmail]        = useState("");
  const [agreed,       setAgreed]       = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) return;
    console.log({ amount, donationType, firstName, lastName, email });
  }

  const inp =
    "w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 " +
    "placeholder:text-gray-400 focus:outline-none focus:border-[#e8490f] " +
    "focus:ring-2 focus:ring-[#e8490f]/10 transition-colors bg-[#faf9f7]";

  const DONATION_TYPES: { key: DonationType; label: string }[] = [
    { key: "love_offering", label: "Love Offering" },
    { key: "sponsorship",   label: "Sponsorship" },
    { key: "one_time",      label: "One Time Donation" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center  justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-2xl mx-auto  p-7">

        {/* ── Make Your Donation ── */}
        <h2 className="text-base font-bold  !text-[#0d2b2b] mb-4"
            style={{ fontFamily: "'Georgia', serif" }}>
          Make Your Donation
        </h2>

        {/* Amount input */}
        <div className="relative mb-6">
          <input
            className={inp + " pr-10"}
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            min="1"
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">
           ₹
          </span>
        </div>

        {/* ── Type Of Donation ── */}
        <h3 className="text-base font-bold text-[#0d2b2b] mb-3"
            style={{ fontFamily: "'Georgia', serif" }}>
          Type Of Donation
        </h3>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
          {DONATION_TYPES.map(({ key, label }) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer group">
              {/* Radio */}
              <div
                onClick={() => setDonationType(key)}
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors
                  ${donationType === key ? "border-[#e8490f]" : "border-gray-300 group-hover:border-gray-400"}`}
              >
                {donationType === key && (
                  <div className="w-2 h-2 rounded-full bg-[#e8490f]" />
                )}
              </div>
              <span className="text-sm text-gray-600">{label}</span>
            </label>
          ))}
        </div>

        {/* ── Personal Info ── */}
        <h3 className="text-base font-bold text-[#0d2b2b] mb-4"
            style={{ fontFamily: "'Georgia', serif" }}>
          Personal Info
        </h3>

        <div className="space-y-3 mb-4">
          {/* First + Last name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">First Name</label>
              <input
                className={inp}
                placeholder="Your First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Last Name</label>
              <input
                className={inp}
                placeholder="Your Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email Address</label>
            <input
              className={inp}
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* ── Consent checkbox ── */}
        <label className="flex items-start gap-2.5 cursor-pointer group mb-6">
          <div
            onClick={() => setAgreed(!agreed)}
            className={`mt-0.5 w-4 h-4 min-w-[16px] rounded border-2 flex items-center justify-center transition-colors
              ${agreed ? "bg-[#e8490f] border-[#e8490f]" : "border-gray-300 group-hover:border-gray-400"}`}
          >
            {agreed && (
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            )}
          </div>
          <span className="text-[11px] text-gray-400 leading-relaxed">
            By submitting this form, you confirm the accuracy of the donation amount and authorize
            the payment processing via the link sent to your provided email address.
          </span>
        </label>

        {/* ── Submit button ── */}
        <button
          onClick={handleSubmit}
          disabled={!agreed}
          className={`w-full py-3.5 rounded-xl font-bold tracking-[0.18em] uppercase text-sm
                      text-white transition-colors duration-200
                      ${agreed
                        ? "bg-[#e8490f] hover:bg-[#d43d09] cursor-pointer"
                        : "bg-[#e8490f]/50 cursor-not-allowed"}`}
        >
          Get Donate Link
        </button>

      </div>
    </div>
  );
}