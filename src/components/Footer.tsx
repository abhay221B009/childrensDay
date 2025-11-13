import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-700 flex-wrap">
          <p className="text-base sm:text-lg font-semibold">Made with</p>
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 animate-pulse fill-current" />
          <p className="text-base sm:text-lg font-semibold">by Mansi Mam</p>
        </div>

        <div className="mt-4 sm:mt-6 flex justify-center gap-2 sm:gap-3 text-xl sm:text-2xl flex-wrap">
          <span>🎉</span>
          <span>💖</span>
          <span>🌟</span>
          <span>✨</span>
          <span>🎈</span>
        </div>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 italic px-4">
          Forever cherishing these beautiful moments with you
        </p>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 italic px-4">
          © 2024 Mansi Mam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
