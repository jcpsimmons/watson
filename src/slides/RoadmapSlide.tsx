import { VideoBackground } from '../components/VideoBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@drjoshcsimmons/scl';
import { DeckChrome } from '../components/DeckChrome';

const phases = [
  ['Q1', 'Data Foundation', 'Consolidate data sources and governance workflows.'],
  ['Q2', 'Pilot Launch', 'Deploy AI analytics to one business-critical domain.'],
  ['Q3', 'Scale', 'Expand to multi-team usage with role-based copilots.'],
  ['Q4', 'Optimize', 'Measure ROI and tune models for strategic planning.']
] as const;

export function RoadmapSlide() {
  return (
    <DeckChrome page={4} total={5} topRightLabel="Presentation">
      <VideoBackground />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <h2 style={{ marginTop: '0.25rem' }}>Implementation Roadmap</h2>
        <div style={{ marginTop: '1rem', display: 'grid', flex: 1, gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2%' }}>
          {phases.map(([quarter, title, body]) => (
            <Card key={quarter}>
              <CardHeader>
                <CardTitle>{quarter}</CardTitle>
                <p style={{ marginTop: '0.5rem', marginBottom: '0' }}>{title}</p>
              </CardHeader>
              <CardContent>
                <p style={{ marginTop: '0.5rem' }}>{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DeckChrome>
  );
}
