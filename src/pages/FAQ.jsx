import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/6282315509025?text=Hi%20Mentawai%20Surf%20Journey!%20I%20have%20a%20question%20about%20the%20surf%20trip.';

const faqs = [
  {
    question: 'What is included in the all-inclusive surf trip?',
    answer:
      'Your stay includes beachfront surf lodging, three freshly prepared daily meals, unlimited drinking water, tea, and coffee, two daily guided speedboat surf trips, an experienced local surf guide and boat operator, plus pre-arranged round-trip transfers from Siberut Harbor.',
  },
  {
    question: 'Are there any hidden costs or exclusions?',
    answer:
      'No hidden costs once you arrive in Siberut. International/domestic flights to Padang, Padang hotel nights, Mentawai Fast ferry tickets, personal travel insurance, and airline/ferry boardbag fees are excluded.',
  },
  {
    question: 'How is pricing structured and how do I book?',
    answer:
      'Rates are calculated clearly on a /person/night basis depending on your season and trip dates. To keep things personal and flexible, all bookings are handled directly through WhatsApp—just message us your preferred dates and group size to lock in your spot.',
  },
  {
    question: 'What surf level is recommended for the Mentawai Islands?',
    answer:
      'The Mentawai Islands are famous for world-class reef breaks suited for intermediate to advanced surfers. However, there are also fun, more forgiving waves nearby, and our local guides pick the best break each session based on swell, tide, wind, and your comfort level.',
  },
  {
    question: 'When is the best season to visit Mentawai?',
    answer:
      'Peak swell season runs from April to October with consistent Indian Ocean groundswells. Shoulder months (March and November) and the off-peak season (December to February) still offer very fun, uncrowded waves with lighter winds. Bookings for 2026 / 2027 are open year-round.',
  },
  {
    question: 'Should I bring cash and what essentials should I pack?',
    answer:
      'Yes—bring enough Indonesian Rupiah (IDR) cash from Padang before boarding the ferry, as ATMs in the islands are limited. For surf essentials, pack your quiver, spare leashes and fins, reef booties, tropical wax, high-SPF zinc/sunscreen, and basic first-aid supplies.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Dark Page Header */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
              <HelpCircle size={15} />
              Frequently Asked Questions
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Everything You Need to Know
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Quick answers about our all-inclusive packages, Siberut transfers,
              swell seasons, and how booking works with Mentawai Surf Journey.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
                    isOpen
                      ? 'border-cyan-300 shadow-md shadow-cyan-950/5'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-bold text-slate-900 sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-cyan-600 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-slate-950 p-8 text-white sm:flex-row sm:p-10">
            <div>
              <h2 className="text-xl font-bold">Still Have Questions?</h2>
              <p className="mt-1 text-sm text-slate-300">
                Chat with us directly on WhatsApp or check our Padang–Siberut
                travel guide.
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
                to="/how-to-get-here"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Travel Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}