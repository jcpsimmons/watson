import { BrandLogo } from '../components/BrandLogo';
import { VideoBackground } from '../components/VideoBackground';

const cards = [
  { title: 'Advanced Capabilities', body: 'Blend forecasting, anomaly detection, and natural-language querying in a single intelligent workspace.' },
  { title: 'Smarter Decision-Making', body: 'AI-generated recommendations prioritize business impact and confidence scoring for executive teams.' },
  { title: 'Operational Efficiency', body: 'Automated pipelines and alerts reduce analyst overhead and improve delivery speed across teams.' },
  { title: 'Adaptive Learning', body: 'Continuous model feedback loops evolve with user behavior and fresh data signals in real time.' },
  { title: 'Cross-Function Visibility', body: 'Unified metrics keep finance, sales, and operations aligned around a shared source of insight.' }
];

export function AnalyticsSlide() {
  return (
    <section className="relative h-full w-full px-[5.2%] pb-[4.5%] pt-[3.2%]">
      <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZel.m3u8" />
      <div className="relative z-10 flex h-full flex-col">
        <header className="grid grid-cols-3 items-center">
          <BrandLogo />
          <p className="justify-self-center text-clamp-sm uppercase tracking-[0.25em] text-white/70">Pitch Deck</p>
          <p className="justify-self-end text-clamp-sm text-white/60">Page 002</p>
        </header>

        <div className="mt-[4.2%]">
          <p className="text-clamp-md text-white/80">Transforming Data into Intelligence with</p>
          <h2 className="text-clamp-lg font-semibold">AI-Powered Analytics</h2>
        </div>

        <div className="mt-[3.2%] flex-1">
          <div className="grid h-[48%] grid-cols-3 gap-[1.4%]">
            {cards.slice(0, 3).map((card) => (
              <article key={card.title} className="liquid-glass rounded-[1.3vw] p-[5.5%]">
                <h3 className="text-clamp-md font-semibold">{card.title}</h3>
                <p className="mt-[6%] text-clamp-sm leading-[1.55] text-white/75">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-[1.4%] grid h-[48%] grid-cols-2 gap-[1.4%]">
            {cards.slice(3).map((card) => (
              <article key={card.title} className="liquid-glass rounded-[1.3vw] p-[5.5%]">
                <h3 className="text-clamp-md font-semibold">{card.title}</h3>
                <p className="mt-[4%] text-clamp-sm leading-[1.55] text-white/75">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
