import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  Eye,
  HeartHandshake,
  Target,
  Waves,
} from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function About() {
  const pillars = [
    {
      icon: Eye,
      title: 'Our Vision',
      desc: 'To be the most trusted gateway to Mentawai surf travel—connecting surfers worldwide with authentic island hospitality and unforgettable waves.',
    },
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'Deliver seamless, transparent, and all-inclusive surf journeys from Siberut to the lineup with zero hidden costs and dedicated local guidance.',
    },
    {
      icon: HeartHandshake,
      title: 'Our Promise',
      desc: 'Direct, honest communication from your first WhatsApp message until your last wave—putting safety, comfort, and wave quality first.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Chat & Lock Your Dates',
      desc: 'Reach out directly via WhatsApp or our contact form. We help match your preferred swell season, trip duration, and group size.',
    },
    {
      step: '02',
      title: 'Seamless Siberut Transfer',
      desc: 'Arrive in Padang and take the fast ferry to Siberut. Our team greets you right at Siberut Harbor and handles your boat transfer.',
    },
    {
      step: '03',
      title: 'Eat. Surf. Sleep. Repeat.',
      desc: 'Wake up to tropical ocean views, fuel up with fresh meals, and hit two guided speedboat surf sessions every single day.',
    },
  ];

  return (
    <div>
      {/* Dark Page Header */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
              <Waves size={15} />
              About Mentawai Surf Journey
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Crafted for Surfers Who Just Want to Score Perfect Waves
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              Planning a surf trip to the Mentawai Islands shouldn&apos;t feel
              complicated. Mentawai Surf Journey was created to remove every
              barrier between you and Indonesia&apos;s finest reefs—combining
              local ocean knowledge with smooth, end-to-end guest care.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story Split */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={heroImg}
              alt="Mentawai Islands Surf Experience"
              className="h-80 w-full object-cover sm:h-[420px]"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-slate-950/80 p-4 text-white backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Compass className="shrink-0 text-cyan-400" size={22} />
                <p className="text-xs leading-relaxed text-slate-200 sm:text-sm">
                  Local wave knowledge across the Mentawai playground—matching
                  every session to tide, wind, and skill level.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              Authentic Mentawai Surf Travel, Simplified
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Whether you&apos;re chasing hollow barrels or long, clean reef
              walls, your experience on land matters just as much as your time in
              the water. We coordinate everything from Siberut harbor pickups and
              beachfront lodging to hearty daily meals and twice-daily speedboat
              runs.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Instead of cold booking portals, we operate with personal, direct
              communication—so every question about ferries, surf seasons, or
              custom schedules is answered promptly by real people on the ground.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
              >
                Talk With Our Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Promise */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-cyan-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Your Trip Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
              Simple Journey
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              How Your Surf Trip Flows
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <span className="text-4xl font-extrabold text-cyan-500/25">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}