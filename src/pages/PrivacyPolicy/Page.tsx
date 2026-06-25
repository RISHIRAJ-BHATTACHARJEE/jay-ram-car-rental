import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { EyebrowLabel } from "../ui";
import { 
  Shield, 
  Database, 
  Eye, 
  Cookie, 
  Share2, 
  Lock, 
  UserCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Info
} from "lucide-react";
import aboutBanner from "@/assets/about-banner.jpg";

export function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("info-collect");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    { id: "info-collect", title: "1. Information We Collect", icon: Database },
    { id: "info-use", title: "2. How We Use Information", icon: Eye },
    { id: "cookies", title: "3. Cookies Policy", icon: Cookie },
    { id: "third-party", title: "4. Third-Party Services", icon: Share2 },
    { id: "data-protection", title: "5. Data Protection", icon: Lock },
    { id: "data-sharing", title: "6. Data Sharing", icon: Shield },
    { id: "user-rights", title: "7. Your Rights", icon: UserCheck },
    { id: "contact-info", title: "8. Contact Information", icon: Mail },
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
            src={aboutBanner} 
            alt="Secure database protection banner" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight">Privacy Policy</h1>
            <div className="mt-4 flex items-center gap-2 font-medium text-sm md:text-base">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span className="text-primary">/</span>
              <span className="text-primary">Privacy Policy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="pt-20 pb-4 px-6 max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <EyebrowLabel>Privacy & Trust</EyebrowLabel>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">
            How We Protect & Manage Your Information
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
            At Jay Ram Car Rentals, your privacy is our top priority. This Privacy Policy outlines what user data we collect, how we securely use and store it, and your rights concerning your personal information.
          </p>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="pb-28 px-6 max-w-7xl mx-auto mt-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-4 sticky top-28 bg-cream/30 border border-border p-6 rounded-[24px] hidden lg:block">
            <h3 className="font-display font-bold text-lg mb-4 text-foreground/90 px-2">Table of Contents</h3>
            <nav className="space-y-1">
              {sections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleScrollTo(sec.id)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-sm" 
                        : "hover:bg-cream hover:text-primary text-muted-foreground"
                    }`}
                  >
                    <Icon className={`h-4.5 w-4.5 shrink-0 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                    <span>{sec.title}</span>
                  </button>
                );
              })}
            </nav>
            <div className="mt-8 p-5 bg-primary/5 rounded-2xl border border-primary/10 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                <Info className="h-4.5 w-4.5" />
                <span>Last Updated</span>
              </div>
              <p>June 22, 2026</p>
              <p className="mt-1">For any queries regarding this policy, please reach out to our privacy officer via details listed in section 8.</p>
            </div>
          </aside>

          {/* Policy content panels */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section 1: Information You Collect */}
            <div 
              id="info-collect" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("info-collect")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">1. Information We Collect</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                To facilitate your vehicle booking and deliver a premium, personalized service, we collect necessary personal details. The categories of information we collect include:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Name",
                  "Phone number",
                  "Email address",
                  "Pickup & drop-off locations",
                  "Travel dates and times",
                  "Special requests",
                  "IP address and browser/device information",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-medium text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-cream/40 border border-border rounded-xl">
                <p className="text-xs text-muted-foreground font-medium">
                  <strong className="text-foreground font-semibold">Payment Details:</strong> If online payments are accepted, please note that payment processing is handled securely and directly by our secure third-party payment gateway partners (such as Razorpay or Stripe). We do not store your complete credit card information or payment credentials on our servers.
                </p>
              </div>
            </div>

            {/* Section 2: How You Use the Information */}
            <div 
              id="info-use" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("info-use")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">2. How We Use the Information</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                The information we gather is utilized to streamline our car rental operations and provide a seamless customer experience. We use your information to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Process bookings and reserve fleet vehicles",
                  "Contact customers regarding active and upcoming reservations",
                  "Provide 24/7 dedicated customer support",
                  "Send booking confirmations, updates, and service notifications",
                  "Analyze website analytics to improve website performance",
                  "Identify and prevent fraudulent activities",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">{idx + 1}</span>
                    </span>
                    <span className="text-sm font-medium text-foreground/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Cookies */}
            <div 
              id="cookies" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("cookies")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Cookie className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">3. Cookies Policy</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                Our website uses standard browser cookies and tracking technologies to enhance user experiences and optimize navigation speeds. We use cookies for the following purposes:
              </p>
              <div className="space-y-4">
                {[
                  { title: "Analytics", desc: "Allows us to understand how users interact with our website, which pages are visited most, and help us optimize site layouts." },
                  { title: "Performance", desc: "Remembers system parameters to reduce page load speeds and ensure smooth transitions." },
                  { title: "Remembering Preferences", desc: "Preserves your customized choices, such as location and language settings, to save you time on repeat visits." }
                ].map((cookie, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl border border-border bg-cream/10">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-display font-semibold text-sm text-foreground">{cookie.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{cookie.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Third-Party Services */}
            <div 
              id="third-party" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("third-party")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Share2 className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">4. Third-Party Services</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                To support advanced features, optimize locations, and securely process payments, we integrate reliable third-party services. These third parties include:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Google Analytics", use: "For website traffic analysis" },
                  { name: "Google Maps", use: "For pickup and drop-off location accuracy" },
                  { name: "WhatsApp Business API", use: "For real-time dispatch details and notifications" },
                  { name: "Secure Payment Gateways (Razorpay, Stripe)", use: "For secure encryption of online transactions" },
                  { name: "CRM & Booking Software", use: "For reservation database management" },
                ].map((serv, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-cream/20 p-3 rounded-xl border border-border/40">
                    <span className="h-5 w-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <div>
                      <strong className="block text-xs font-semibold text-foreground">{serv.name}</strong>
                      <span className="text-xs text-muted-foreground">{serv.use}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5: Data Protection */}
            <div 
              id="data-protection" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("data-protection")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">5. Data Protection</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                Jay Ram Car Rentals is committed to protecting your sensitive information. We implement a variety of security measures to maintain the safety of your personal data:
              </p>
              <ul className="space-y-3.5 mb-2">
                {[
                  "Secure Sockets Layer (SSL) encryption protocol across the entire site architecture.",
                  "Strict access controls restricting customer data to only authorized operational personnel.",
                  "Regular software security assessments and database system updates to protect against unauthorized breaches.",
                  "Secure hashing procedures for storing any authentication credentials."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">{idx + 1}</span>
                    </span>
                    <span className="text-sm font-medium text-foreground/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 6: Data Sharing */}
            <div 
              id="data-sharing" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("data-sharing")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">6. Data Sharing</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                We believe in complete transparency and do not compromise your information. Our commitments are:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-5 rounded-2xl border border-destructive/20 bg-destructive/5">
                  <div className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-destructive">No Selling of Data</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      We absolutely do not sell, trade, lease, or rent customer personal data to third-party marketing companies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl border border-primary/20 bg-primary/5">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-primary">Conditional Sharing</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      We only share essential customer information with trusted service providers to run booking logistics (like SMS alerts or payment clearing) or when legally required by law enforcement or judicial orders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: User Rights */}
            <div 
              id="user-rights" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("user-rights")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <UserCheck className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">7. Your Rights</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                As a client, you maintain complete ownership over your personal data. Under data protection regulations, you can contact us to exercise the following rights:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "View Your Data", desc: "Request a copy of all the personal information we hold in our active database." },
                  { title: "Correct Inaccuracies", desc: "Request correction of incomplete or outdated personal information." },
                  { title: "Delete Your Data", desc: "Request erasure of your customer profile details, subject to compliance requirements." },
                  { title: "Withdraw Consent", desc: "Opt-out from marketing emails, SMS logs, or customer satisfaction reviews." }
                ].map((right, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-border bg-cream/15">
                    <h4 className="font-display font-semibold text-sm text-foreground">{right.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{right.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 8: Contact Information */}
            <div 
              id="contact-info" 
              className="bg-background border border-border p-8 md:p-10 rounded-[32px] hover:shadow-md transition-shadow duration-300"
              onClick={() => setActiveSection("contact-info")}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-2xl">8. Contact Information</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                If you have questions about this policy, want to request deletion of data, or need details about how your data is handled, please get in touch with our operations center:
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
