import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

type VideoBackgroundProps = {
  src: string;
};

export function VideoBackground({ src }: VideoBackgroundProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        void video.play();
      });

      return () => {
        hls.destroy();
      };
    }

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      const onLoaded = () => {
        void video.play();
      };
      video.addEventListener('loadedmetadata', onLoaded);
      return () => {
        video.removeEventListener('loadedmetadata', onLoaded);
      };
    }
  }, [src]);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}
