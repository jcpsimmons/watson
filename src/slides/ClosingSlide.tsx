import { VideoBackground } from '../components/VideoBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@drjoshcsimmons/scl';
import { DeckChrome } from '../components/DeckChrome';

export function ClosingSlide() {
  return (
    <DeckChrome page={5} total={5} topRightLabel="Presentation" footer="Thank You">
      <VideoBackground />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <p style={{ letterSpacing: '0.08em', opacity: 0.9 }}>Ready to transform your data strategy?</p>
        <Card style={{ marginTop: '1.2rem', width: '64%', maxWidth: '64%' }}>
          <CardContent>
            <CardHeader>
              <CardTitle>Let&apos;s Build the Future of Analytics</CardTitle>
            </CardHeader>
            <div style={{ marginTop: '0.75rem' }}>
              <p style={{ margin: 0 }}>Contact: john.doe@watsonai.io</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DeckChrome>
  );
}
