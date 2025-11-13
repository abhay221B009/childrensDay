import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import PhotoGallery from "./components/PhotoGallery";
// import VideoMemories from './components/VideoMemories';
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";
import Confetti from "./components/Confetti";
import FloatingElements from "./components/FloatingElements";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 relative overflow-hidden">
      {showConfetti && <Confetti />}
      <FloatingElements />
      <MusicPlayer />
      <Hero />
      <PhotoGallery />
      {/* <VideoMemories /> */}
      <Footer />
    </div>
  );
}

export default App;
