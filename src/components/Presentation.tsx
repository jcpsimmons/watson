import { Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { type ReactElement, useCallback, useEffect, useMemo, useState } from 'react';

type PresentationProps = {
  slides: ReactElement[];
};

export function Presentation({ slides }: PresentationProps) {
  const [index, setIndex] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(Boolean(document.fullscreenElement));

  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);
  const next = useCallback(() => setIndex((i) => Math.min(i + 1, slides.length - 1)), [slides.length]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
      return;
    }
    void document.exitFullscreen();
  }, []);

  useEffect(() => {
    let timer: number;
    const reset = () => {
      setControlsVisible(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setControlsVisible(false), 3000);
    };
    reset();
    window.addEventListener('mousemove', reset);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('mousemove', reset);
    };
  }, []);

  useEffect(() => {
    const onFull = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFull);
    return () => document.removeEventListener('fullscreenchange', onFull);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", ' '].includes(e.key)) next();
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) prev();
      if (e.key.toLowerCase() === 'f') toggleFullscreen();
      if (e.key === 'Escape' && document.fullscreenElement) void document.exitFullscreen();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, toggleFullscreen]);

  const progress = useMemo(() => ((index + 1) / slides.length) * 100, [index, slides.length]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white">
      {slides.map((slide, i) => {
        const offset = i - index;
        const scale = offset < 0 ? 0.95 : offset > 0 ? 1.05 : 1;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-500 ease-in-out"
            style={{ opacity: i === index ? 1 : 0, transform: `scale(${scale})`, pointerEvents: i === index ? 'auto' : 'none' }}
          >
            {slide}
          </div>
        );
      })}

      <div className={`absolute right-[3%] top-[3%] text-[11px] text-white/40 transition-opacity duration-300 ${controlsVisible ? 'opacity-100' : 'opacity-0'}`}>
        ← → Navigate · F Fullscreen
      </div>

      <div className={`absolute bottom-[3%] left-[3%] right-[3%] flex items-center justify-between transition-opacity duration-300 ${controlsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-[13px] tabular-nums text-white/50">{index + 1} / {slides.length}</div>
        <div className="flex items-center gap-[0.5%]">
          {slides.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setIndex(i)}
              className="h-[6px] rounded-full transition-all duration-300"
              style={{ width: i === index ? 24 : 6, backgroundColor: i === index ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)' }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="liquid-glass flex items-center overflow-hidden rounded-full px-[1%] py-[0.4%]">
          <button type="button" onClick={prev} className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white/90" aria-label="Previous slide"><ChevronLeft size={16} /></button>
          <button type="button" onClick={next} className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white/90" aria-label="Next slide"><ChevronRight size={16} /></button>
          <div className="mx-2 h-5 w-px bg-white/20" />
          <button type="button" onClick={toggleFullscreen} className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white/90" aria-label="Toggle fullscreen">
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-white/50" style={{ width: `${progress}%`, transition: 'width 500ms ease-in-out' }} />
    </div>
  );
}
