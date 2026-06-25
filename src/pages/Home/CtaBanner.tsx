import cta from "@/assets/cta-car.jpg";
import { PillButton } from "../ui";

export function CtaBanner() {
  return (
    <section className="px-4 py-16">
      <div
        className="relative mx-auto max-w-[1400px] rounded-3xl overflow-hidden bg-[#0d1417] p-10 md:p-16 min-h-[420px] grid lg:grid-cols-2 items-center gap-8"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="relative z-10 text-white">
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
            Ready to hit the road?<br />Book your car today !
          </h2>
          <p className="mt-5 text-white/75 max-w-md">
            Our friendly customer service team is here to help. Contact us anytime for support and inquiries.
          </p>
          <div className="mt-8">
            <PillButton>Contact Us</PillButton>
          </div>
        </div>
        <div className="relative">
          <img src={cta} alt="White sedan" className="w-full object-contain" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
