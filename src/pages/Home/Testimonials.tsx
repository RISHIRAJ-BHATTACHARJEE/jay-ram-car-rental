import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import { EyebrowLabel } from "../ui";

const reviews = [
  { name: "Annette Black", role: "Project Manager", avatar: a1, stars: 5 },
  { name: "Leslie Alexander", role: "Project Manager", avatar: a2, stars: 5 },
  { name: "Alis White", role: "Project Manager", avatar: a3, stars: 4 },
];

export function Testimonials() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <div className="flex justify-center">
          <EyebrowLabel>Testimonials</EyebrowLabel>
        </div>
        <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-tight">
          What our customers are<br />saying about us
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6 text-left">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border p-7 bg-background">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5"
                    fill={i < r.stars ? "currentColor" : "none"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="mt-5 text-muted-foreground">
                Renting a car from NovaRide was a great decision. Not only did I get a reliable and
                comfortable vehicle, but the prices were also very competitive.
              </p>
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-4">
                <img src={r.avatar} alt={r.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-display font-bold">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.role}</p>
                </div>
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
