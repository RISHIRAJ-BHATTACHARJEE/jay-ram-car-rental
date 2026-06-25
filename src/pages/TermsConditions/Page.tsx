import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { EyebrowLabel } from "../ui";
import { 
  FileText, 
  DollarSign, 
  XOctagon, 
  ShieldAlert, 
  Users, 
  Clock, 
  PlusCircle, 
  AlertTriangle, 
  AlertCircle, 
  Slash, 
  RefreshCw, 
  Scale, 
  Mail, 
  Phone, 
  MapPin, 
  Info
} from "lucide-react";
import faqBanner from "@/assets/faq.jpg";

export function TermsConditionsPage() {
  const [activeSection, setActiveSection] = useState("booking");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    { id: "booking", title: "1. Booking Policy", icon: FileText },
    { id: "pricing", title: "2. Pricing Structure", icon: DollarSign },
    { id: "cancellation", title: "3. Cancellation & Refunds", icon: XOctagon },
    { id: "driver-vehicle", title: "4. Driver & Vehicle Standards", icon: ShieldAlert },
    { id: "customer-responsibilities", title: "5. Customer Responsibilities", icon: Users },
    { id: "waiting-charges", title: "6. Waiting Charges", icon: Clock },
    { id: "additional-charges", title: "7. Additional Charges", icon: PlusCircle },
    { id: "force-majeure", title: "8. Delays & Force Majeure", icon: AlertTriangle },
    { id: "limitation-liability", title: "9. Limitation of Liability", icon: AlertCircle },
    { id: "service-refusal", title: "10. Service Refusal", icon: Slash },
    { id: "booking-changes", title: "11. Changes & Upgrades", icon: RefreshCw },
    { id: "governing-law", title: "12. Governing Law", icon: Scale },
    { id: "contact-details", title: "13. Contact Details", icon: Mail },
  ];

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="px-4 pt-4">
        <div className="relative mx-auto max-w-[1400px] h-[350px] rounded-[40px] overflow-hidden">
          <img 
            src={faqBanner} 
            alt="Car rental customer terms banner" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight">Terms & Conditions</h1>
            <div className="mt-4 flex items-center gap-2 font-medium text-sm md:text-base">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span className="text-primary">/</span>
              <span className="text-primary">Terms & Conditions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="pt-20 pb-4 px-6 max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <EyebrowLabel>User Agreement</EyebrowLabel>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">
            Terms of Service & Rental Agreement
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
            Please read these Terms & Conditions carefully before booking a vehicle with Jay Ram Car Rentals. These terms define the responsibilities, pricing policies, and service rules governing your vehicle rental.
          </p>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="pb-28 px-6 max-w-7xl mx-auto mt-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-4 sticky top-28 bg-cream/30 border border-border p-6 rounded-[24px] hidden lg:block">
            <h3 className="font-display font-bold text-lg mb-4 text-foreground/90 px-2">Agreement Sections</h3>
            <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin">
              {sections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleScrollTo(sec.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-medium transition-all ${
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-sm" 
                        : "hover:bg-cream hover:text-primary text-muted-foreground"
                    }`}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                    <span>{sec.title}</span>
                  </button>
                );
              })}
            </nav>
            <div className="mt-6 p-5 bg-primary/5 rounded-2xl border border-primary/10 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                <Info className="h-4.5 w-4.5" />
                <span>Last Updated</span>
              </div>
              <p>June 22, 2026</p>
              <p className="mt-1">By proceeding with any booking or reservation, you acknowledge acceptance of these Terms.</p>
            </div>
          </aside>

          {/* Agreement content panels */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Section 1: Booking Policy */}
            <div 
              id="booking" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("booking")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">1. Booking Policy</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  To secure a vehicle reservation, customers must complete our structured booking application. Our policies define that:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <span><strong>Booking Confirmation:</strong> Every booking request is subject to a review process. A reservation is only confirmed once you receive a formal Confirmation voucher or email from our dispatch team.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <span><strong>Advance Payment Requirements:</strong> An advance booking deposit may be required during reservation to hold specific vehicle classes during high-demand peak seasons.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <span><strong>Subject to Confirmation:</strong> Vehicle models and schedules are subject to availability. While we do our best to provide the selected vehicle, we reserve the right to offer equivalent substitutes.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2: Pricing */}
            <div 
              id="pricing" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("pricing")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">2. Pricing Structure</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  Fares and rates quoted on our site represent standard rental configurations. Final rates may vary based on several factors, including:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm font-semibold text-foreground/80 my-4">
                  {["Travel Distance (Kilometers)", "Rental Duration", "Vehicle Class & Type", "Fluctuating Fuel Prices", "Applicable Toll Charges", "Parking Fees", "Government Taxes"].map((factor, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-cream/30 p-2.5 rounded-lg border border-border/60">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>{factor}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground bg-cream/40 p-4 border border-border rounded-xl">
                  <strong>Inclusions and Exclusions:</strong> Each quote clearly specifies inclusions (e.g., standard driver hours, vehicle rental charge) and exclusions (e.g., state borders crossing taxes, extra route detours, night driving driver allowances, interstate permits). Standard tolls and parking are typically excluded unless specified.
                </p>
              </div>
            </div>

            {/* Section 3: Cancellation & Refund Policy */}
            <div 
              id="cancellation" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("cancellation")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <XOctagon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">3. Cancellation & Refund Policy</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  We understand that plans change. Our cancellations are structured to be fair and transparent:
                </p>
                <div className="space-y-3">
                  <div className="flex gap-4 p-4 border border-border rounded-xl bg-cream/20">
                    <div className="text-primary font-bold font-display text-lg shrink-0 mt-0.5">24h+</div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-foreground">Free Cancellation</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Cancel your booking up to 24 hours prior to the scheduled pickup time for a full refund of any deposit paid.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 border border-border rounded-xl bg-cream/20">
                    <div className="text-destructive font-bold font-display text-lg shrink-0 mt-0.5">&lt;24h</div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-foreground">Late Cancellation Charges</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Cancellations made within 24 hours of the scheduled pickup time may incur a processing fee or forfeit the initial deposit.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 border border-border rounded-xl bg-cream/20">
                    <div className="text-primary font-bold font-display text-lg shrink-0 mt-0.5">Timeline</div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-foreground">Refund Processing</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Eligible refunds will be credited back to your original source of payment within 5 to 7 business days, depending on bank processing cycles.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Driver & Vehicle */}
            <div 
              id="driver-vehicle" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("driver-vehicle")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">4. Driver & Vehicle Standards</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  To ensure complete safety and premium quality, Jay Ram Car Rentals maintains high quality controls:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <span><strong>Rigorous Maintenance:</strong> All vehicles in our fleet undergo scheduled maintenance checkups, safety checks, and strict cleaning prior to dispatch.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <span><strong>Licensed Chauffeurs:</strong> All assigned drivers possess valid commercial driving licenses, undergo background verifications, and have clean safety logs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <span><strong>Pre-Trip Information Sharing:</strong> Driver details, contact number, and vehicle registration numbers will be shared via SMS or WhatsApp 1 to 3 hours prior to your scheduled pickup.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5: Customer Responsibilities */}
            <div 
              id="customer-responsibilities" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("customer-responsibilities")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">5. Customer Responsibilities</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  By hiring our services, customers commit to maintaining safety standards. You agree to:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3.5 mt-2">
                  {[
                    "Provide accurate booking name, contact details, and locations.",
                    "Behave respectfully towards our drivers and staff at all times.",
                    "Refrain from illegal activities inside or involving the vehicle.",
                    "Take reasonable care of the vehicle and avoid causing any damage.",
                    "Follow driver instructions regarding seat belts and highway safety."
                  ].map((resp, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start p-3 bg-cream/25 border border-border/80 rounded-xl">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">{idx + 1}</span>
                      <span className="text-xs font-medium text-foreground/80 leading-snug">{resp}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 6: Waiting Charges */}
            <div 
              id="waiting-charges" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("waiting-charges")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">6. Waiting Charges</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  To keep our schedules running on time, waiting limits apply to arrivals:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 border border-border rounded-2xl bg-cream/10">
                    <h4 className="font-display font-semibold text-sm text-foreground mb-1">Airport Arrivals</h4>
                    <p className="text-xs text-muted-foreground">We provide a complimentary wait time of 30 to 60 minutes for airport pickups. Waiting beyond this period may incur an extra waiting charge.</p>
                  </div>
                  <div className="p-5 border border-border rounded-2xl bg-cream/10">
                    <h4 className="font-display font-semibold text-sm text-foreground mb-1">Extended Rental Duration</h4>
                    <p className="text-xs text-muted-foreground">If you exceed the booked duration limit, extra hourly waiting charges will be computed and appended to your final invoice.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Additional Charges */}
            <div 
              id="additional-charges" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("additional-charges")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <PlusCircle className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">7. Additional Charges</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  Customers are responsible for any external or operational costs incurred during the journey. These include:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-2 text-xs">
                  {["Highway Tolls", "Parking Fees", "Interstate Entry Taxes", "Night Driver Allowance", "Extra Kilometers Run", "Extra Rental Hours", "Interior Cleaning Fees"].map((item, idx) => (
                    <div key={idx} className="p-3 text-center border border-border rounded-xl bg-cream/20 font-semibold text-foreground/80">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Note: An interior cleaning fee will be charged if the vehicle is returned with excessive dirt, food spills, or pet hair requiring specialized detailing.
                </p>
              </div>
            </div>

            {/* Section 8: Delays & Force Majeure */}
            <div 
              id="force-majeure" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("force-majeure")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">8. Delays & Force Majeure</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  While we commit to absolute punctuality, Jay Ram Car Rentals is not liable for delays, cancellations, or trip disruptions caused by factors beyond our reasonable control (Force Majeure events), including:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-foreground/80 mb-2">
                  {["Heavy traffic congestion", "Severe weather conditions", "Sudden road closures or blocks", "Government transit restrictions", "Natural disasters", "Mechanical vehicle breakdowns"].map((event, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl">
                  <p className="text-xs text-muted-foreground">
                    <strong>Our Commitment:</strong> In the event of a mechanical breakdown, we will make every reasonable effort to arrange an alternative replacement vehicle as quickly as possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9: Limitation of Liability */}
            <div 
              id="limitation-liability" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("limitation-liability")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">9. Limitation of Liability</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  Jay Ram Car Rentals aims to provide reliable transport, but we do not assume liability for external losses:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0 mt-0.5">!</span>
                    <span><strong>Missed Departures:</strong> We are not responsible for missed flights, trains, or business events due to traffic, weather, or unexpected breakdowns. Customers are advised to schedule bookings with ample buffer times.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0 mt-0.5">!</span>
                    <span><strong>Personal Belongings:</strong> We are not liable for the loss or damage of luggage, devices, or personal belongings left in the vehicle. Please check the vehicle thoroughly before exiting.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0 mt-0.5">!</span>
                    <span><strong>Indirect Damages:</strong> Under no circumstances shall our company be held liable for indirect, incidental, or consequential damages resulting from our service.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 10: Service Refusal */}
            <div 
              id="service-refusal" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("service-refusal")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Slash className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">10. Service Refusal</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  Our drivers and staff have the right to work in a safe environment. We reserve the absolute right to refuse or terminate service immediately without refunds in cases of:
                </p>
                <div className="grid sm:grid-cols-3 gap-3.5 text-center mt-2">
                  {[
                    { label: "Abuse & Misconduct", desc: "Verbal abuse, physical threats, or disrespectful behavior towards the driver." },
                    { label: "Illegal Activities", desc: "Carrying contraband, illegal substances, or weapons inside the rental vehicle." },
                    { label: "Safety Concerns", desc: "Customer attempting to compromise driver control or violating highway codes." }
                  ].map((ref, idx) => (
                    <div key={idx} className="p-4 border border-border rounded-xl bg-cream/20">
                      <h4 className="font-display font-semibold text-xs text-foreground mb-1">{ref.label}</h4>
                      <p className="text-2xs text-muted-foreground leading-normal">{ref.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 11: Changes to Bookings */}
            <div 
              id="booking-changes" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("booking-changes")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">11. Changes to Bookings</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  We aim to stay flexible as travel schedules adjust. Customers can request booking modifications:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <span><strong>Modifying Details:</strong> You may adjust pickup dates, times, and routes by contacting support. Changes are subject to vehicle availability.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <span><strong>Rescheduling:</strong> Bookings can be rescheduled for future dates up to 24 hours prior to trip start without losing your booking history.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <span><strong>Upgrades:</strong> You can request vehicle model upgrades anytime before pickup, subject to paying the rate differences.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 12: Governing Law */}
            <div 
              id="governing-law" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("governing-law")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">12. Governing Law</h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p className="bg-cream/40 p-5 rounded-2xl border border-border">
                  These Terms shall be governed by and construed in accordance with the laws of <strong className="text-foreground">India</strong>. Any disputes, claims, or legal proceedings arising under these terms shall be subject to the exclusive jurisdiction of the courts of <strong className="text-foreground">Mumbai, Maharashtra</strong>.
                </p>
              </div>
            </div>

            {/* Section 13: Contact Details */}
            <div 
              id="contact-details" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("contact-details")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">13. Contact Details</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                For questions regarding reservations, modifications, or clarifications on this rental agreement, please reach out to us:
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-cream border border-border">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Email</span>
                  <a href="mailto:jayramcarrental@gmail.com" className="mt-1 font-semibold text-sm text-primary hover:underline break-all">
                    jayramcarrental@gmail.com
                  </a>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-cream border border-border">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Phone</span>
                  <a href="tel:+917002436100" className="mt-1 font-semibold text-sm text-foreground">
                    +91 70024 36100
                  </a>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-cream border border-border">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Office Address</span>
                  <span className="mt-1 font-semibold text-xs text-foreground leading-tight">
                    West sripuria, Tinsukia,<br />Assam 786145, India
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
