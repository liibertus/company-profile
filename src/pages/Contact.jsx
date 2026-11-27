import { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';

function Instagram({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    dates: '',
    email: '',
    phone: '',
    surfers: '1',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = [
      'Hi Mentawai Surf Journey! I would like to inquire about a surf trip:',
      `• Name: ${formData.name}`,
      `• Preferred Dates: ${formData.dates || 'Flexible'}`,
      `• Email: ${formData.email}`,
      `• Phone: ${formData.phone}`,
      `• Group Size: ${formData.surfers} surfer(s)`,
      `• Message: ${formData.message}`,
    ].join('\n');

    const waUrl = `https://wa.me/6282315509025?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setFormData({ name: '', dates: '', email: '', phone: '', surfers: '1', message: '' });
  };

  return (
    <div>
      {/* Dark Page Header */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Contact Us
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let&apos;s Plan Your Mentawai Surf Trip
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Have questions about swell seasons, Siberut ferry schedules, or
              2026/2027 dates? Send an inquiry below or chat with us directly on
              WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {/* Left Info Panel */}
          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl lg:col-span-2 sm:p-10">
            <h2 className="text-2xl font-bold">Direct Channels</h2>
            <p className="mt-2 text-sm text-slate-400">
              Fast, personal replies directly from our Mentawai Surf Journey team.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-400">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    WhatsApp Booking
                  </h3>
                  <a
                    href="https://wa.me/6282315509025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-cyan-400 hover:underline"
                  >
                    +62 823-1550-9025
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-400">
                  <Instagram size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Instagram</h3>
                  <a
                    href="https://instagram.com/mentawaisurfjourney"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-slate-300 hover:text-cyan-400"
                  >
                    @mentawaisurfjourney
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Location</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Mentawai Islands, West Sumatra, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-400">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Response Time
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Daily • Typically replies within a few hours (WIB / GMT+7)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-3 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Send a Trip Inquiry
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill out your trip details below—clicking send will format your
              inquiry straight into WhatsApp.
            </p>

            {submitted && (
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                <CheckCircle2 size={20} className="shrink-0 text-emerald-600" />
                <span>
                  WhatsApp chat opened! If it didn&apos;t launch automatically,
                  message us directly at +62 823-1550-9025.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Number of Surfers
                  </label>
                  <input
                    type="number"
                    name="surfers"
                    min="1"
                    max="20"
                    required
                    value={formData.surfers}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15"
                  />
                </div>
              </div>

              {/* email & phone number */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div> 
                  <label className="block text-sm font-semibold text-slate-700">
                    Email Address 
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15' />
                </div>
                <div> 
                  <label className="block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input 
                    type="number" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className='mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15' />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">
                  Preferred Travel Dates
                </label>
                <input
                  type="text"
                  name="dates"
                  value={formData.dates}
                  onChange={handleChange}
                  placeholder="e.g. June 10–20, 2026 or Flexible of times"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">
                  Trip Notes / Questions
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your surf level, desired trip length, or any questions..."
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
              >
                <Send size={17} />
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}