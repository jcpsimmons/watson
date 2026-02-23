import { Presentation } from './components/Presentation';
import { AnalyticsSlide } from './slides/AnalyticsSlide';
import { ClosingSlide } from './slides/ClosingSlide';
import { CoverSlide } from './slides/CoverSlide';
import { IntroSlide } from './slides/IntroSlide';
import { RoadmapSlide } from './slides/RoadmapSlide';

function App() {
  return <Presentation slides={[<CoverSlide />, <IntroSlide />, <AnalyticsSlide />, <RoadmapSlide />, <ClosingSlide />]} />;
}

export default App;
