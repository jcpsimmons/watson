import { VideoBackground } from '../components/VideoBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@drjoshcsimmons/scl';
import { DeckChrome } from '../components/DeckChrome';

const cards = [
  { title: 'Advanced Capabilities', body: 'Blend forecasting, anomaly detection, and natural-language querying in a single intelligent workspace.' },
  { title: 'Smarter Decision-Making', body: 'AI-generated recommendations prioritize business impact and confidence scoring for executive teams.' },
  { title: 'Operational Efficiency', body: 'Automated pipelines and alerts reduce analyst overhead and improve delivery speed across teams.' },
  { title: 'Adaptive Learning', body: 'Continuous model feedback loops evolve with user behavior and fresh data signals in real time.' },
  { title: 'Cross-Function Visibility', body: 'Unified metrics keep finance, sales, and operations aligned around a shared source of insight.' }
];

export function AnalyticsSlide() {
  return (
    <DeckChrome page={3} total={5} topRightLabel="Presentation">
      <VideoBackground />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ marginTop: '0.25rem' }}>
          <p style={{ margin: 0, fontSize: '1rem', letterSpacing: '0.06em', opacity: 0.8 }}>Transforming Data into Intelligence with</p>
          <h2>AI-Powered Analytics</h2>
        </div>

        <div style={{ marginTop: '1rem', flex: 1 }}>
          <div style={{ display: 'grid', height: '48%', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.4%' }}>
            {cards.slice(0, 3).map((card) => (
              <Card key={card.title}>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ marginTop: '6%' }}>{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: '1.4%', display: 'grid', height: '48%', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.4%' }}>
            {cards.slice(3).map((card) => (
              <Card key={card.title}>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ marginTop: '0' }}>{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DeckChrome>
  );
}
