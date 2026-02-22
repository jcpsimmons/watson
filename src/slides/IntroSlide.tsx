import { BrandLogo } from '../components/BrandLogo';
import { VideoBackground } from '../components/VideoBackground';

function MiniGraph() {
  return (
    <svg viewBox="0 0 280 170" className="h-full w-full" fill="none">
      <path d="M16 145C48 111 67 117 92 92C117 67 129 71 157 54C181 40 197 45 224 24" stroke="white" strokeOpacity="0.92" strokeWidth="3" />
      <path d="M16 145C48 111 67 117 92 92C117 67 129 71 157 54C181 40 197 45 224 24" stroke="white" strokeOpacity="0.4" strokeWidth="12" />
      {['16,145','92,92','157,54','224,24'].map((point) => {
        const [cx, cy] = point.split(',');
        return <circle key={point} cx={cx} cy={cy} r="6" fill="white" />;
      })}
    </svg>
  );
}

export function IntroSlide() {
  return (
    <section className="relative h-full w-full px-[5.2%] pb-[5%] pt-[3.2%]">
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdt.m3u8" />
      <div className="relative z-10 flex h-full flex-col">
        <header className="grid grid-cols-3 items-center">
          <BrandLogo />
          <p className="justify-self-center text-clamp-sm uppercase tracking-[0.25em] text-white/70">Pitch Deck</p>
          <p className="justify-self-end text-clamp-sm text-white/60">Page 001</p>
        </header>

        <h2 className="mt-[5%] text-clamp-lg max-w-[58%] font-semibold leading-[1.1]">The Rise of AI<br/>in Data Analytics</h2>

        <div className="mt-[4%] grid flex-1 grid-cols-3 gap-[2%]">
          <article className="liquid-glass rounded-[1.4vw] p-[6%]">
            <p className="text-clamp-sm text-white/70">Global Market Growth</p>
            <p className="mt-[6%] text-clamp-lg font-bold">29.4%</p>
            <p className="mt-[2%] text-clamp-sm text-white/60">Projected CAGR through 2030 driven by enterprise AI adoption.</p>
          </article>
          <article className="liquid-glass rounded-[1.4vw] p-[6%]">
            <p className="text-clamp-sm leading-[1.6] text-white/75">Organizations are moving from descriptive dashboards to predictive and generative AI layers. This shift enables faster insights, reduced manual reporting, and stronger strategic confidence.</p>
          </article>
          <article className="liquid-glass rounded-[1.4vw] p-[6%]">
            <p className="text-clamp-sm text-white/70">Adoption Momentum</p>
            <div className="mt-[8%] h-[65%]"><MiniGraph /></div>
          </article>
        </div>

        <footer className="text-right text-clamp-sm text-white/55">The Rise of AI</footer>
      </div>
    </section>
  );
}
