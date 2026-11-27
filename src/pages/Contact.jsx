import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda bisa integrasikan dengan API backend, EmailJS, atau redirect WhatsApp
    console.log('Data pesan:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Contact Us
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Mari Diskusikan Kebutuhan Anda
          </h1>
          <p className="mt-4 text-slate-600">
            Kirimkan pesan melalui formulir di bawah atau hubungi kami secara langsung.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Info Kontak */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                <MapPin size={22} />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">Alamat Kantor</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Jl. Contoh Bisnis No. 10, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                <Mail size={22} />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">Email</h2>
                <p className="mt-1 text-sm text-slate-600">info@perusahaananda.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                <Phone size={22} />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">Telepon / WhatsApp</h2>
                <p className="mt-1 text-sm text-slate-600">+62 812-3456-7890</p>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {submitted && (
              <div className="mb-6 flex items-center gap-3 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-700">
                <CheckCircle2 size={20} />
                <span>Pesan Anda berhasil terkirim. Tim kami akan segera menghubungi Anda.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Pesan
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan kebutuhan proyek atau pertanyaan Anda..."
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}