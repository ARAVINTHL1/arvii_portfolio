import { useState, Suspense, lazy } from 'react';
import { GameProvider } from './hooks/useGameState';
import LoadingScreen from './components/LoadingScreen';
import GameHUD from './components/GameHUD';
import Background from './components/Background';
import Hero from './components/Hero';
import PlayerProfile from './components/PlayerProfile';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import NextMissions from './components/NextMissions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';

import EasterEgg from './components/EasterEgg';

function PortfolioContent() {
  return (
    <>
      {/* Persistent UI */}
      <GameHUD />
      <Achievements />

      <EasterEgg />

      {/* Fixed parallax background */}
      <Background />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <PlayerProfile />
        <Skills />
        <SoftSkills />
        <Journey />
        <Projects />
        <Certifications />
        <NextMissions />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <GameProvider>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      {loaded && <PortfolioContent />}
    </GameProvider>
  );
}
