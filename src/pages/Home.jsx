import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';

export default function Home() {
  const highlights = [
    {
      icon: Zap,
      title: 'Eksekusi Cepat & Terukur',
      desc: 'Setiap proyek dirancang dengan timeline jelas dan standar kualitas tinggi.',
    },
    {
      icon: ShieldCheck,
      title: 'Andal & Profesional',
      desc: 'Didukung tim berpengalaman dengan fokus pada stabilitas dan keamanan jangka panjang.',
    },
    {
      icon: Users,
      title: 'Berorientasi Klien',
      desc: 'Komunikasi transparan dari tahap perencanaan hingga pendampingan pasca rilis.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            Solusi Bisnis Terpercaya
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Bangun Pertumbuhan Bisnis Lebih Cepat & Terarah
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Kami membantu perusahaan menghadirkan layanan, produk, dan pengalaman
            pelanggan yang modern dengan pendekatan strategis dan teknologi tepat guna.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Hubungi Kami <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Pelajari Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Mengapa Memilih Kami?</h2>
            <p className="mt-3 text-slate-600">
              Pilar utama yang menjadi komitmen kami kepada setiap klien.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
                >
                  <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}