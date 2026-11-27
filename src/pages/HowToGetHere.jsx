import { Link } from 'react-router-dom';
import {
  Anchor,
  ArrowRight,
  CheckCircle2,
  Info,
  MessageCircle,
  Plane,
  Ship,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/6282315509025?text=Hi%20Mentawai%20Surf%20Journey!%20I%20need%20help%20planning%20my%20route%20and%20ferry%20schedule%20to%20Siberut.';

export default function HowToGetHere() {
  const travelSteps = [
    {
      step: '01',
      icon: Plane,
      title: 'Fly to Padang (PDG)',
      subtitle: 'Minangkabau International Airport, West Sumatra',
      desc: 'Book a flight to Padang (PDG) via Jakarta (CGK), Bali (DPS), or Kuala Lumpur (KUL). Plan to arrive a day before your ferry departure so you have plenty of time to rest and check your surfboards.',
    },
    {
      step: '02',
      icon: Ship,
      title: 'Fast Ferry to Siberut',
      subtitle: 'Padang Harbor → Siberut Harbor (~3.5 Hours)',
      desc: 'Board the Mentawai Fast ferry from Padang Harbor to Siberut Island. Ferries typically depart early in the morning on scheduled days—we will send you the exact timetable and help coordinate your ticket.',
    },
    {
      step: '03',
      icon: Anchor,
      title: 'Speedboat Transfer to Camp',
      subtitle: 'Pre-Arranged Harbor Pickup',
      desc: 'The moment you arrive at Siberut Harbor, our local crew meets you directly at the dock. From there, we take care of your luggage and transfer you straight by speedboat to your beachfront stay.',
    },
  ];

  const tips = [
    'Harbor transfers from Siberut to our surf base and back are included in your trip.',
    'Airline and Mentawai Fast boardbag fees are excluded and paid directly at check-in.',
    'Bring some Indonesian Rupiah (IDR) cash from Padang, as ATMs in the Mentawai Islands are limited.',
    'Send us your flight details before booking so we can match them smoothly with the ferry schedule.',
  ];

  return (
    <div>
      {/* Dark Page Header */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Travel Guide
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              How to Get Here
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Getting to the Mentawai Islands is simpler than you think. Follow
              these three straightforward steps from Padang—once you reach
              Siberut, we handle everything else.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Route Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {travelSteps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-cyan-200 hover:shadow-md sm:flex-row sm:items-start"
                >
                  <div className="flex shrink-0 items-center gap-4">
                    <span className="text-3xl font-extrabold text-cyan-500/30">
                      {item.step}
                    </span>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <Icon size={24} />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                      {item.subtitle}
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      {item.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Good to Know Box */}
          <div className="mt-12 rounded-3xl border border-cyan-200/70 bg-cyan-50/50 p-8">
            <div className="flex items-center gap-2.5 text-slate-900">
              <Info size={20} className="text-cyan-600" />
              <h3 className="text-lg font-bold">Good to Know Before You Fly</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {tips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-cyan-600"
                  />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Simple CTA */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-slate-950 p-8 text-white sm:flex-row sm:p-10">
            <div>
              <h3 className="text-xl font-bold">
                Need Help Checking Ferry Schedules?
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Message us your arrival dates and we will help map out the
                smoothest Padang–Siberut connection.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
              >
                <MessageCircle size={17} />
                Ask on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}