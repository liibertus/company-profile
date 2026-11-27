import { Link } from 'react-router-dom';
import logo from '../assets/profile-logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Company Logo"
              className="h-9 w-auto rounded bg-white p-1 object-contain"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Mitra strategis untuk solusi digital dan pertumbuhan bisnis berkelanjutan.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navigasi
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Kontak
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>Email: info@perusahaananda.com</li>
            <li>Telepon: +62 812-3456-7890</li>
            <li>Alamat: Jl. Contoh Bisnis No. 10, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Mentawai Surf Journey. All rights reserved.
      </div>
    </footer>
  );
}