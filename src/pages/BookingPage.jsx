import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SQUARE_BOOKING_URL = 'https://book.squareup.com/appointments/ionmrt1rh4vkyj/location/LMTER20ND8N10/services';

const faqs = [
  {
    question: 'What should I wear?',
    answer: 'Wear loose, dark clothing and sandals or slip-ons. The tan can transfer if tight fabric rubs against the skin.',
  },
  {
    question: 'How long does it last?',
    answer: 'Most clients enjoy a glow for about 5–7 days with proper prep and aftercare.',
  },
  {
    question: 'How should I prep?',
    answer: 'Exfoliate, shave, and avoid heavy lotions or oils the day before. A clean, dry canvas gives the smoothest result.',
  },
  {
    question: 'How dark does it get?',
    answer: 'The depth is customizable, from soft and natural to deeper bronze. We tailor it to your preference.',
  },
  {
    question: 'What is the difference between 8-hour and rapid?',
    answer: 'The 8-hour tan develops over a longer window and is ideal for a more custom finish. The rapid option is great when you need a quicker turnaround.',
  },
];

function BookingPage() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div className="min-h-screen bg-cream text-cocoa">
      <Nav />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <main>
          <section className="px-4 pb-16 pt-10 text-left sm:px-6 sm:pt-16 md:pb-24 lg:px-8 lg:pt-20">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-bronze">Booking</p>
                <h1 className="mt-3 font-display text-4xl font-medium sm:text-5xl">Now Booking at <span className="text-[#592A8A]">ECU</span></h1>
                <p className="mt-4 text-base text-cocoa/80 sm:text-lg">Book here or DM on Instagram</p>
              </div>
            </div>
          </section>

          <section id="book" className="px-4 pb-10 pt-0 text-left sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                <div className="flex flex-col">
                  <p className="mb-3 text-left text-sm font-medium uppercase tracking-[0.35em] text-cocoa">Greenville, NC</p>
                  <div className="flex flex-1 flex-col border border-line bg-ivory p-6">
                    <div className="mb-6 grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">8-hour custom</p>
                        <p className="mt-1 text-3xl font-semibold text-cocoa">$20</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">1–3 hour rapid</p>
                        <p className="mt-1 text-3xl font-semibold text-cocoa">$25</p>
                      </div>
                    </div>
                    <a
                      href={SQUARE_BOOKING_URL}
                      className="mt-auto flex w-full justify-center rounded-full bg-bronze px-5 py-3 text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:bg-bronze-deep"
                    >
                      Book Greenville
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="mb-3 text-left text-sm font-medium uppercase tracking-[0.35em] text-cocoa">Kent Island, MD</p>
                  <div className="flex flex-1 flex-col border border-line bg-ivory p-6">
                    <div className="mb-6 grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">8-hour custom</p>
                        <p className="mt-1 text-3xl font-semibold text-cocoa">$30</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">1–3 hour rapid</p>
                        <p className="mt-1 text-3xl font-semibold text-cocoa">$35</p>
                      </div>
                    </div>
                    <a
                      href={SQUARE_BOOKING_URL}
                      className="mt-auto flex w-full justify-center rounded-full bg-bronze px-5 py-3 text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:bg-bronze-deep"
                    >
                      Book Kent Island
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="px-4 py-10 text-left sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-bronze">Booking FAQ</p>
              <h2 className="mt-3 font-display text-2xl font-medium sm:text-4xl">Everything you need to know</h2>
              <div className="mt-8 space-y-5">
                {faqs.map((faq, index) => (
                  <div key={faq.question}>
                    <button
                      className="flex w-full items-center justify-between gap-3 text-left"
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    >
                      <span className="flex-1 text-base font-medium text-cocoa">{faq.question}</span>
                      <span className="text-xl text-bronze">{openFaq === index ? '−' : '+'}</span>
                    </button>
                    {openFaq === index && <p className="mt-2 text-sm leading-7 text-cocoa/80">{faq.answer}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default BookingPage;
