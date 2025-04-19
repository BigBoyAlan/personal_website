import React, { useState, useEffect, useCallback } from 'react';
import './SnakeGame.css';

// Basic game settings
const GRID_SIZE = 20;
const CELL_SIZE = 20; // pixels
const TICK_RATE = 150; // ms

const getRandomCoord = () => ({
  x: Math.floor(Math.random() * GRID_SIZE),
  y: Math.floor(Math.random() * GRID_SIZE),
});

interface SnakeGameProps {
  onClose: () => void;
}

const SnakeGame: React.FC<SnakeGameProps> = ({ onClose }) => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(getRandomCoord());
  const [direction, setDirection] = useState({ x: 1, y: 0 }); // Start moving right
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Game Loop
  useEffect(() => {
    if (isGameOver) return;

    const intervalId = setInterval(() => {
      setSnake(prevSnake => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        // Wall collision
        if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
          setIsGameOver(true);
          return prevSnake;
        }

        // Self collision
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setIsGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 1);
          setFood(getRandomCoord()); // Make sure new food doesn't spawn on snake
        } else {
          newSnake.pop(); // Remove tail if no food eaten
        }

        return newSnake;
      });
    }, TICK_RATE);

    return () => clearInterval(intervalId);
  }, [direction, food, isGameOver, snake]); // Rerun loop if these change

  // Keyboard Handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        case 'Escape': // Close on Escape key
          onClose();
          break;
        default:
          break;
      }
    }, [direction, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleRestart = () => {
      setSnake([{ x: 10, y: 10 }]);
      setFood(getRandomCoord());
      setDirection({ x: 1, y: 0 });
      setIsGameOver(false);
      setScore(0);
  }

  return (
    <div className="snake-game-overlay">
      <div className="snake-game-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Snake Game!</h2>
        <div 
          className="game-board"
          style={{
            width: `${GRID_SIZE * CELL_SIZE}px`,
            height: `${GRID_SIZE * CELL_SIZE}px`,
            gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          }}
        >
          {/* Render Snake */}
          {snake.map((segment, index) => (
            <div
              key={index}
              className="snake-segment"
              style={{ gridColumn: segment.x + 1, gridRow: segment.y + 1 }}
            />
          ))}
          {/* Render Food */}
          <div
            className="food"
            style={{ gridColumn: food.x + 1, gridRow: food.y + 1 }}
          />
        </div>
        <div className="game-info">
          <p>Score: {score}</p>
          {isGameOver && (
              <div className="game-over">
                  <p>Game Over!</p>
                  <button onClick={handleRestart}>Restart</button>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SnakeGame; 