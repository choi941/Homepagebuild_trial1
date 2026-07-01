import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900 border-t border-zinc-800 min-h-[60vh] flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto w-full">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 p-8 sm:p-10 bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-3xl text-white shadow-xl shadow-lime-accent/5">
            <div className="space-y-6">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
                Contact Us
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-350 leading-relaxed">
                Location: College of Human Ecology, Yonsei University. Inquiry form is on the right.
              </p>
            </div>

            {/* Details Cards */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-lime-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Email</p>
                  <p className="font-sans font-semibold text-sm hover:text-lime-accent transition-colors">
                    <a href="mailto:syu@yonsei.ac.kr">syu@yonsei.ac.kr</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-lime-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Office Phone</p>
                  <p className="font-sans font-semibold text-sm text-slate-200">(+82) 2-2123-3092</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-lime-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Location</p>
                  <p className="font-sans font-semibold text-sm text-slate-200">
                    College of Human Ecology, Yonsei University, Seoul, Korea
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle banner */}
            <div className="pt-6 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-slate-500">
              <MessageSquare className="h-4 w-4 text-lime-accent" />
              <span>We welcome inquiries in both English and Korean.</span>
            </div>
          </div>

          {/* Form Card Column */}
          <div className="lg:col-span-7 bg-zinc-950 p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-xl flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-550">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Jane Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-800 rounded-2xl font-sans text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-lime-accent transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-550">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="jane@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-800 rounded-2xl font-sans text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-lime-accent transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-550">
                  Your Message / Proposal
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Inquire about graduate admissions, research projects, etc..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-800 rounded-2xl font-sans text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-lime-accent transition-colors resize-none"
                />
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-lime-accent hover:bg-lime-accent/90 text-black rounded-2xl font-sans font-bold text-sm shadow-md shadow-lime-accent/5 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-200"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4 stroke-[2.5]" />
                  </>
                )}
              </button>

              {/* Success Notification */}
              {submitted && (
                <div className="p-4 bg-lime-accent/10 border border-lime-accent/30 rounded-2xl text-center text-lime-accent text-sm font-semibold transition-all">
                  Your message has been sent to our lab email. We will contact you soon.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
