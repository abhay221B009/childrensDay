import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-4xl text-center space-y-6 sm:space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 sm:gap-3 text-4xl sm:text-6xl mb-4 sm:mb-6 animate-bounce-slow">
          🎉
          <Sparkles className="w-10 h-10 sm:w-16 sm:h-16 text-yellow-500 animate-spin-slow" />
          🌈
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight animate-slide-up">
          Happy Children's Day to My Wonderful Kids!
        </h1>

        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full animate-pulse"></div>

        <p className="text-base sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium max-w-2xl mx-auto animate-slide-up-delay">
          You are my sunshine, my pride, and my biggest joy. Wishing you
          laughter and love forever.- Mansi Mam
        </p>

        <div className="flex gap-2 sm:gap-4 justify-center text-2xl sm:text-4xl animate-float flex-wrap">
          <span>🎈</span>
          <span>⭐</span>
          <span>🎊</span>
          <span>💖</span>
          <span>🌟</span>
        </div>
      </div>
    </section>
  );
}
