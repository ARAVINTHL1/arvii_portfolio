import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameState } from '../hooks/useGameState';

// Fixed coin positions scattered through the page (% from top)
const COIN_POSITIONS = [
  { id: 1,  top: '18%',  left: '8%' },
  { id: 2,  top: '25%',  left: '92%' },
  { id: 3,  top: '38%',  left: '5%' },
  { id: 4,  top: '45%',  left: '88%' },
  { id: 5,  top: '56%',  left: '10%' },
  { id: 6,  top: '63%',  left: '94%' },
  { id: 7,  top: '72%',  left: '7%' },
  { id: 8,  top: '80%',  left: '90%' },
  { id: 9,  top: '88%',  left: '12%' },
  { id: 10, top: '93%',  left: '85%' },
];

function SingleCoin({ coin, onCollect }) {
  const [collected, setCollected] = useState(false);
  const [popup, setPopup] = useState(null);

  const handleClick = useCallback((e) => {
    if (collected) return;
    setCollected(true);
    setPopup({ x: e.clientX, y: e.clientY });
    onCollect();
    setTimeout(() => setPopup(null), 1200);
  }, [collected, onCollect]);

  if (collected) return null;

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{
          position: 'fixed',
          top: coin.top,
          left: coin.left,
          zIndex: 40,
        }}
        onClick={handleClick}
        aria-label="Collect coin"
        className="coin focus-visible:outline-none"
      />
      <AnimatePresence>
        {popup && (
          <div
            className="coin-popup"
            style={{ left: popup.x - 20, top: popup.y - 10 }}
          >
            +10 🟡
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function CoinSystem() {
  const { addCoins } = useGameState();

  const handleCollect = useCallback(() => {
    addCoins(10);
  }, [addCoins]);

  return (
    <>
      {COIN_POSITIONS.map(coin => (
        <SingleCoin key={coin.id} coin={coin} onCollect={handleCollect} />
      ))}
    </>
  );
}
