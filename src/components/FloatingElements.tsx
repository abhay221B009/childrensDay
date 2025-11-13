import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  emoji: string;
  left: number;
  animationDelay: number;
  duration: number;
  size: number;
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const emojis = ['⭐', '💖', '🌟', '✨', '💫', '🎈', '🎊', '🌈', '💝', '🦋'];

    const floatingElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 20 + Math.random() * 20,
    }));

    setElements(floatingElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float-up opacity-30"
          style={{
            left: `${element.left}%`,
            bottom: '-50px',
            fontSize: `${element.size}px`,
            animationDelay: `${element.animationDelay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          {element.emoji}
        </div>
      ))}
    </div>
  );
}
