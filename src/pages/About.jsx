import { Target, Eye, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Tentang Kami
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Menghadirkan Dampak Nyata Lewat Inovasi dan Kolaborasi
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Didirikan dengan visi membantu pelaku usaha bertransformasi secara efektif,
            perusahaan kami berfokus pada kualitas eksekusi, integritas kerja, dan
            solusi yang relevan dengan kebutuhan pasar saat ini.
          </p>
        </div>

        {/* Visi, Misi, Nilai */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <Eye className="text-blue-600" size={28} />
            <h2 className="mt-4 text-xl font-bold text-slate-900">Visi</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Menjadi mitra terdepan yang dikenal atas keandalan, inovasi, dan standar
              pelayanan terbaik di industri.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <Target className="text-blue-600" size={28} />
            <h2 className="mt-4 text-xl font-bold text-slate-900">Misi</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Menyediakan solusi terstruktur, efisien, dan berkelanjutan guna mendukung
              daya saing jangka panjang setiap klien.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <Award className="text-blue-600" size={28} />
            <h2 className="mt-4 text-xl font-bold text-slate-900">Nilai Utama</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Transparansi komunikasi, akurasi hasil, serta tanggung jawab penuh pada
              setiap komitmen kerja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}