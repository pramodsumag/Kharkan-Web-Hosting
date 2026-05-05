import { CheckCircle2 } from "lucide-react";

const perks = [
  "No price hike at renewal — ever",
  "Transparent pricing with no hidden fees",
  "Cancel anytime, no questions asked",
  "30-day money-back guarantee",
];

export default function RenewalSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a237e] mb-4">
          Same price at renewal. Guaranteed.
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-10">
          Unlike other hosts that hike prices when you renew, Kharkan Technology keeps your rate the same — forever. What you sign up for is what you pay.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {perks.map((perk) => (
            <div
              key={perk}
              className="bg-blue-50 rounded-xl p-5 flex flex-col items-center gap-3 text-center border border-blue-100"
            >
              <CheckCircle2 size={28} className="text-[#1565c0]" />
              <p className="text-sm font-semibold text-[#1a237e]">{perk}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
