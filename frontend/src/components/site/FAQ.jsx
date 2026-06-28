import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/data";
import { MessageCircle, HelpCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function FAQ() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="inline-block px-4 py-1.5 bg-[#fff5f5] border border-[#E63946]/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
              FAQ
            </span>
            <h2 className="mt-6 font-display font-extrabold text-4xl lg:text-5xl leading-[1.05] tracking-tighter text-gray-900">
              Common questions,{" "}
              <span className="text-brand-gradient">answered.</span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Still unsure? Reach out via WhatsApp and we&apos;ll answer
              personally.
            </p>

            <a
              href={`https://wa.me/${CONTACT.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-bold rounded-full shadow-lg shadow-[#25D366]/30 transition-colors"
            >
              <MessageCircle size={16} />
              Chat with us
            </a>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  data-testid={`faq-${i}`}
                  className="bg-[#fafafa] border border-gray-200 rounded-2xl px-6 data-[state=open]:border-[#7a0016] data-[state=open]:bg-white data-[state=open]:shadow-lg transition-all"
                >
                  <AccordionTrigger className="text-left font-display font-extrabold text-base text-gray-900 hover:no-underline py-5 group">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-white border-2 border-[#E63946] grid place-items-center shrink-0 group-data-[state=open]:bg-[#7a0016] group-data-[state=open]:border-[#7a0016] transition-colors">
                        <HelpCircle
                          size={14}
                          className="text-[#7a0016] group-data-[state=open]:text-white transition-colors"
                        />
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 leading-relaxed pl-11">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
