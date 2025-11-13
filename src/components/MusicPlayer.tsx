import { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, PlayCircle } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://www.bensound.com/bensound-music/bensound-ukulele.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        console.log('Playback prevented by browser');
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:top-6 sm:right-6 sm:bottom-auto z-50 flex gap-2">
      <button
        onClick={togglePlay}
        className="bg-white/90 hover:bg-white text-pink-600 rounded-full p-3 sm:p-4 shadow-lg transition-all hover:scale-110 active:scale-95 group"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Music className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
        ) : (
          <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {isPlaying && (
        <button
          onClick={toggleMute}
          className="bg-white/90 hover:bg-white text-blue-600 rounded-full p-3 sm:p-4 shadow-lg transition-all hover:scale-110 active:scale-95 animate-fade-in"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      )}

      {isPlaying && (
        <div className="absolute -top-12 right-0 sm:bottom-auto sm:-bottom-12 bg-white/90 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg animate-fade-in whitespace-nowrap">
          <p className="text-xs sm:text-xs text-gray-600 font-medium">Playing 🎵</p>
        </div>
      )}
    </div>
  );
}
