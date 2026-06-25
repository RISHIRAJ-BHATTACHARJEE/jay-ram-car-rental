import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { EyebrowLabel } from "../ui";

const reviews = [
  { 
    name: "Deborshi Choudhury", 
    role: "Local Guide", 
    stars: 5,
    description: "The service was great. Owner himself drop us to various locations in Arunachal Pradesh starting from Tinsukia.... Overall experience was awesome. He guided us the entire trip to lovely location and great food..."
  },
  { 
    name: "Kaustavnil Baruah", 
    role: "Local Guide", 
    stars: 5,
    description: "I had an amazing experience with the service of this company. I went to namsai by booking a car from them. The driver was extremely polite and respectful throughout the journey and helped us at times of need. Thankyou Jay ram car rental"
  },
  { 
    name: "AriÑDom Xaikia", 
    role: "Local Guide", 
    stars: 5,
    description: "My experience with Jay Ram Car Rental service was good,the driver was good and with calm nature,I suggest everyone whoever willing to opt for car rental in tinsukia can go for dis car rental,u will love their friendly behaviour with customers"
  },
];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

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
                {r.description}
              </p>
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center font-display font-bold text-primary dark:text-neutral-200 select-none text-sm">
                  {getInitials(r.name)}
                </div>
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
