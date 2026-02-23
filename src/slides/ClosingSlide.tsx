import { BrandLogo } from '../components/BrandLogo';
import { VideoBackground } from '../components/VideoBackground';

export function ClosingSlide() {
  return (
    <section className="relative h-full w-full px-[5.2%] pb-[5%] pt-[3.2%]">
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdt.m3u8" />
      <div className="relative z-10 flex h-full flex-col">
        <header className="grid grid-cols-3 items-center">
          <BrandLogo />
          <p className="justify-self-center text-clamp-sm uppercase tracking-[0.25em] text-white/70">Pitch Deck</p>
          <p className="justify-self-end text-clamp-sm text-white/60">Page 004</p>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="text-clamp-md text-white/75">Ready to transform your data strategy?</p>
          <h2 className="mt-[2%] text-clamp-xl font-semibold">Let&apos;s Build the Future of Analytics</h2>
          <div className="liquid-glass mt-[4%] rounded-full px-[3.6%] py-[1.2%] text-clamp-sm text-white/85">
            Contact: john.doe@watsonai.io
          </div>
        </div>

        <footer className="text-center text-clamp-sm text-white/55">Thank You</footer>
      </div>
    </section>
  );
}
