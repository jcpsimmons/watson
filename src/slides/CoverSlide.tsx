import { VideoBackground } from '../components/VideoBackground';
import { Card, CardContent } from '@drjoshcsimmons/scl';
import { DeckChrome } from '../components/DeckChrome';

export function CoverSlide() {
  return (
    <DeckChrome page={1} total={5} topRightLabel="Presentation">
      <VideoBackground />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
        <Card style={{ width: '72%', maxWidth: '72%', margin: 'auto' }}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '0.65rem' }}>
              <p style={{ margin: 0, color: 'var(--scl-color-hotpink)', fontSize: '1rem', letterSpacing: '0.08em' }}>
                What $300 Billion in AI Infrastructure got us
              </p>
              <h1 style={{ margin: 0, fontSize: '2.5rem', lineHeight: 1.05 }}>
                What $300 Billion in AI Infrastructure got us
              </h1>
              <p style={{ margin: 0 }}>Unlocking Business Potential</p>
              <p style={{ margin: 0, opacity: 0.8 }}>By Dr.J</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DeckChrome>
  );
}
