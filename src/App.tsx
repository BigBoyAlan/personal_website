import { useState, useEffect, useCallback } from 'react'; // Add hooks
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; // Import the new Home component
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SnakeGame from './components/SnakeGame'; // Import the Snake game
// We can remove the Hero import if it's not used directly in App anymore
// import Hero from './components/Hero'; 
import './App.css'; // Import the shared styles

// Konami Code sequence
const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

function App() {
  const [isSnakeVisible, setIsSnakeVisible] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const location = useLocation(); // Get current location

  const handleKonamiCode = useCallback((event: KeyboardEvent) => {
    // Append the pressed key to the sequence
    const newSequence = [...keySequence, event.key];
    // Keep only the last N keys (N = length of Konami code)
    const trimmedSequence = newSequence.slice(-konamiCode.length);
    setKeySequence(trimmedSequence);

    // Check if the sequence matches
    if (trimmedSequence.join('') === konamiCode.join('')) {
      setIsSnakeVisible(true);
      setKeySequence([]); // Reset sequence after activation
    }
  }, [keySequence]); // Depend on keySequence

  useEffect(() => {
    // Add listener only when the game is *not* visible
    if (!isSnakeVisible) {
      window.addEventListener('keydown', handleKonamiCode);
      // Cleanup function
      return () => {
        window.removeEventListener('keydown', handleKonamiCode);
      };
    } else {
       // Ensure no listener when game is visible (game handles its own keys)
       window.removeEventListener('keydown', handleKonamiCode);
    }
  }, [handleKonamiCode, isSnakeVisible]); // Re-run when visibility or handler changes

  const hideSnakeGame = () => {
    setIsSnakeVisible(false);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="app-main"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          {/* Optional: Add a catch-all route for 404 pages */}
          {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
        </Routes>
      </main>

      {/* Conditionally render hint based on path, outside main */} 
      {location.pathname === '/experience' && (
        <p className="easter-egg-hint app-level-hint">
          P.S. What happens if you press ↑ ↑ ↓ ↓ ← → ← → B A?
        </p>
      )}

      <Footer />

      {/* Conditionally render the Snake game overlay */}
      {isSnakeVisible && <SnakeGame onClose={hideSnakeGame} />}
    </div>
  );
}

export default App;
