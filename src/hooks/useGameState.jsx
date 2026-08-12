import { createContext, useContext, useState, useCallback } from 'react';
import { achievements as achievementConfig, sectionScores } from '../data/portfolioData';

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [visitedSections, setVisitedSections] = useState(new Set());
  const [unlockedAchievements, setUnlockedAchievements] = useState(new Set());
  const [achievementQueue, setAchievementQueue] = useState([]);
  const [devMode, setDevMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const addCoins = useCallback((amount = 10) => {
    setCoins(prev => prev + amount);
  }, []);

  const visitSection = useCallback((sectionId) => {
    if (visitedSections.has(sectionId)) return;
    setVisitedSections(prev => new Set([...prev, sectionId]));
    const pts = sectionScores[sectionId] || 0;
    setScore(prev => prev + pts);

    // Check achievement
    const ach = achievementConfig.find(a => a.section === sectionId);
    if (ach && !unlockedAchievements.has(ach.id)) {
      setUnlockedAchievements(prev => new Set([...prev, ach.id]));
      setScore(prev => prev + ach.points);
      setAchievementQueue(prev => [...prev, ach]);
    }
  }, [visitedSections, unlockedAchievements]);

  const dismissAchievement = useCallback(() => {
    setAchievementQueue(prev => prev.slice(1));
  }, []);

  const activateDevMode = useCallback(() => {
    setDevMode(true);
    setTimeout(() => setDevMode(false), 5000);
  }, []);

  return (
    <GameContext.Provider value={{
      score, coins, visitedSections,
      unlockedAchievements, achievementQueue,
      devMode, soundEnabled,
      addCoins, visitSection, dismissAchievement,
      activateDevMode, setSoundEnabled,
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameState() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGameState must be used within GameProvider');
  return ctx;
}
