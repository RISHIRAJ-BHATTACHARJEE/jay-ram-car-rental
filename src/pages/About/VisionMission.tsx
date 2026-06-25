import { useState } from "react";
import { Check } from "lucide-react";
import { EyebrowLabel } from "../ui";
import vision from "@/assets/vision-car.jpg";

const tabs = [
  {
    key: "vision",
    label: "Our Vision",
    title: "Pioneering excellence in car rental services",
    copy: "We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the car rental process seamless and efficient for our customers. Quality is at the heart of everything we do. We maintain a diverse fleet of well-maintained vehicles that meet the highest standards of safety and comfort.",
    bullets: [
      "Our customers are our top priority",
      "Quality is at the heart of everything we do",
      "every vehicle leaves care looking its absolute best",
    ],
  },
  {
    key: "mission",
    label: "Our Mission",
    title: "Delivering reliable journeys, every single time",
    copy: "Our mission is to redefine car rental by combining transparent pricing, premium fleet quality and personal service. We obsess over the small details so every pickup feels effortless and every drive feels yours.",
    bullets: [
      "Transparent pricing with no hidden fees",
      "Premium fleet maintained to the highest standard",
      "24/7 support across every city we operate in",
    ],
  },
  {
    key: "approach",
    label: "Our Approach",
    title: "A people-first approach to mobility",
    copy: "We blend modern technology with human hospitality. From a frictionless booking flow to drivers trained in genuine service, every touchpoint is designed around the people who ride with us.",
    bullets: [
      "Technology that disappears into the experience",
      "Hospitality-trained chauffeurs and support staff",
      "Continuous improvement informed by real feedback",
    ],
  },
];

export function VisionMission() {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="flex justify-center">
            <EyebrowLabel>Vision Mission</EyebrowLabel>
          </div>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-tight">
            Driving excellence and innovation<br />in car rental services
          </h2>

          <div className="mt-10 inline-flex p-2 rounded-full bg-cream">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`px-8 h-12 rounded-full font-semibold text-sm transition ${
                  active === t.key
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <EyebrowLabel>{current.label}</EyebrowLabel>
            <h3 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">
              {current.title}
            </h3>
            <p className="mt-5 text-muted-foreground">{current.copy}</p>
            <ul className="mt-7 space-y-4">
              {current.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden h-[520px]">
            <img src={vision} alt="Red sports car" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
