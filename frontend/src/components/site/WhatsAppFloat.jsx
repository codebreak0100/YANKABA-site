import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
        "Hi YANKABA! I'd like to learn more about studying in Egypt."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float"
      className="pulse-ring fixed bottom-6 right-6 z-40 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white grid place-items-center shadow-2xl transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
