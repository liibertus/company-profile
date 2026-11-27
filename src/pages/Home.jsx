import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Anchor,
  BedDouble,
  Compass,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Utensils,
  Waves,
} from 'lucide-react';
import heroImg from '../assets/hero.png';

const WHATSAPP_URL =
  'https://wa.me/6282315509025?text=Hi%20Mentawai%20Surf%20Journey!%20I%20want%20to%20check%20availability%20for%20a%20Mentawai%20surf%20trip.';

export default function Home() {
  const inclusions = [
    {
      icon: BedDouble,
      title: 'Beachfront Surf Lodging',
      desc: 'Comfortable island accommodation steps from the ocean, designed for deep recovery between heavy surf sessions.',
    },
    {
      icon: Utensils,
      title: '3x Daily Meals & Drinks',
      desc: 'Freshly prepared breakfast, lunch, and dinner every day—plus unlimited drinking water, tea, and coffee.',
    },
    {
      icon: Waves,
      title: '2x Daily Speedboat Trips',
      desc: 'Morning and afternoon speedboat runs timed to tides, wind direction, and swell windows for uncrowded lineups.',
    },
    {
      icon: Compass,
      title: 'Local Surf Guide & Crew',
      desc: 'Experienced local surf guide and boat operator reading Mentawai breaks daily to put you in the right spot.',
    },
    {
      icon: Anchor,
      title: 'Siberut Harbor Transfers',
      desc: 'Pre-arranged harbor pickup and return transfers from Siberut straight to your island base—zero confusion.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent, No Hidden Costs',
      desc: 'All core surf trip essentials covered from Siberut with clear /person/night pricing (boardbag fees excluded).',
    },
  ];

  const stats = [
    { value: '2x / Day', label: 'Speedboat Surf Sessions' },
    { value: '100%', label: 'All-Inclusive Experience' },
    { value: 'Zero', label: 'Hidden Trip Fees' },
    { value: '2026/27', label: 'Bookings Now Open' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background Image + Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Mentawai Surf Journey Waves"
            className="h-full w-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-sm">
              <Sparkles size={14} />
              2026 / 2027 Mentawai Bookings Open
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
              Ride World-Class Waves in the{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Mentawai Islands
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Eat • Surf • Sleep • Repeat. Everything arranged seamlessly from
              Siberut—beachfront stay, daily meals, and two daily speedboat surf
              trips with local guides so you only focus on scoring waves.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/25 transition hover:bg-cyan-400"
              >
                <MessageCircle size={18} />
                Plan Your Surf Trip
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Explore Our Story <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Floating Highlights Bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:grid-cols-4 sm:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-white/10 pl-4 first:border-l-0 first:pl-0">
                <p className="text-2xl font-extrabold text-cyan-400 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-Inclusive Offer Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
              The All-Inclusive Offer
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything You Need for a Zero-Hassle Surf Trip
            </h2>
            <p className="mt-4 text-base text-slate-600">
              From the moment you step off the ferry in Siberut, our crew handles
              every detail of your Mentawai surf adventure.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inclusions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/5"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-6 py-16 text-center shadow-2xl sm:px-14">
            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Direct Personal Concierge
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to Lock In Your 2026 / 2027 Swell Window?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Chat directly with our team on WhatsApp for available dates,
                custom group stays, and transparent /person/night rates—no automated
                gateways, just fast human assistance.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp Now
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Send Inquiry Form <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}