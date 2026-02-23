import { BrandLogo } from '../components/BrandLogo';
import { VideoBackground } from '../components/VideoBackground';

const phases = [
  ['Q1', 'Data Foundation', 'Consolidate data sources and governance workflows.'],
  ['Q2', 'Pilot Launch', 'Deploy AI analytics to one business-critical domain.'],
  ['Q3', 'Scale', 'Expand to multi-team usage with role-based copilots.'],
  ['Q4', 'Optimize', 'Measure ROI and tune models for strategic planning.']
] as const;

export function RoadmapSlide() {
  return (
    <section className="relative h-full w-full px-[5.2%] pb-[5%] pt-[3.2%]">
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB.m3u8" />
      <div className="relative z-10 flex h-full flex-col">
        <header className="grid grid-cols-3 items-center">
          <BrandLogo />
          <p className="justify-self-center text-clamp-sm uppercase tracking-[0.25em] text-white/70">Pitch Deck</p>
          <p className="justify-self-end text-clamp-sm text-white/60">Page 003</p>
        </header>
        <h2 className="mt-[5%] text-clamp-lg font-semibold">Implementation Roadmap</h2>
        <div className="mt-[4%] grid flex-1 grid-cols-4 gap-[1.2%]">
          {phases.map(([quarter, title, body]) => (
            <article key={quarter} className="liquid-glass rounded-[1.2vw] p-[8%]">
              <p className="text-clamp-sm text-white/60">{quarter}</p>
              <h3 className="mt-[5%] text-clamp-md font-semibold">{title}</h3>
              <p className="mt-[8%] text-clamp-sm leading-[1.6] text-white/75">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
