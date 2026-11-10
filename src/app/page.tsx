import { kinetic } from '@/data/site';
import { Sidebar } from '@/components/layout/Sidebar';
import { Ticker } from '@/components/sections/Ticker';
import { Hero } from '@/components/sections/Hero';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { Playground } from '@/components/sections/Playground';
import { Writing } from '@/components/sections/Writing';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { KineticStrip } from '@/components/interactions/KineticStrip';
import { PixelSmiley } from '@/components/graphics/PixelSmiley';
import '@/styles/home.css';

export default function HomePage() {
  return (
    <div className="frame">
      <Sidebar />
      <main className="content" id="home" tabIndex={-1}>
        <Ticker />
        <Hero />
        <KineticStrip text={kinetic}>
          <PixelSmiley className="pixel-smiley" color="#A868F0" />
        </KineticStrip>
        <ProjectsSection />
        <Playground />
        <Writing />
        <About />
        <Contact />
      </main>
    </div>
  );
}
