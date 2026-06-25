import { EyebrowLabel } from "../ui";
import { Shield, DollarSign, Car, Headphones } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Uncompromising Safety",
    description: "Every vehicle in our fleet undergoes a rigorous inspection and deep sanitization before it reaches you. Your safety on the road is our absolute priority.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "We believe in honest relationships. What you see is what you pay: no hidden surcharges, no surprise fees, and full clarity from booking to drop-off.",
  },
  {
    icon: Car,
    title: "Premium Fleet Selection",
    description: "From eco-friendly city hybrids and premium executive sedans to rugged SUVs, our diverse fleet is curated to match your lifestyle and destination.",
  },
  {
    icon: Headphones,
    title: "24/7 Support & Care",
    description: "Our dedicated support team and comprehensive roadside assistance are available 24/7. No matter where you are, we're just one call away.",
  },
];

export function Values() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl bg-cream-soft rounded-[40px] py-20 px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <EyebrowLabel>Our Core Values</EyebrowLabel>
          </div>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-tight">
            Built on trust, driven by<br />our commitment to excellence
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="group relative bg-white p-8 rounded-3xl border border-border/40 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
