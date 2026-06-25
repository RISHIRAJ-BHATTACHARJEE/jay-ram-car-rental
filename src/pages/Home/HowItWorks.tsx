
import how from "@/assets/how-it-works.jpg";
import { EyebrowLabel, Asterisk } from "../ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";

const steps = [
  {
    n: "1.",
    title: "Browse And Select",
    body: "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.",
  },
  {
    n: "2.",
    title: "Book And Confirm",
    body: "Confirm your booking in a few clicks and receive instant confirmation by email.",
  },
  {
    n: "3.",
    title: "Book And Enjoy",
    body: "Pick up your car at the chosen location and enjoy the ride — we handle the rest.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <EyebrowLabel>How It Work</EyebrowLabel>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-tight">
            Streamlined processes for a hassle-free experience
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg">
            Our streamlined process ensures a seamless car rental experience from start to finish.
            With easy online booking, flexible pick-up and drop-off options.
          </p>

          <Accordion type="single" defaultValue="0" collapsible className="mt-8">
            {steps.map((s, i) => (
              <AccordionItem key={s.title} value={String(i)} className="border-b border-border">
                <AccordionTrigger className="py-5 hover:no-underline">
                  <span className="flex items-center gap-4 font-display font-bold text-lg text-left">
                    <span className="text-muted-foreground">{s.n}</span>
                    {s.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-10">
                  {s.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="relative">
          <div className="rounded-[50%] overflow-hidden h-[560px] mx-auto max-w-[460px] border-4 border-cream">
            <img src={how} alt="Driver" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <Asterisk className="absolute -right-2 top-10 text-7xl" />
          <span className="absolute left-6 bottom-6 text-3xl text-primary">✦</span>
          <div className="absolute right-2 bottom-10 bg-primary text-primary-foreground rounded-2xl p-5 w-56">
            <p className="text-2xl font-display font-bold">500+</p>
            <p className="text-sm leading-tight mt-1">Trusted domestic clients</p>
            <div className="mt-3 flex -space-x-2">
              {["bg-white/90", "bg-white/80", "bg-white/70"].map((c, i) => (
                <span key={i} className={`h-8 w-8 rounded-full ${c} border-2 border-primary`} />
              ))}
              <span className="h-8 w-8 rounded-full bg-cream text-primary text-xs font-bold flex items-center justify-center border-2 border-primary">
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
