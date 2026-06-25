import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { EyebrowLabel, PillButton } from "../ui";

// Import banner asset
import whyChooseBanner from "@/assets/why-choose.jpg";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Email Support",
      detail: "jayramcarrental@gmail.com",
      // sub: "Average response: under 2 hours",
      action: "mailto:jayramcarrental@gmail.com",
      actionLabel: "Email Us"
    },
    {
      icon: Phone,
      title: "Phone & Call Support",
      detail: "+91 70024 36100",
      // sub: "Toll-free 24/7 client hotline",
      action: "tel:+917002436100",
      actionLabel: "Call Us"
    },
    {
      icon: MapPin,
      title: "Office Location",
      detail: "West sripuria, Tinsukia, Assam 786145",
      // sub: "London, NW1 6XE, United Kingdom",
      action: "#",
      actionLabel: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Open 24/7 Support",
      // sub: "Active support agents online",
      action: "#",
      actionLabel: "View Details"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="px-4 pt-4">
        <div className="relative mx-auto max-w-[1400px] h-[420px] rounded-[40px] overflow-hidden">
          <img
            src={whyChooseBanner}
            alt="Customer service representative answering calls"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight">Contact Us</h1>
            <div className="mt-4 flex items-center gap-2 font-medium text-sm md:text-base">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span className="text-primary">/</span>
              <span className="text-primary">Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center">
            <EyebrowLabel>Get In Touch</EyebrowLabel>
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
            We Are Always Here For You
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have questions about bookings, custom enterprise fleet solutions, or partner accounts? Feel free to reach out to our team.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl border border-border bg-background p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display font-bold text-lg text-foreground">{item.title}</h3>
                <span className="mt-3 font-semibold text-foreground/90 text-sm md:text-base break-all px-2">{item.detail}</span>
                {/* <p className="mt-1.5 text-xs text-muted-foreground/80">{item.sub}</p> */}
                <a
                  href={item.action}
                  className="mt-6 text-xs font-bold uppercase tracking-wider text-primary hover:underline hover:text-primary-foreground/90 transition-colors"
                >
                  {item.actionLabel}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form & Support Details Section */}
      <section className="pb-28 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-background border border-border p-10 md:p-10 rounded-[32px] shadow-sm">
            <h3 className="font-display font-bold text-3xl mb-2 flex items-center gap-3">
              <MessageSquare className="h-7 w-7 text-primary" />
              Send Us A Message
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Fill out the form below and our operations support desk will analyze your request and follow up shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-cream/20 text-sm focus:outline-none focus:ring-[3px] focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-cream/20 text-sm focus:outline-none focus:ring-[3px] focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of message (optional)"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-cream/20 text-sm focus:outline-none focus:ring-[3px] focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us what you need help with..."
                  className="w-full p-4 rounded-xl border border-border bg-cream/20 text-sm focus:outline-none focus:ring-[3px] focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <PillButton variant="primary" withArrow={false}>
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4 shrink-0" />
                    <span>Send Message</span>
                  </span>
                </PillButton>
              </div>

              {submitted && (
                <div className="mt-4 p-4 bg-primary/10 border border-primary/20 text-primary font-medium text-sm rounded-xl animate-fade-in">
                  Thank you! Your message has been sent successfully. We will follow up soon.
                </div>
              )}
            </form>
          </div>

          {/* Support Info Column */}
          <div className="lg:col-span-5 space-y-8">

            {/* Quick Assist Info */}
            <div className="bg-cream rounded-[32px] p-10 md:p-10 border border-border">
              <EyebrowLabel>Quick Support</EyebrowLabel>
              <h4 className="mt-4 font-display font-bold text-2xl">Need Immediate Booking Help?</h4>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                If you are looking to book a vehicle immediately or have urgent questions regarding an active rental, please contact our dispatch team via telephone directly.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Call Dispatch Hotline</span>
                  <a href="tel:+15550100100" className="font-display font-bold text-lg hover:text-primary transition-colors">+1 555 010 0100</a>
                </div>
              </div>
            </div>

            {/* Corporate/Partnership Info */}
            <div className="bg-background rounded-[32px] p-10 md:p-10 border border-border">
              <h4 className="font-display font-bold text-xl">Corporate & Fleet Partnerships</h4>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Are you looking to integrate commercial car rentals for corporate travel, employees, or events? Contact our account managers at <a href="mailto:partners@novaride.com" className="text-primary hover:underline font-semibold">partners@novaride.com</a>.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
