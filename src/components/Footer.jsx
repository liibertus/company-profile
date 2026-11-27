import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Waves } from 'lucide-react';
import logo from '../assets/profile-logo.png';

function Instagram({ size = 16 }) {
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

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="Mentawai Surf Journey Logo"
                className="h-11 w-11 rounded-xl bg-white/10 p-1 object-contain ring-1 ring-white/15"
              />
              <div>
                <p className="text-lg font-extrabold text-white">
                  Mentawai Surf Journey
                </p>
                <p className="text-xs font-medium uppercase tracking-widest text-cyan-400">
                  Eat • Surf • Sleep • Repeat
                </p>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              Curated all-inclusive Mentawai surf trips crafted for surfers seeking
              world-class waves, seamless Siberut harbor transfers, local boat guides,
              and zero logistical hassle.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/mentawaisurfjourney"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-400"
              >
                <Instagram size={15} />
                @mentawaisurfjourney
              </a>
              <a
                href="https://wa.me/6282315509025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-400"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/" className="text-slate-400 transition hover:text-cyan-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 transition hover:text-cyan-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 transition hover:text-cyan-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Direct Contact
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={17} className="mt-0.5 shrink-0 text-cyan-400" />
                <span>Mentawai Islands, West Sumatra, Indonesia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={17} className="shrink-0 text-cyan-400" />
                <a
                  href="https://wa.me/6282315509025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  +62 823-1550-9025
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Waves size={17} className="shrink-0 text-cyan-400" />
                <span>2026 / 2027 Season Open</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Mentawai Surf Journey. All rights reserved.</p>
          <p>Padang &amp; Mentawai Islands, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}