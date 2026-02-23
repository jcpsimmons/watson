import { Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { type ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Progress } from '@drjoshcsimmons/scl';

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
    <div className="scl-theme-cyan" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {slides.map((slide, i) => {
        const offset = i - index;
        const scale = offset < 0 ? 0.95 : offset > 0 ? 1.05 : 1;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: '0',
              transition: 'all 0.5s ease-in-out',
              opacity: i === index ? 1 : 0,
              transform: `scale(${scale})`,
              pointerEvents: i === index ? 'auto' : 'none'
            }}
          >
            {slide}
          </div>
        );
      })}

      <div style={{
        position: 'absolute',
        right: '0',
        top: '0',
        padding: '0.5rem 0.75rem',
        color: 'var(--scl-color-cyan)',
        transition: 'opacity 0.3s',
        opacity: controlsVisible ? 1 : 0
      }}>
        ← → Navigate · F Fullscreen
      </div>

      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: '0.75rem',
        color: 'var(--scl-color-cyan)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'opacity 0.3s',
        opacity: controlsVisible ? 1 : 0
      }}>
        <div>{index + 1} / {slides.length}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {slides.map((_, i) => (
            <Button
              key={i}
              variant="outline"
              size="sm"
              onClick={() => setIndex(i)}
              style={{ width: i === index ? 24 : 6 }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Button variant="outline" size="sm" onClick={prev} aria-label="Previous slide"><ChevronLeft size={16} /></Button>
          <Button variant="outline" size="sm" onClick={next} aria-label="Next slide"><ChevronRight size={16} /></Button>
          <Button variant="outline" size="sm" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </Button>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '0',
        padding: '0.75rem'
      }}>
        <Progress value={progress} label={`${Math.round(progress)}%`} showPercentage />
      </div>
    </div>
  );
}
