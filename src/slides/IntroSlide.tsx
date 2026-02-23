import { VideoBackground } from '../components/VideoBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@drjoshcsimmons/scl';
import { DeckChrome } from '../components/DeckChrome';

function MiniGraph() {
  return (
    <svg
      viewBox="0 0 280 170"
      fill="none"
      style={{ height: '100%', width: '100%' }}
    >
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
    <DeckChrome page={2} total={5} topRightLabel="Presentation">
      <VideoBackground />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <p style={{ margin: 0, fontSize: '1rem', letterSpacing: '0.06em', opacity: 0.8 }}>The Rise of AI</p>
        <h2 style={{ marginTop: '0.35rem', marginBottom: '1rem' }}>in Data Analytics</h2>

        <div style={{ marginTop: '1rem', display: 'grid', flex: 1, gridTemplateColumns: '1.2fr 1.5fr 1.3fr', gap: '2%' }}>
          <Card>
            <CardHeader>
              <CardTitle>Global Market Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <p style={{ marginTop: '0', marginBottom: '0.6rem', fontSize: '1.9rem' }}>29.4%</p>
              <p style={{ margin: 0 }}>Projected CAGR through 2030 driven by enterprise AI adoption.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p style={{ margin: 0, lineHeight: 1.4 }}>
                Organizations are moving from descriptive dashboards to predictive and generative AI layers. This shift enables faster insights, reduced manual reporting, and stronger strategic confidence.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Adoption Momentum</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ marginTop: '0.75rem', height: '67%' }}><MiniGraph /></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DeckChrome>
  );
}
