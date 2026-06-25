import { DoorOpen, Users, ArrowLeft, ArrowRight } from "lucide-react";
import ertigaImg from "@/assets/ertiga.png";
import fronxImg from "@/assets/fronx.png";
import dzireImg from "@/assets/dzire.png";
import swiftImg from "@/assets/swift.png";
import innovaImg from "@/assets/innova.png";
import balenoImg from "@/assets/baleno.png";
import { EyebrowLabel, ArrowBubble } from "../ui";

const fleet = [
  { img: ertigaImg, tag: "MUV / Family Car", name: "Suzuki Ertiga", doors: 4, pax: 7, price: 60 },
  { img: fronxImg, tag: "Compact SUV", name: "Suzuki Fronx", doors: 4, pax: 5, price: 50 },
  { img: dzireImg, tag: "Sedan", name: "Suzuki Swift Dzire", doors: 4, pax: 5, price: 45 },
  { img: swiftImg, tag: "Hatchback", name: "Suzuki Swift", doors: 4, pax: 5, price: 40 },
  { img: innovaImg, tag: "Premium MPV", name: "Toyota Innova", doors: 4, pax: 7, price: 90 },
  { img: balenoImg, tag: "Premium Hatchback", name: "Suzuki Baleno", doors: 4, pax: 5, price: 45 },
];

export function Fleet() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <div className="flex justify-center">
          <EyebrowLabel>Our Fleets</EyebrowLabel>
        </div>
        <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-tight">
          Explore our perfect and<br />extensive fleet
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {fleet.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border p-5 bg-background hover:shadow-md transition">
              <div className="h-40 flex items-center justify-center bg-cream/30 rounded-xl p-4">
                <img src={c.img} alt={c.name} className="max-h-full object-contain hover:scale-105 transition duration-300" loading="lazy" />
              </div>
              <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-cream text-foreground">
                {c.tag}
              </span>
              <h3 className="mt-3 font-display font-bold text-lg">{c.name}</h3>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="flex items-center gap-2"><DoorOpen className="h-4 w-4" /> Doors</span>
                  <span className="text-foreground font-semibold">{c.doors}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Passengers</span>
                  <span className="text-foreground font-semibold">{c.pax}</span>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <span className="font-display font-bold text-sm text-primary uppercase tracking-wider">Contact for Pricing</span>
                </div>
                <ArrowBubble />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-3">
          <button className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
