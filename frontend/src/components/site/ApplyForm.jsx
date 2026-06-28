import { useState } from "react";
import { Send, MessageCircle, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { UNIVERSITIES, FIELDS, CONTACT } from "@/lib/data";

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    university: "",
    field: "",
    message: "",
  });
  const [channel, setChannel] = useState("whatsapp"); // 'whatsapp' | 'email'

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const buildMessage = () => {
    return `*New Application — YANKABA*

*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Nationality:* ${form.nationality}
*Preferred University:* ${form.university}
*Field of Study:* ${form.field}

*Message:*
${form.message || "—"}`;
  };

  const validate = () => {
    const required = [
      "name",
      "email",
      "phone",
      "nationality",
      "university",
      "field",
    ];
    for (const k of required) {
      if (!form[k]) {
        toast.error("Please fill in all required fields", {
          description: `Missing: ${k.charAt(0).toUpperCase() + k.slice(1)}`,
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (channel === "whatsapp") {
      const url = `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
        buildMessage()
      )}`;
      window.open(url, "_blank", "noopener,noreferrer");
      toast.success("Opening WhatsApp…", {
        description: "We'll respond within 24 hours.",
      });
    } else {
      const subject = `New Application — ${form.name}`;
      const body = buildMessage().replace(/\*/g, "");
      const url = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
      toast.success("Opening your email client…");
    }
  };

  const fieldCls =
    "w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#7a0016] focus:ring-4 focus:ring-[#E63946]/10 transition-all";
  const labelCls =
    "block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest";

  return (
    <section
      id="apply"
      data-testid="apply-section"
      className="py-24 lg:py-32 bg-gradient-to-br from-white via-[#fff5f5] to-white relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #7a0016 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-white border border-[#E63946]/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7a0016]">
            Apply Now
          </span>
          <h2 className="mt-6 font-display font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tighter text-gray-900">
            Take the{" "}
            <span className="text-brand-gradient">first step</span>.
          </h2>
          <p className="mt-5 text-base lg:text-lg text-gray-600 leading-relaxed">
            Fill out the form, choose how to send your application, and our
            admissions team will respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT: info panel */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#7a0016] rounded-3xl p-7 text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, #E63946 0%, transparent 50%)",
                }}
              />
              <div className="relative">
                <Sparkles className="text-[#ffb8c0]" size={22} />
                <h3 className="mt-4 font-display font-extrabold text-2xl leading-tight">
                  Why students choose YANKABA
                </h3>
                <ul className="mt-6 space-y-3">
                  {[
                    "Free initial consultation",
                    "100% scholarship pathways",
                    "End-to-end visa support",
                    "Trusted by 1000+ students",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2
                        size={16}
                        className="text-[#ffb8c0] mt-0.5 shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={`https://wa.me/${CONTACT.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-2 border-gray-200 hover:border-[#25D366] rounded-2xl p-5 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#25D366] grid place-items-center">
                  <MessageCircle className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                    Or chat directly
                  </p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-[#25D366] transition-colors">
                    {CONTACT.whatsapp}
                  </p>
                </div>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="block bg-white border-2 border-gray-200 hover:border-[#E63946] rounded-2xl p-5 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-gradient grid place-items-center">
                  <Mail className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                    Email us
                  </p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-[#E63946] transition-colors break-all">
                    {CONTACT.email}
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* RIGHT: FORM */}
          <form
            className="lg:col-span-8 bg-white border border-gray-200 rounded-3xl p-7 lg:p-10 shadow-xl"
            data-testid="application-form"
            onSubmit={handleSubmit}
          >
            {/* Channel switcher */}
            <div className="mb-7">
              <p className={labelCls}>Send my application via</p>
              <div className="grid grid-cols-2 gap-2 p-1.5 bg-gray-100 rounded-2xl">
                <button
                  type="button"
                  onClick={() => setChannel("whatsapp")}
                  data-testid="channel-whatsapp"
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    channel === "whatsapp"
                      ? "bg-[#25D366] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setChannel("email")}
                  data-testid="channel-email"
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    channel === "email"
                      ? "bg-[#7a0016] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Mail size={16} />
                  Email
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className={labelCls}>Full Name *</label>
                <input
                  type="text"
                  data-testid="form-name"
                  value={form.name}
                  onChange={update("name")}
                  required
                  className={fieldCls}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className={labelCls}>Email *</label>
                <input
                  type="email"
                  data-testid="form-email"
                  value={form.email}
                  onChange={update("email")}
                  required
                  className={fieldCls}
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className={labelCls}>Phone *</label>
                <input
                  type="tel"
                  data-testid="form-phone"
                  value={form.phone}
                  onChange={update("phone")}
                  required
                  className={fieldCls}
                  placeholder="+234 XXX"
                />
              </div>
              <div>
                <label className={labelCls}>Nationality *</label>
                <input
                  type="text"
                  data-testid="form-nationality"
                  value={form.nationality}
                  onChange={update("nationality")}
                  required
                  className={fieldCls}
                  placeholder="Nigerian"
                />
              </div>
              <div>
                <label className={labelCls}>Preferred University *</label>
                <select
                  data-testid="form-university"
                  value={form.university}
                  onChange={update("university")}
                  required
                  className={fieldCls}
                >
                  <option value="">Select a university</option>
                  {UNIVERSITIES.map((u) => (
                    <option key={u.name} value={u.name}>
                      {u.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>Field of Study *</label>
                <select
                  data-testid="form-field"
                  value={form.field}
                  onChange={update("field")}
                  required
                  className={fieldCls}
                >
                  <option value="">Select field of study</option>
                  {FIELDS.map((f) => (
                    <option key={f.name} value={f.name}>
                      {f.name}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>Additional Message</label>
                <textarea
                  rows={4}
                  data-testid="form-message"
                  value={form.message}
                  onChange={update("message")}
                  className={fieldCls}
                  placeholder="Tell us about your goals…"
                />
              </div>
            </div>

            <button
              type="submit"
              data-testid={
                channel === "whatsapp"
                  ? "form-submit-whatsapp"
                  : "form-submit-email"
              }
              className={`group mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-white text-sm font-bold rounded-full transition-all shadow-lg hover:-translate-y-0.5 ${
                channel === "whatsapp"
                  ? "bg-[#25D366] hover:bg-[#1ebe5d] shadow-[#25D366]/30"
                  : "bg-[#7a0016] hover:bg-[#E63946] shadow-[#7a0016]/30"
              }`}
            >
              {channel === "whatsapp" ? (
                <>
                  <MessageCircle size={16} />
                  Send Application via WhatsApp
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Application via Email
                </>
              )}
            </button>

            <p className="mt-5 text-xs text-gray-500 leading-relaxed text-center">
              By submitting this application, you&apos;ll be connected directly
              with our admissions team. We&apos;ll respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
