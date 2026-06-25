import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import faqImg from "@/assets/faq.jpg";
import { EyebrowLabel } from "../ui";

const qs = [
  {
    q: "What Do I Need To Rent A Car?",
    a: "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.",
  },
  {
    q: "How Old Do I Need To Be To Rent A Car?",
    a: "Most of our vehicles require renters to be at least 21 years old with a valid driver's license.",
  },
  {
    q: "Can I Rent A Car With A Debit Card?",
    a: "Yes, debit cards are accepted at most locations with a valid ID and proof of return travel.",
  },
];

export function Faq() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-[1400px] bg-cream rounded-3xl p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img src={faqImg} alt="Luxury sedan" className="w-full rounded-2xl object-cover" loading="lazy" />
        </div>
        <div>
          <EyebrowLabel>Frequently Asked Questions</EyebrowLabel>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-tight">
            Everything you need to<br />know about our services
          </h2>
          <Accordion type="single" defaultValue="0" collapsible className="mt-8">
            {qs.map((item, i) => (
              <AccordionItem key={item.q} value={String(i)} className="border-b border-border/70">
                <AccordionTrigger className="py-5 hover:no-underline text-left font-display font-bold text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
