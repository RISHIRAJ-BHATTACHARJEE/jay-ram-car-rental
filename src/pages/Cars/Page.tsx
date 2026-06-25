import { useState, useEffect } from "react";
import { DoorOpen, Users, Settings, Fuel } from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { EyebrowLabel, PillButton } from "../ui";

// Import generated car images
import ertigaImg from "@/assets/ertiga.png";
import fronxImg from "@/assets/fronx.png";
import dzireImg from "@/assets/dzire.png";
import swiftImg from "@/assets/swift.png";
import innovaImg from "@/assets/innova.png";
import balenoImg from "@/assets/baleno.png";
import weddingCarImg from "@/assets/wedding-car.png";

// Import banner asset
import faqBanner from "@/assets/faq.jpg";

const carsData = [
  {
    id: "ertiga",
    name: "Suzuki Ertiga",
    category: "SUV & MPV",
    tag: "MUV / Family Car",
    img: ertigaImg,
    doors: 4,
    pax: 7,
    transmission: "Manual/Auto",
    fuel: "Petrol/CNG",
    price: 60,
    features: ["Ample luggage space", "Flexible 3rd-row seating", "Rear A/C vents"]
  },
  {
    id: "fronx",
    name: "Suzuki Fronx",
    category: "SUV & MPV",
    tag: "Compact SUV / Crossover",
    img: fronxImg,
    doors: 4,
    pax: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 50,
    features: ["Smart hybrid system", "High ground clearance", "Modern infotainment"]
  },
  {
    id: "dzire",
    name: "Suzuki Swift Dzire",
    category: "Sedan",
    tag: "Comfort Sedan",
    img: dzireImg,
    doors: 4,
    pax: 5,
    transmission: "Manual/Auto",
    fuel: "Petrol",
    price: 45,
    features: ["Spacious legroom", "Excellent mileage", "Comfortable fabric seats"]
  },
  {
    id: "swift",
    name: "Suzuki Swift",
    category: "Hatchback",
    tag: "Sporty Hatchback",
    img: swiftImg,
    doors: 4,
    pax: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 40,
    features: ["Sporty design", "Easy to park & maneuver", "USB & bluetooth audio"]
  },
  {
    id: "innova",
    name: "Toyota Innova",
    category: "SUV & MPV",
    tag: "Premium Executive MPV",
    img: innovaImg,
    doors: 4,
    pax: 7,
    transmission: "Automatic",
    fuel: "Diesel/Hybrid",
    price: 90,
    features: ["Captain seats layout", "Premium sound system", "Superior highway comfort"]
  },
  {
    id: "baleno",
    name: "Suzuki Baleno",
    category: "Hatchback",
    tag: "Premium Hatchback",
    img: balenoImg,
    doors: 4,
    pax: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 45,
    features: ["LED headlamps", "Automatic climate control", "Spacious cabin interior"]
  },
  {
    id: "wedding-sclass",
    name: "Mercedes-Benz S-Class",
    category: "Wedding Special",
    tag: "Premium Luxury Sedan",
    img: weddingCarImg,
    doors: 4,
    pax: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 250,
    features: ["Subtle elegant wedding decoration", "Professional chauffeur service", "Champagne holder & luxury cabin"]
  }
];

const categories = ["All", "Hatchback", "Sedan", "SUV & MPV", "Wedding Special"];

export function CarsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredCars = activeCategory === "All"
    ? carsData
    : carsData.filter(car => car.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* Hero Header Section */}
      <section className="px-4 pt-4">
        <div className="relative mx-auto max-w-[1400px] h-[420px] rounded-[40px] overflow-hidden">
          <img 
            src={faqBanner} 
            alt="Premium car rental fleet banner" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight">Our Fleets</h1>
            <div className="mt-4 flex items-center gap-2 font-medium text-sm md:text-base">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span className="text-primary">/</span>
              <span className="text-primary">Cars</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Filter & Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center">
            <EyebrowLabel>Select Your Ride</EyebrowLabel>
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
            Explore Our Wide Range Of Vehicles
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Choose from our premium SUVs, spacious sedans, and compact hatchbacks optimized for highway safety and fuel efficiency.
          </p>

          {/* Filter tabs */}
          <div className="mt-10 inline-flex p-1.5 rounded-full bg-cream gap-1 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 h-12 rounded-full font-semibold text-sm transition-all select-none cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div 
              key={car.id} 
              className="group rounded-3xl border border-border bg-background overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              {/* Image side */}
              <div className="h-56 bg-cream/40 flex items-center justify-center p-6 relative overflow-hidden">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="max-h-full max-w-[90%] object-contain transition-transform duration-500 group-hover:scale-105" 
                />
                <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-primary text-primary-foreground">
                  {car.category}
                </span>
              </div>

              {/* Details side */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{car.tag}</span>
                <h3 className="mt-2 font-display font-bold text-2xl group-hover:text-primary transition-colors">{car.name}</h3>
                
                {/* Specs list */}
                <div className="mt-5 grid grid-cols-2 gap-y-3.5 gap-x-4 border-t border-border pt-5">
                  <div className="flex items-center gap-2.5 text-muted-foreground text-sm">
                    <Users className="h-4.5 w-4.5 text-primary/75 shrink-0" />
                    <span><strong className="text-foreground font-semibold">{car.pax}</strong> Seats</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground text-sm">
                    <DoorOpen className="h-4.5 w-4.5 text-primary/75 shrink-0" />
                    <span><strong className="text-foreground font-semibold">{car.doors}</strong> Doors</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground text-sm">
                    <Settings className="h-4.5 w-4.5 text-primary/75 shrink-0" />
                    <span className="truncate" title={car.transmission}>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground text-sm">
                    <Fuel className="h-4.5 w-4.5 text-primary/75 shrink-0" />
                    <span className="truncate" title={car.fuel}>{car.fuel}</span>
                  </div>
                </div>

                {/* Additional features list */}
                <ul className="mt-5 space-y-1.5 text-xs text-muted-foreground/80 list-disc list-inside">
                  {car.features.map((feat) => (
                    <li key={feat} className="truncate">{feat}</li>
                  ))}
                </ul>

                {/* Pricing & CTA */}
                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between gap-4">
                  <div>
                    <span className="font-display font-bold text-2xl text-foreground">${car.price}</span>
                    <span className="text-xs text-muted-foreground block">/per day</span>
                  </div>
                  <PillButton variant="primary" withArrow={true}>
                    Rent Now
                  </PillButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-24 bg-cream px-6 relative overflow-hidden text-center">
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="flex justify-center">
            <EyebrowLabel>Explore Freedom</EyebrowLabel>
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
            Ready to Find the Perfect Car for Your Journey?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred vehicle, complete your booking online in seconds, and travel with modern luxury and standard-defining security.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <PillButton variant="primary">Book A Rental</PillButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
