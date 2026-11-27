import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/profile-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Company Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Mulai Konsultasi
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={linkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}