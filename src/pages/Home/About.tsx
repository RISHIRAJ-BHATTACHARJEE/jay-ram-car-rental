import { Smartphone, ShieldCheck } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import { EyebrowLabel, PillButton, Asterisk } from "../ui";

export function About() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        {/* Image cluster */}
        <div className="relative h-[560px]">
          <div className="absolute left-0 top-0 w-[62%] h-[460px] rounded-[50%] overflow-hidden border-4 border-cream">
            <img src={about1} alt="Driver" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute right-0 bottom-0 w-[55%] h-[380px] rounded-[50%] overflow-hidden border-4 border-cream">
            <img src={about2} alt="Customer" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <Asterisk className="absolute right-[40%] top-[35%] text-6xl" />
          <span className="absolute left-[45%] bottom-2 text-2xl text-primary">✦</span>
        </div>

        <div>
          <EyebrowLabel>About Us</EyebrowLabel>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
            Your trusted partner in reliable car rental
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl">
            At Jay Ram Car Rental we deliver a seamless rental experience backed by a curated fleet, fair
            pricing and dedicated round-the-clock support - so every journey starts effortlessly.
          </p>

          <div className="mt-8 space-y-6">
            {[
              {
                icon: Smartphone,
                title: "Easy Booking Process",
                copy: "We have optimized the booking process so that our clients can experience the easiest and safest service.",
              },
              {
                icon: ShieldCheck,
                title: "Convenient Pick-Up & Return Process",
                copy: "Flexible pickup and drop-off across major cities and airports, on your schedule, with no hidden fees.",
              },
            ].map((f) => (
              <div key={f.title} className="flex gap-5 pb-6 border-b border-border last:border-0">
                <div className="shrink-0 h-14 w-14 rounded-full bg-cream flex items-center justify-center text-primary">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{f.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{f.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <PillButton>Contact Us</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
