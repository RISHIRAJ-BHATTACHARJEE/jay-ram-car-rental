import { useEffect } from "react";
import { Check, UserCheck, Briefcase, Plane, Compass, Heart } from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { EyebrowLabel, PillButton } from "../ui";
import { useLocation } from "react-router";

// Import assets
import faqBanner from "@/assets/faq.jpg";
import driverImg from "@/assets/driver-1.jpg";
import luxuryCarImg from "@/assets/cat-luxury.jpg";
import airportImg from "@/assets/why-choose.jpg";
import intercityImg from "@/assets/vision-car.jpg";
import weddingServiceImg from "@/assets/wedding-service.png";

const servicesData = [
  {
    id: "driver",
    index: "01",
    icon: UserCheck,
    title: "Car Rental with Driver",
    subtitle: "Chauffeur-driven luxury for absolute peace of mind",
    description: "Our professional chauffeur service offers you the ultimate convenience and comfort. Whether you are traveling for business, attending a special event, or exploring the city, our hospitality-trained drivers guarantee a safe, punctual, and smooth ride.",
    bullets: [
      "Professional, certified, and hospitality-trained chauffeurs",
      "Perfect for corporate events, weddings, and local sight-seeing",
      "Full route mapping and real-time vehicle tracking"
    ],
    image: driverImg,
    imageAlt: "Professional chauffeur driver opening passenger door"
  },
  {
    id: "business",
    index: "02",
    icon: Briefcase,
    title: "Business Car Rental",
    subtitle: "Flexible fleet options tailored for corporate requirements",
    description: "Empower your corporate travel with flexible leasing options, priority dispatch, and executive cars. From single trips to long-term monthly rentals, we support your business meetings and company fleets seamlessly.",
    bullets: [
      "Custom billing cycles and monthly corporate packages",
      "Priority dispatch and premium luxury sedan options",
      "Dedicated corporate account manager for hassle-free booking"
    ],
    image: luxuryCarImg,
    imageAlt: "Sleek luxury business sedan parked in front of modern building"
  },
  {
    id: "airport",
    index: "03",
    icon: Plane,
    title: "Airport Services",
    subtitle: "Timely airport transfers with flight tracking and meet & greet",
    description: "Start or end your journey with absolute comfort. We provide prompt airport drop-offs and pickups, monitor your flight for delay adjustments, and offer personal baggage handling with a warm welcome.",
    bullets: [
      "Automatic flight delay tracking and scheduled adjustments",
      "Meet & Greet service at arrivals with personalized nameplates",
      "Flat rates with luggage assistance included"
    ],
    image: airportImg,
    imageAlt: "Luxury car waiting for passenger pickup at airport terminal"
  },
  {
    id: "intercity",
    index: "04",
    icon: Compass,
    title: "Intercity Car Rental",
    subtitle: "Comfortable highway travel for seamless journeys between cities",
    description: "Cross city borders with style and ease. Whether you need a one-way transfer or a multi-day round-trip journey, our modern and safe fleet ensures long-distance travel feels relaxing and stress-free.",
    bullets: [
      "One-way or round-trip journeys with no hidden tolls",
      "Spacious SUVs and sedans optimized for highway safety",
      "Multi-day tour packages with optional driver stays"
    ],
    image: intercityImg,
    imageAlt: "Red SUV cruising on a panoramic highway road"
  },
  {
    id: "wedding",
    index: "05",
    icon: Heart,
    title: "Wedding Car Rental",
    subtitle: "Elegant luxury cars for your special wedding day",
    description: "Make your wedding day truly unforgettable with our premium wedding car rental service. We offer pristine, decorated luxury vehicles driven by professional, chauffeured staff to ensure your special day is marked by comfort, style, and absolute elegance.",
    bullets: [
      "Subtle, elegant floral and ribbon vehicle decorations",
      "Punctual, professional, and formal-dressed chauffeurs",
      "Flexible hourly packages tailored to your ceremony schedule"
    ],
    image: weddingServiceImg,
    imageAlt: "Luxury white wedding car decorated with flowers in front of a wedding venue"
  }
];

export function ServicesPage() {
  const location = useLocation();

  // Scroll to top or specific anchor on page mount/hash change
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Brief timeout ensures React has finished mounting/rendering the element
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* Services Hero Section */}
      <section className="px-4 pt-4">
        <div className="relative mx-auto max-w-[1400px] h-[420px] rounded-[40px] overflow-hidden">
          <img 
            src={faqBanner} 
            alt="Luxury vehicle fleet" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight">Our Services</h1>
            <div className="mt-4 flex items-center gap-2 font-medium text-sm md:text-base">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span className="text-primary">/</span>
              <span className="text-primary">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Header Intro */}
      <section className="pt-24 pb-6 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <EyebrowLabel>What We Offer</EyebrowLabel>
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
            Premium Car Rental Solutions<br />Built Around Your Travel Needs
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            From luxury chauffeur services to business packages and intercity travels, we provide top-tier fleet options and seamless booking flows for a premium travel experience.
          </p>
        </div>
      </section>

      {/* Alternating Services Layout */}
      <section className="pb-28 px-6">
        <div className="mx-auto max-w-7xl divide-y divide-border/60">
          {servicesData.map((service, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = service.icon;

            return (
              <div 
                key={service.id} 
                id={service.id}
                className="py-20 first:pt-10 last:pb-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-24"
              >
                {/* Details side */}
                <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                  <div className="inline-flex items-center gap-3">
                    <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-display font-bold text-sm shrink-0">
                      {service.index}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {service.subtitle.split(" for ")[0] || service.title}
                    </span>
                  </div>
                  
                  <h3 className="mt-5 font-display font-bold text-3xl md:text-4xl leading-tight flex items-center gap-3">
                    <Icon className="h-8 w-8 text-primary shrink-0" />
                    {service.title}
                  </h3>
                  
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-medium text-sm md:text-base text-foreground/90">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9">
                    <PillButton variant="primary" withArrow={true}>
                      Book {service.title.split(" ")[0]}
                    </PillButton>
                  </div>
                </div>

                {/* Image side */}
                <div className={`${isEven ? "order-2" : "order-2 lg:order-1"} relative`}>
                  <div className="group rounded-[32px] overflow-hidden shadow-xl aspect-16/10 lg:aspect-4/3 bg-muted border border-border transition-transform duration-500 hover:scale-[1.01]">
                    <img 
                      src={service.image} 
                      alt={service.imageAlt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Booking Call To Action Banner */}
      <section className="py-24 bg-cream px-6 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <div className="flex justify-center">
            <EyebrowLabel>Fast & Easy Booking</EyebrowLabel>
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
            Ready to Travel? Get Your Premium Car Rental Today
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Choose your vehicle, customize your rental services, and experience a ride designed around your standard of comfort and excellence.
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
