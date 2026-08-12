import { useEffect, useRef } from 'react';
import { useGameState } from './useGameState';

const KONAMI = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
];

export function useKonamiCode() {
  const { activateDevMode } = useGameState();
  const buffer = useRef([]);

  useEffect(() => {
    const onKey = (e) => {
      buffer.current = [...buffer.current, e.key].slice(-KONAMI.length);
      if (buffer.current.join(',') === KONAMI.join(',')) {
        activateDevMode();
        buffer.current = [];
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activateDevMode]);
}
