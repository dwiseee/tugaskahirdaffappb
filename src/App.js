import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Landingpage from './Pages/Landingpage';
import Character from './Pages/Character';
import Weapon from './Pages/Weapon';


function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Weapon" element={<Weapon />} />
        <Route path="/Character" element={<Character />} />
      </Routes>
    </Router>


  );
}

// Register the service worker
if ('serviceWorker' in navigator) {
  // Wait for the 'load' event to not block other work
  window.addEventListener('load', async () => {
    // Try to register the service worker.
    try {
      // Capture the registration for later use, if needed
      let reg;

      // Use ES Module version of our Service Worker in development
      if (import.meta.env?.DEV) {
        reg = await navigator.serviceWorker.register('/service-worker.js', {
          type: 'module',
        });
      } else {
        // In production, use the normal service worker registration
        reg = await navigator.serviceWorker.register('/service-worker.js');
      }

      console.log('Service worker registered! 😎', reg);
    } catch (err) {
      console.log('😥 Service worker registration failed: ', err);
    }
  });
}
export default App;
