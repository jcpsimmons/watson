import { BrandLogo } from '../components/BrandLogo';
import { VideoBackground } from '../components/VideoBackground';

export function CoverSlide() {
  return (
    <section className="relative h-full w-full px-[5.2%] pb-[5%] pt-[4%]">
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB.m3u8" />
      <div className="relative z-10 flex h-full flex-col">
        <header className="flex items-center justify-between">
          <BrandLogo />
          <p className="text-clamp-sm font-medium uppercase tracking-[0.25em] text-white/75">Pitch Deck</p>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="text-clamp-xl max-w-[72%] font-semibold leading-[1.05]">AI-Powered Data Analytics</h1>
          <p className="mt-[2.2%] text-clamp-md text-white/80">Unlocking Business Potential</p>
          <p className="mt-[3.5%] text-clamp-sm text-white/65">By John Doe</p>
        </div>

        <footer className="text-center text-clamp-sm text-white/60">2024</footer>
      </div>
    </section>
  );
}
