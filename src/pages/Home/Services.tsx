import { UserRoundCheck, Briefcase, Plane, BadgeCheck } from "lucide-react";
import { EyebrowLabel, PillButton, ArrowBubble, Asterisk } from "../ui";

const services = [
  {
    icon: UserRoundCheck,
    title: "Car Rental With Driver",
    description: "Travel in comfort and style with our certified, hospitality-trained professional drivers."
  },
  {
    icon: Briefcase,
    title: "Business Car Rental",
    description: "Sleek executive fleet options and flexible leasing plans tailored for corporate requirements."
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    description: "Stress-free airport pickups and drop-offs featuring automatic flight delay tracking."
  },
  {
    icon: BadgeCheck,
    title: "Intercity Car Rental",
    description: "Comfortable and safe highway journeys between cities with custom multi-day plans."
  },
];

export function Services() {
  return (
    <section className="relative py-28 px-6 bg-cream overflow-hidden">
      <Asterisk className="absolute left-6 bottom-10 text-[140px] text-primary/15" />
      <div className="mx-auto max-w-7xl text-center">
        <div className="flex justify-center">
          <EyebrowLabel>Our Services</EyebrowLabel>
        </div>
        <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-tight">
          Explore our wide range of<br />rental services
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-background rounded-2xl p-7 hover:shadow-lg transition border border-transparent hover:border-border"
            >
              <div className="h-16 w-16 rounded-full bg-cream flex items-center justify-center text-primary">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-8 font-display font-bold text-xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {s.description}
              </p>
              <div className="mt-8">
                <ArrowBubble />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-muted-foreground max-w-2xl mx-auto">
          Discover our range of car rental services designed to meet all your travel needs.
          From a diverse fleet of vehicles to flexible rental plans.
        </p>
        <div className="mt-8 flex justify-center">
          <PillButton>View All Service</PillButton>
        </div>
      </div>
    </section>
  );
}
