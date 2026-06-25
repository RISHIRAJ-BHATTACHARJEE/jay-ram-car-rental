import sport from "@/assets/cat-sports.jpg";
import conv from "@/assets/cat-convertible.jpg";
import sedan from "@/assets/cat-sedan.jpg";
import luxury from "@/assets/cat-luxury.jpg";
import { ArrowBubble } from "../ui";

const cats = [
  { img: sport, label: "Sport Car" },
  { img: conv, label: "Convertible Car" },
  { img: sedan, label: "Sedan Car" },
  { img: luxury, label: "Luxury car" },
];

export function Categories() {
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-[1400px] grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cats.map((c) => (
          <div key={c.label} className="relative h-[460px] rounded-3xl overflow-hidden group">
            <img src={c.img} alt={c.label} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40" />
            <h3 className="absolute top-6 left-6 font-display font-bold text-2xl text-white">{c.label}</h3>
            <div className="absolute bottom-6 right-6">
              <ArrowBubble />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
