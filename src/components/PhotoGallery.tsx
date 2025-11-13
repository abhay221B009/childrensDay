import { Camera } from "lucide-react";
import { useState } from "react";

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use image paths directly from the public folder
  const photos = [
    "/assets/img1.jpg",
    "/assets/img2.jpg",
    "/assets/img3.jpg",
    "/assets/img4.jpg",
    "/assets/img5.jpg",
    "/assets/img6.jpg",
    "/assets/img7.jpg",
    "/assets/img8.jpg",
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-pink-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-3 mb-4 flex-wrap justify-center">
            <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 animate-bounce" />
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800">
              Happy Children’s Day Memories
            </h2>
            <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 animate-bounce" />
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            A journey through smiles, laughter, and love 💖
          </p>
        </div>

        <div className="relative mb-8 sm:mb-10">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {photos.map((photo, index) => (
                <div key={index} className="min-w-full">
                  <img
                    src={photo}
                    alt={`Children's Day Memory ${index + 1}`}
                    className="w-full h-auto object-cover aspect-video rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg transition-all hover:scale-110 active:scale-95"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg transition-all hover:scale-110 active:scale-95"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-5">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-square overflow-hidden rounded-xl sm:rounded-2xl border-2 transition-all duration-300 active:scale-95 ${
                currentIndex === index
                  ? "border-pink-500 ring-2 ring-pink-200 scale-105"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={photo}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </button>
          ))}
        </div>

        <p className="mt-10 text-sm sm:text-base text-gray-500">
          Made with ❤️ by Mansi Mam— Happy Children’s Day 🌈
        </p>
      </div>
    </section>
  );
}
